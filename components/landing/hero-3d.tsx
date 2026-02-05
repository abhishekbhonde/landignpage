"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Stars, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.5, 64, 64]} ref={meshRef}>
                <MeshDistortMaterial
                    color="#1e1e2ec0" // Dark bluish-gray
                    attach="material"
                    distort={0.4} // Strength of distortion
                    speed={2} // Speed of distortion
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

function FloatingParticles() {
    return (
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    )
}

export function Hero3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#4f46e5" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
                {/* <AnimatedSphere /> */}
                {/* Optional: Add a central sphere if desired, but "Stars" alone is cleaner for compliance */}
                <FloatingParticles />
                <Float speed={4} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={[2, -1, -2]}>
                        <icosahedronGeometry args={[0.5, 0]} />
                        <meshStandardMaterial color="#333" wireframe />
                    </mesh>
                </Float>
                <Float speed={2} rotationIntensity={2} floatIntensity={0.5}>
                    <mesh position={[-2, 2, -3]}>
                        <torusGeometry args={[0.4, 0.1, 16, 100]} />
                        <meshStandardMaterial color="#444" roughness={0.2} metalness={1} />
                    </mesh>
                </Float>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black pointer-events-none"></div>
        </div>
    );
}
