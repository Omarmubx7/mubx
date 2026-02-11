import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MotionValue } from 'framer-motion';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

interface LaptopModelProps {
    scrollProgress: MotionValue<number>;
}

export default function LaptopModel({ scrollProgress }: LaptopModelProps) {
    const group = useRef<THREE.Group>(null);
    const lidGroup = useRef<THREE.Group>(null);

    // Use a ref to store the latest scroll value to avoid re-renders
    const progressRef = useRef(0);

    useEffect(() => {
        const unsubscribe = scrollProgress.on("change", (latest) => {
            progressRef.current = latest;
        });
        return () => unsubscribe();
    }, [scrollProgress]);

    useFrame((state) => {
        if (!group.current || !lidGroup.current) return;

        // Smooth lerp for values
        const progress = progressRef.current;

        // Rotation logic for the whole laptop
        // Y Rotation: -0.3 (start) to 0.3 (end)
        const targetRotY = THREE.MathUtils.lerp(-0.3, 0.3, progress);

        // X Rotation: -0.1 (tilted back) to 0.1 (tilted forward)
        const targetRotX = THREE.MathUtils.lerp(-0.1, 0.1, progress);

        // Apply rotation with smoothing
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.1);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.1);

        // Lid opening logic
        // Open lid slightly as we scroll? Or maybe close it slightly?
        // Let's keep it open, maybe slightly adjust angle
        // Lid rotation X: 0 (closed) to -1.5 (open 90 deg) or more
        // constant open
    });

    return (
        <group ref={group} dispose={null} position={[0, -1, 0]}>
            <Float
                speed={2}
                rotationIntensity={0.5}
                floatIntensity={0.5}
                floatingRange={[-0.1, 0.1]}
            >
                {/* Laptop Base */}
                <group position={[0, 0, 0]}>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[2.8, 0.1, 1.8]} />
                        <meshStandardMaterial color="#888888" roughness={0.2} metalness={0.8} />
                    </mesh>
                    {/* Keyboard Area (Darker) */}
                    <mesh position={[0, 0.06, 0.2]} rotation={[-0.05, 0, 0]}>
                        <planeGeometry args={[2.4, 0.8]} />
                        <meshStandardMaterial color="#222" roughness={0.8} />
                    </mesh>
                    {/* Trackpad */}
                    <mesh position={[0, 0.06, 0.7]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[0.8, 0.5]} />
                        <meshStandardMaterial color="#777" roughness={0.3} metalness={0.7} />
                    </mesh>
                </group>

                {/* Laptop Lid Group (This pivots at the back) */}
                <group ref={lidGroup} position={[0, 0.05, -0.9]} rotation={[Math.PI / 10, 0, 0]}>
                    {/* Pivot point adjustment */}
                    <group rotation={[-Math.PI / 2.2, 0, 0]} position={[0, 0, 0]}>
                        {/* Actual Lid Mesh */}
                        <mesh position={[0, 0.9, 0]}> {/* Centered relative to pivot */}
                            <boxGeometry args={[2.8, 1.8, 0.1]} />
                            <meshStandardMaterial color="#777777" roughness={0.2} metalness={0.8} />
                        </mesh>

                        {/* Apple Logo (Glowing) */}
                        <mesh position={[0, 0.9, -0.06]} rotation={[0, Math.PI, 0]}>
                            <circleGeometry args={[0.15, 32]} />
                            <meshBasicMaterial color="#ffffff" toneMapped={false} />
                        </mesh>

                        {/* Screen (Black Border) */}
                        <mesh position={[0, 0.9, 0.06]} rotation={[0, 0, 0]}>
                            <boxGeometry args={[2.7, 1.7, 0.01]} />
                            <meshStandardMaterial color="#111" roughness={0.2} />
                        </mesh>

                        {/* Screen Display (Emissive) */}
                        <mesh position={[0, 0.95, 0.07]} rotation={[0, 0, 0]}>
                            <planeGeometry args={[2.6, 1.6]} />
                            <meshBasicMaterial color="#00ffff" opacity={0.1} transparent side={THREE.DoubleSide} />
                            {/* Inner Glow */}
                            <meshBasicMaterial color="#000" />
                        </mesh>
                    </group>
                </group>
            </Float>
        </group>
    );
}
