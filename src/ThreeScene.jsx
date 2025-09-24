import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
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
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.scale.set(0.7, 0.7, 0.7); // Make the cube about 30% smaller
    scene.add(cube);

    // Add black wireframe borders as a separate object
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0x000000 })
    );
    line.scale.copy(cube.scale);
    scene.add(line);

    // No scaling: keep cube perfectly proportional

    let frameId;
      // Drag-to-rotate state
      let isDragging = false;
      let lastX = 0;
      let lastY = 0;

      // Mouse events
      function onPointerDown(e) {
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
        autoRotatePaused = true;
      }
      function onPointerMove(e) {
        if (!isDragging) return;
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        lastX = e.clientX;
        lastY = e.clientY;
        // Adjust rotation speed as needed
        autoRotY += deltaX * 0.01;
        autoRotX += deltaY * 0.01;
      }
      function onPointerUp() {
        isDragging = false;
        autoRotatePaused = false;
      }

      // Touch events
      function onTouchStart(e) {
        if (e.touches.length === 1) {
          isDragging = true;
          lastX = e.touches[0].clientX;
          lastY = e.touches[0].clientY;
          autoRotatePaused = true;
        }
      }
      function onTouchMove(e) {
        if (!isDragging || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - lastX;
        const deltaY = e.touches[0].clientY - lastY;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
        autoRotY += deltaX * 0.01;
        autoRotX += deltaY * 0.01;
      }
      function onTouchEnd() {
        isDragging = false;
        autoRotatePaused = false;
      }

      mountRef.current.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      mountRef.current.addEventListener('touchstart', onTouchStart, { passive: false });
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onTouchEnd);

      // Auto-rotation state
      let autoRotX = 0;
      let autoRotY = 0;
      let autoRotatePaused = false;
      const animate = () => {
        // Only auto-rotate if not dragging
        if (!autoRotatePaused) {
          autoRotX += 0.01;
          autoRotY += 0.01;
        }
        cube.rotation.x = autoRotX;
        cube.rotation.y = autoRotY;
        line.rotation.x = cube.rotation.x;
        line.rotation.y = cube.rotation.y;
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
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
  renderer.dispose();
  mountRef.current.removeChild(renderer.domElement);
  window.removeEventListener('resize', handleResize);
  // Clean up geometry and material
  mountRef.current.removeEventListener('pointerdown', onPointerDown);
  window.removeEventListener('pointermove', onPointerMove);
  window.removeEventListener('pointerup', onPointerUp);
  mountRef.current.removeEventListener('touchstart', onTouchStart);
  window.removeEventListener('touchmove', onTouchMove);
  window.removeEventListener('touchend', onTouchEnd);
  geometry.dispose();
  edges.dispose();
  material.dispose();
  line.material.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', overflow: 'hidden' }} />;
};

export default ThreeScene;
