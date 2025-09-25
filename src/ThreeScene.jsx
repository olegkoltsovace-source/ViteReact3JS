import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

const ThreeScene = ({ onOutcome }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const getSize = () => [mountRef.current.clientWidth, mountRef.current.clientHeight];
    let [width, height] = getSize();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    // Base color used for all faces initially
    const BASE_COLOR = new THREE.Color(0x000000);
    // Create 6 materials (one per face) so we can recolor faces independently
    const materials = Array.from({ length: 6 }, () => new THREE.MeshBasicMaterial({ color: BASE_COLOR.getHex() }));
    const cube = new THREE.Mesh(geometry, materials);
    cube.scale.set(0.7, 0.7, 0.7); // Make the cube about 30% smaller
    scene.add(cube);

    // Thicker golden borders using fat lines
    const edgesGeom = new THREE.EdgesGeometry(geometry);
    const fatEdgeGeo = new LineSegmentsGeometry();
    fatEdgeGeo.setPositions(edgesGeom.attributes.position.array);
    const fatEdgeMat = new LineMaterial({
      color: 0xFFD700,
      linewidth: 0.02, // world units thickness
      worldUnits: true,
    });
    // If using pixel-based linewidth, keep resolution in sync
    fatEdgeMat.resolution = new THREE.Vector2(width, height);
    const fatEdges = new LineSegments2(fatEdgeGeo, fatEdgeMat);
    fatEdges.scale.copy(cube.scale);
    scene.add(fatEdges);

    // Click detection with raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Simple per-face animation state machine
    // Phases: 'idle' -> 'fadeIn'(0.2s) -> 'hold'(2s) -> 'fadeOut'(0.2s) -> 'idle'
    const D_IN = 200;    // ms
    const D_HOLD = 2000; // ms
    const D_OUT = 200;   // ms

    const faceStates = Array.from({ length: 6 }, () => ({
      phase: 'idle',
      start: 0,
      from: new THREE.Color(BASE_COLOR),
      to: new THREE.Color(BASE_COLOR),
    }));

    const GOLD = new THREE.Color(0xFFD700);
    const RED = new THREE.Color(0xFF0000);
    const tmpColor = new THREE.Color(); // reused to avoid allocations

    function triggerFaceAnimation(index, targetColor) {
      if (index == null || !materials[index]) return;
      const st = faceStates[index];
      // Start fade-in from the current displayed color to the target color
      st.from.copy(materials[index].color);
      st.to.copy(targetColor);
      st.phase = 'fadeIn';
      st.start = performance.now();
    }

    function onClick(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(cube, false);
      if (intersects.length > 0) {
        const hit = intersects[0];
        const geom = cube.geometry;
        const triIndex = hit.faceIndex != null ? hit.faceIndex * 3 : 0;
        let faceMatIndex = 0;
        if (geom.groups && geom.groups.length > 0) {
          for (let i = 0; i < geom.groups.length; i++) {
            const g = geom.groups[i];
            if (triIndex >= g.start && triIndex < g.start + g.count) {
              faceMatIndex = g.materialIndex;
              break;
            }
          }
        }
        const win = Math.random() < 0.5;
        triggerFaceAnimation(faceMatIndex, win ? GOLD : RED);
        if (typeof onOutcome === 'function') {
          onOutcome(win ? 'win' : 'lose');
        }
      }
    }

    renderer.domElement.addEventListener('click', onClick);

    let frameId;
    // Auto-rotate continuously; user cannot rotate it manually
    const animate = () => {
      const now = performance.now();

      // Update per-face color animations
      for (let i = 0; i < faceStates.length; i++) {
        const st = faceStates[i];
        const mat = materials[i];
        if (!mat) continue;

        if (st.phase === 'fadeIn') {
          const t = Math.min(1, (now - st.start) / D_IN);
          tmpColor.copy(st.from).lerp(st.to, t);
          mat.color.copy(tmpColor);
          if (t >= 1) {
            st.phase = 'hold';
            st.start = now;
          }
        } else if (st.phase === 'hold') {
          if (now - st.start >= D_HOLD) {
            st.phase = 'fadeOut';
            st.start = now;
            st.from.copy(st.to);
            st.to.copy(BASE_COLOR);
          }
        } else if (st.phase === 'fadeOut') {
          const t = Math.min(1, (now - st.start) / D_OUT);
          tmpColor.copy(st.from).lerp(st.to, t);
          mat.color.copy(tmpColor);
          if (t >= 1) {
            st.phase = 'idle';
            mat.color.copy(BASE_COLOR);
          }
        }
      }

      cube.rotation.x += 0.0065;
      cube.rotation.y += 0.0065;
      fatEdges.rotation.copy(cube.rotation);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Responsive resize handler
    const handleResize = () => {
      [width, height] = getSize();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      // Keep fat line resolution in sync (useful if using pixel-based linewidth)
      fatEdgeMat.resolution.set(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      renderer.domElement.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Clean up geometry and materials
      geometry.dispose();
      edgesGeom.dispose();
      fatEdgeGeo.dispose();
      fatEdgeMat.dispose();
      materials.forEach(m => m.dispose());
      // fatEdges is removed with scene teardown; material/geometry disposed above
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', overflow: 'hidden' }} />;
};

export default ThreeScene;
