"use client";

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create grid
    const gridHelper = new THREE.GridHelper(20, 20, 0x4338ca, 0x4338ca);
    scene.add(gridHelper);

    // Create sphere
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x4338ca,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(5, 2, -5);
    scene.add(sphere);

    // Camera position
    camera.position.set(4, 4, 8);
    camera.lookAt(0, 0, 0);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const windowHalf = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX - windowHalf.x) / windowHalf.x;
      mouse.y = (event.clientY - windowHalf.y) / windowHalf.y;

      // Rotate grid
      gridHelper.rotation.y = mouse.x * 0.1;
      gridHelper.rotation.x = mouse.y * 0.1;

      // Move sphere
      sphere.position.x = 5 + mouse.x;
      sphere.position.y = 2 + mouse.y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate sphere
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      windowHalf.x = width / 2;
      windowHalf.y = height / 2;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10"
      style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,1))' }}
    />
  );
}