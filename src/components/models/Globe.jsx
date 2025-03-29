import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Globe = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    const currentRef = mountRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup - positioned further back to accommodate larger model
    const camera = new THREE.PerspectiveCamera(
      60,
      currentRef.clientWidth / currentRef.clientHeight, 
      0.01,
      2000
    );
    camera.position.z = 20; 
    
    // Renderer setup with brightness enhancements
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setClearColor(0x000000, 0);
    currentRef.appendChild(renderer.domElement);
    
    // Enhanced Lighting Setup (from previous brightness improvements)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const secondaryLight = new THREE.DirectionalLight(0xffffff, 0.8);
    secondaryLight.position.set(-5, 3, -5);
    scene.add(secondaryLight);
    
    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(hemisphereLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 0.5, 20);
    pointLight.position.set(3, 5, 2);
    scene.add(pointLight);
    
    // Controls with adjusted limits for larger model
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = true;
    controls.minDistance = 10; 
    controls.maxDistance = 30; 
    
    let planet;
    const loader = new GLTFLoader();
    loader.load(
      '/models/planet.gltf',
      (gltf) => {
        planet = gltf.scene;
        
        // Calculate bounding box and center
        const box = new THREE.Box3().setFromObject(planet);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const center = box.getCenter(new THREE.Vector3());
        
        // Scale the model - significantly increased desiredSize
        const desiredSize = 25;
        const scale = desiredSize / maxDim;
        planet.scale.set(scale, scale, scale);
        
        // Center the model
        planet.position.x = -center.x * scale;
        planet.position.y = -center.y * scale;
        planet.position.z = -center.z * scale;
        
        // Increase material brightness
        planet.traverse((child) => {
          if (child.isMesh) {
            if (child.material) {
              child.material.emissiveIntensity = 0.2;
              child.material.needsUpdate = true;
            }
          }
        });
        
        scene.add(planet);
        
        // Adjust camera position based on the larger model size
        const radius = maxDim * scale;
        camera.position.z = radius * 2.8; 
        controls.update();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );
    
    const animate = () => {
      requestAnimationFrame(animate);
      if (planet) {
        planet.rotation.y += 0.005;
      }
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    const handleResize = () => {
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      currentRef.removeChild(renderer.domElement);
    };
  }, []);
  
  return <div ref={mountRef} style={{ 
    width: '100%', 
    height: '100%',
    overflow: 'hidden'
  }} />;
};

export default Globe;
