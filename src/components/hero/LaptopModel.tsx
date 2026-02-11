import React, { useRef, useEffect } from 'react';
import { useGLTF, Environment, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MotionValue } from 'framer-motion';
import * as THREE from 'three';

interface LaptopModelProps {
    scrollProgress: MotionValue<number>;
}

export default function LaptopModel({ scrollProgress }: LaptopModelProps) {
    const group = useRef<THREE.Group>(null);

    // Load model - using a standard MacBook Pro model from pmnd.rs market
    const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/macbook/model.gltf');

    // Use a ref to store the latest scroll value to avoid re-renders
    const progressRef = useRef(0);

    useEffect(() => {
        const unsubscribe = scrollProgress.on("change", (latest) => {
            progressRef.current = latest;
        });
        return () => unsubscribe();
    }, [scrollProgress]);

    useFrame((state) => {
        if (!group.current) return;

        // Smooth lerp for values
        const progress = progressRef.current;

        // Rotation logic
        // Y Rotation: -0.3 (start) to 0.3 (end)
        const targetRotY = THREE.MathUtils.lerp(-0.3, 0.3, progress);

        // X Rotation: -0.1 (tilted back) to 0.1 (tilted forward)
        const targetRotX = THREE.MathUtils.lerp(-0.1, 0.1, progress);

        // Apply rotation with smoothing
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.1);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.1);

        // Subtle floating animation is handled by <Float> wrapper, but we can add more specific movement here if needed.
    });

    return (
        <group ref={group} dispose={null} position={[0, -1, 0]}>
            <Float
                speed={2}
                rotationIntensity={0.5}
                floatIntensity={0.5}
                floatingRange={[-0.1, 0.1]}
            >
                <primitive object={scene} scale={2.5} />

                {/* Screen light/emission simulation */}
                <mesh position={[0, 1.5, -1.2]} rotation={[0, 0, 0]}>
                    <planeGeometry args={[3, 2]} />
                    <meshBasicMaterial color="#00ffff" opacity={0.1} transparent side={THREE.DoubleSide} />
                </mesh>
            </Float>

            {/* Contact Shadow or ground reflection could go here */}
        </group>
    );
}


