"use client";
// components/Sitemap3D.tsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Plane, Sphere } from '@react-three/drei';

const Sitemap3D: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleHover = (state: boolean) => {
    setHovered(state);
  };

  const handleClick = () => {
    setClicked(!clicked);
    alert("Section Clicked!");
  };

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      
      {/* Area Parkir */}
      <Plane 
        position={[0, -0.5, 0]} 
        args={[20, 20]} 
        onPointerOver={() => handleHover(true)} 
        onPointerOut={() => handleHover(false)} 
        onClick={handleClick}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial attach="material" color={hovered ? 'gray' : 'lightgray'} />
      </Plane>

      {/* Bangunan Restoran */}
      <Box 
        position={[5, 0, 5]} 
        args={[6, 3, 6]} 
        onPointerOver={() => handleHover(true)} 
        onPointerOut={() => handleHover(false)} 
        onClick={handleClick}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial attach="material" color={hovered ? 'lightblue' : 'blue'} />
      </Box>

      {/* Taman atau Kolam */}
      <Sphere 
        position={[-7, 0, 5]} 
        args={[2, 16, 16]} 
        onPointerOver={() => handleHover(true)} 
        onPointerOut={() => handleHover(false)} 
        onClick={handleClick}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial attach="material" color={hovered ? 'green' : 'forestgreen'} />
      </Sphere>

      {/* Jalan Utama */}
      <Plane 
        position={[0, 0, -10]} 
        args={[20, 5]} 
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerOver={() => handleHover(true)} 
        onPointerOut={() => handleHover(false)} 
        onClick={handleClick}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial attach="material" color={hovered ? 'brown' : 'saddlebrown'} />
      </Plane>
    </Canvas>
  );
};

export default Sitemap3D;

