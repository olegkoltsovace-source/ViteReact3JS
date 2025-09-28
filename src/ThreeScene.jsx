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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); // improve edge smoothness on HiDPI
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    // Base color used for all faces initially
    const BASE_COLOR = new THREE.Color(0x000000);
    // Create 6 materials (one per face) so we can recolor faces independently
    const materials = Array.from({ length: 6 }, () => new THREE.MeshBasicMaterial({ color: BASE_COLOR.getHex() }));
    // Container group to carry idle float + micro-rotation, keeping the cube geometry intact
    const container = new THREE.Group();
    scene.add(container);

    const cube = new THREE.Mesh(geometry, materials);
    cube.scale.set(0.7, 0.7, 0.7); // Make the cube about 30% smaller
    container.add(cube);

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
    // Reduce z-fighting and improve smoothness at joins
    fatEdgeMat.depthTest = true;
    fatEdgeMat.depthWrite = false;
    fatEdgeMat.polygonOffset = true;
    fatEdgeMat.polygonOffsetFactor = -1;
    fatEdgeMat.polygonOffsetUnits = 1;

    const fatEdges = new LineSegments2(fatEdgeGeo, fatEdgeMat);
    // Attach edges to the cube so they inherit position/rotation/scale automatically
    // This avoids any drift between faces and borders.
    cube.add(fatEdges);
    // Slightly up-scale edge object to sit just above faces to avoid gaps at grazing angles
    fatEdges.scale.set(1.005, 1.005, 1.005);

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
      justEnteredIdle: false, // used to skip one frame of idle pulse to avoid flicker
      idleMix: 1, // ramps from 0->1 when re-entering idle to avoid abrupt pulse
      from: new THREE.Color(BASE_COLOR),
      to: new THREE.Color(BASE_COLOR),
    }));

    const GOLD = new THREE.Color(0xFFD700);
    const RED = new THREE.Color(0xFF0000);
    const tmpColor = new THREE.Color(); // reused to avoid allocations

    // Edge (border) color animation state (for lose -> red -> back to gold)
    const EDGE_BASE = GOLD.clone();
    const edgeState = {
      phase: 'idle',
      start: 0,
      justEnteredIdle: false, // skip one frame of idle pulse after returning to idle
      idleMix: 1, // ramps from 0->1 when re-entering idle
      from: EDGE_BASE.clone(),
      to: EDGE_BASE.clone(),
    };

    function triggerFaceAnimation(index, targetColor) {
      if (index == null || !materials[index]) return;
      const st = faceStates[index];
      // Start fade-in from the current displayed color to the target color
      st.from.copy(materials[index].color);
      st.to.copy(targetColor);
      st.phase = 'fadeIn';
      st.start = performance.now();
      st.idleMix = 0; // leave idle immediately for this face
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
        if (win) {
          // Win: only the clicked face flashes gold
          triggerFaceAnimation(faceMatIndex, GOLD);
        } else {
          // Lose: all faces flash red, and borders animate to red
          for (let i = 0; i < materials.length; i++) {
            triggerFaceAnimation(i, RED);
          }
          edgeState.from.copy(fatEdgeMat.color);
          // During lose, make borders black while faces are red
          edgeState.to.copy(BASE_COLOR);
          edgeState.idleMix = 0; // leave idle; will ramp back when returning to idle
          edgeState.phase = 'fadeIn';
          edgeState.start = performance.now();
        }

        if (typeof onOutcome === 'function') {
          onOutcome(win ? 'win' : 'lose');
        }
      }
    }

    renderer.domElement.addEventListener('click', onClick);

    // Clock and idle animation configuration (no external libs)
    const clock = new THREE.Clock();
    const FLOAT_PERIOD = 4.0;     // seconds
    const ROT_PERIOD = 6.0;       // seconds
    const PULSE_PERIOD = 4.0;     // seconds

    const FLOAT_AMPL = 0.12;      // world units
    const ROT_AMPL = 0.20;        // radians

    // Background breathing (see styles.css defaults)
    const BG_ALPHA1_BASE = 0.22, BG_ALPHA1_DELTA = 0.08;
    const BG_ALPHA2_BASE = 0.12, BG_ALPHA2_DELTA = 0.06;

    // Idle face gold tint amounts
    const IDLE_GLOW_MIN = 0.08, IDLE_GLOW_DELTA = 0.12;
    const IDLE_FACE_RAMP = 0.18; // seconds to ramp idle face pulse back in
    const EDGE_IDLE_RAMP = 0.18; // seconds to ramp idle edge pulse back in

    let frameId;
    let lastNow = performance.now();
    // Main loop
    const animate = () => {
      const now = performance.now();
      const dtSec = (now - lastNow) / 1000;
      lastNow = now;

      // Idle float + micro-rotation (applied to container so the cube stays intact)
      const et = clock.getElapsedTime();
      const floatY = Math.sin(et * (Math.PI * 2) / FLOAT_PERIOD) * FLOAT_AMPL;
      const rotZ = Math.sin(et * (Math.PI * 2) / ROT_PERIOD) * ROT_AMPL;
      container.position.y = floatY;
      container.rotation.set(0, 0, rotZ);

      // Shared pulse factor in [0,1] for edges + background
      const p = 0.5 + 0.5 * Math.sin(et * (Math.PI * 2) / PULSE_PERIOD);

      // Edge brightness pulse via HSL lightness modulation
      // IMPORTANT: Only apply during idle. When edgeState is active (lose animation),
      // the state machine below owns the edge color (e.g., fades to red and then back).
      if (edgeState.phase === 'idle') {
        // Ramp idle pulse back in after border animations, starting exactly from base gold
        edgeState.idleMix = Math.min(1, edgeState.idleMix + dtSec / EDGE_IDLE_RAMP);
        const base = { h: 0, s: 0, l: 0 };
        EDGE_BASE.getHSL(base);
        const deltaL = 0.12; // max added lightness when fully ramped and pulse at peak
        const l = Math.min(1, Math.max(0, base.l + deltaL * p * edgeState.idleMix));
        fatEdgeMat.color.setHSL(base.h, base.s, l);
      }

      // Background breathing via CSS variables
      {
        const rs = document.documentElement.style;
        rs.setProperty('--bg-alpha1', String(BG_ALPHA1_BASE + BG_ALPHA1_DELTA * p));
        rs.setProperty('--bg-alpha2', String(BG_ALPHA2_BASE + BG_ALPHA2_DELTA * p));
      }

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
            st.justEnteredIdle = true; // mark to skip idle pulse write this frame
            mat.color.copy(BASE_COLOR);
          }
        } else if (st.phase === 'idle') {
          // Ramp idle pulse back in to avoid flicker after click animations end.
          st.idleMix = Math.min(1, st.idleMix + dtSec / IDLE_FACE_RAMP);
          const blend = (IDLE_GLOW_MIN + IDLE_GLOW_DELTA * p) * st.idleMix;
          tmpColor.copy(BASE_COLOR).lerp(GOLD, blend);
          mat.color.copy(tmpColor);
        }
      }

      // Update edge border color animations
      if (edgeState.phase === 'fadeIn') {
        const t = Math.min(1, (now - edgeState.start) / D_IN);
        tmpColor.copy(edgeState.from).lerp(edgeState.to, t);
        fatEdgeMat.color.copy(tmpColor);
        if (t >= 1) {
          edgeState.phase = 'hold';
          edgeState.start = now;
        }
      } else if (edgeState.phase === 'hold') {
        if (now - edgeState.start >= D_HOLD) {
          edgeState.phase = 'fadeOut';
          edgeState.start = now;
          edgeState.from.copy(edgeState.to);
          edgeState.to.copy(EDGE_BASE);
        }
      } else if (edgeState.phase === 'fadeOut') {
        const t = Math.min(1, (now - edgeState.start) / D_OUT);
        tmpColor.copy(edgeState.from).lerp(edgeState.to, t);
        fatEdgeMat.color.copy(tmpColor);
        if (t >= 1) {
          edgeState.phase = 'idle';
          edgeState.justEnteredIdle = true; // skip pulsing this frame
          fatEdgeMat.color.copy(EDGE_BASE);
        }
      }

      // Continuous rotation (as before) applied to the cube itself
      // This stacks with the container's idle micro-rotation on Z
      cube.rotation.x += 0.0065;
      cube.rotation.y += 0.0065;
      // fatEdges is a child of cube; transforms are inherited (no manual sync required)
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
