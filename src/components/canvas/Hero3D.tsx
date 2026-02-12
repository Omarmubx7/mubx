'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Float, Icosahedron } from '@react-three/drei';

const DigitalCore = () => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <group rotation={[0, 0, Math.PI / 4]}>
                <Icosahedron args={[1, 1]}>
                    <meshStandardMaterial
                        color="#ff1e1e"
                        emissive="#ff1e1e"
                        emissiveIntensity={0.5}
                        wireframe
                        transparent
                        opacity={0.8}
                    />
                </Icosahedron>
                {/* Inner glow core */}
                <Icosahedron args={[0.6, 2]}>
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#ff0000"
                        emissiveIntensity={2}
                        transparent
                        opacity={0.3}
                    />
                </Icosahedron>
            </group>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div className='w-full h-full min-h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing'>
            <Canvas
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true }}
                camera={{ position: [0, 0, 4], fov: 45 }}
            >

                <Suspense fallback={null}>
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <DigitalCore />
                    <OrbitControls
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={5}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default Hero3D;
