"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SparklesProps = {
    id?: string;
    className?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    speed?: number;
    particleColor?: string;
    particleDensity?: number;
};

export const SparklesCore = (props: SparklesProps) => {
    const {
        id,
        className,
        background,
        minSize,
        maxSize,
        speed,
        particleColor,
        particleDensity,
    } = props;
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const controls = {
        background: {
            color: {
                value: background || "#0d47a1",
            },
        },
        fullScreen: {
            enable: false,
            zIndex: 1,
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: true as any,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            bounce: {
                horizontal: {
                    value: 1,
                },
                vertical: {
                    value: 1,
                },
            },
            collisions: {
                absorb: {
                    speed: 2,
                },
                bounce: {
                    horizontal: {
                        value: 1,
                    },
                    vertical: {
                        value: 1,
                    },
                },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: {
                    enable: true,
                    retries: 0,
                },
            },
            color: {
                value: particleColor || "#ffffff",
                animation: {
                    h: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        delay: 0,
                        decay: 0,
                        sync: true,
                    },
                    s: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        delay: 0,
                        decay: 0,
                        sync: true,
                    },
                    l: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        delay: 0,
                        decay: 0,
                        sync: true,
                    },
                },
            },
            move: {
                angle: {
                    offset: 0,
                    value: 90,
                },
                attract: {
                    distance: 200,
                    enable: false,
                    rotate: {
                        x: 600,
                        y: 1200,
                    },
                },
                center: {
                    x: 50,
                    y: 50,
                    mode: "percent",
                    radius: 0,
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                    acceleration: 9.81,
                    enable: false,
                    inverse: false,
                    maxSpeed: 50,
                },
                path: {
                    clamp: true,
                    delay: {
                        random: {
                            enable: false,
                            minimumValue: 0,
                        },
                        value: 0,
                    },
                    enable: false,
                    options: {},
                },
                outModes: {
                    default: "out",
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out",
                },
                random: false,
                size: false,
                speed: {
                    min: 0.1,
                    max: 1,
                },
                spin: {
                    acceleration: 0,
                    enable: false,
                },
                straight: false,
                trail: {
                    enable: false,
                    length: 10,
                    fill: {},
                },
                vibrate: false,
                warp: false,
            },
            number: {
                density: {
                    enable: true,
                    width: 400,
                    height: 400,
                },
                limit: {
                    mode: "delete",
                    value: 0,
                },
                value: particleDensity || 120,
            },
            opacity: {
                random: {
                    enable: false,
                    minimumValue: 0.1,
                },
                value: {
                    min: 0.1,
                    max: 1,
                },
                animation: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: false,
                    mode: "auto",
                    startValue: "random",
                    destroy: "none",
                    minimumValue: 0.1,
                },
            },
            reduceDuplicates: false,
            shadow: {
                blur: 0,
                color: {
                    value: "#000",
                },
                enable: false,
                offset: {
                    x: 0,
                    y: 0,
                },
            },
            shape: {
                close: true,
                fill: true,
                options: {},
                type: "circle",
            },
            size: {
                random: {
                    enable: false,
                    minimumValue: 1,
                },
                value: {
                    min: minSize || 1,
                    max: maxSize || 3,
                },
                animation: {
                    count: 0,
                    enable: false,
                    speed: 5,
                    decay: 0,
                    delay: 0,
                    sync: false,
                    mode: "auto",
                    startValue: "random",
                    destroy: "none",
                    minimumValue: 0.1,
                },
            },
            stroke: {
                width: 0,
            },
            zLayers: 100,
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={cn("opacity-0", className)}
        >
            {init && (
                <Particles
                    id={id || "tsparticles"}
                    className={cn("h-full w-full")}
                    particlesLoaded={async (container?: Container) => {
                        console.log(container);
                    }}
                    options={controls as any}
                />
            )}
        </motion.div>
    );
};
