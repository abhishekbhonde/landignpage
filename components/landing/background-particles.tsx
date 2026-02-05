"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

export function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Particles />
            </Canvas>
            <div className="absolute inset-0 bg-zinc-950/80"></div>
            {/* Overlay to ensure text readability */}
        </div>
    );
}

function Particles(props: any) {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#a1a1aa"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}
