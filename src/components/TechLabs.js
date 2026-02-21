"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const labsData = [
    {
        name: "Advanced AI & Computing Center",
        description: "Equipped with high-performance GPU workstations and cloud-integrated systems, our computing labs empower students to build complex AI models, deep learning architectures, and scalable software solutions.",
        features: ["NVIDIA RTX Workstations", "Cloud Computing Hub", "Neural Network Research"],
        image: "https://images.unsplash.com/photo-1581092921461-7d15cb8905cd?q=80&w=2070",
        color: "blue"
    },
    {
        name: "Precision Robotics & Manufacturing",
        description: "A state-of-the-art facility featuring industrial-grade CNC machines and automated robotic arms. Here, theoretical designs are forged into mechanical reality through precision engineering.",
        features: ["CNC Machining", "Robotic Arm Prototyping", "CAD/CAM Integration"],
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2069",
        color: "gold"
    },
    {
        name: "VLSI & Embedded Systems Hub",
        description: "Focused on the future of electronics, this lab provides advanced tools for circuit design, microcontroller programming, and IoT testing, bridging the gap between hardware and intelligence.",
        features: ["IoT Testbeds", "Circuit Prototyping", "Digital Signal Processing"],
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069",
        color: "green"
    }
];

const TechLabs = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section - Bespoke Typography */}
                <div className="mb-24 relative">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-secondary font-black tracking-widest uppercase text-sm mb-4 block"
                    >
                        Research & Innovation
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-primary leading-tight max-w-4xl"
                    >
                        B.Tech Centers of <br />
                        <span className="text-secondary italic">Engineering Excellence.</span>
                    </motion.h2>

                    {/* Floating Decorative Element */}
                    <div className="absolute top-0 right-0 hidden lg:block">
                        <div className="w-32 h-32 border-8 border-secondary/20 rounded-full animate-pulse" />
                        <div className="w-16 h-16 bg-primary absolute -bottom-4 -left-4 rounded-lg transform rotate-45" />
                    </div>
                </div>

                {/* Labs Flow - No Cards, Just Integrated Layouts */}
                <div className="space-y-40">
                    {labsData.map((lab, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 lg:gap-24 uppercase-heading`}>

                            {/* Image Side - Overflowing & Large */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-3/5 relative h-[400px] md:h-[600px]"
                            >
                                {/* Decorative underline/background for image */}
                                <div className={`absolute -inset-4 transform ${index % 2 === 0 ? "-translate-x-4 translate-y-4" : "translate-x-4 translate-y-4"} bg-secondary/10 rounded-[3rem] -z-10`} />

                                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={lab.image}
                                        alt={lab.name}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Subtle Overlay to match brand */}
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                                </div>

                                {/* Floating Feature Badge */}
                                <div className={`absolute bottom-8 ${index % 2 === 0 ? "-right-8" : "-left-8"} bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[250px] border border-gray-100`}>
                                    <div className="flex flex-col gap-3">
                                        {lab.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                                <span className="text-xs font-bold text-gray-700">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Text Side - Strong Typography */}
                            <div className="w-full lg:w-2/5 space-y-8">
                                <div className="space-y-4">
                                    <span className="text-6xl md:text-8xl font-black text-gray-100 select-none leading-none">
                                        {`0${index + 1}`}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                                        {lab.name}
                                    </h3>
                                </div>

                                <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium capitalize-first">
                                    {lab.description}
                                </p>

                                <div className="pt-6">
                                    <button className="group flex items-center gap-4 text-primary font-black text-lg tracking-wider">
                                        LEARN MORE
                                        <span className="w-12 h-[2px] bg-secondary group-hover:w-20 transition-all duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Aesthetic Conclusion */}
                <div className="mt-40 pt-20 border-t border-gray-100 text-center">
                    <p className="text-primary/40 font-bold tracking-[0.5em] text-xs">
                        EMBRACING THE FUTURE OF ENGINEERING
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechLabs;
