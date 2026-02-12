'use client';

import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Preload } from '@react-three/drei';

const StarsCanvas = () => {
    const [starCount, setStarCount] = useState(5000);

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) setStarCount(2000);
    }, []);

    return (
        <div className='w-full h-auto fixed inset-0 z-[-1] pointer-events-none bg-black'>
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>

                <Suspense fallback={null}>
                    <Stars
                        radius={100}
                        depth={50}
                        count={starCount}

                        factor={4}
                        saturation={0}
                        fade
                        speed={1}
                    />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
