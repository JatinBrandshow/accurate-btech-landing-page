"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LectureHalls = () => {
    return (
        <section className="relative py-24 bg-[#0b1d3a] overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Side - Four Image Collage Layout */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-12 gap-4 h-[500px] md:h-[650px]">
                            {/* Main Large Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="col-span-8 row-span-2 relative rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=2071"
                                    alt="Main Auditorium"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0b1d3a]/60 text-white p-6 flex items-end">
                                    <p className="text-sm font-bold uppercase tracking-widest">Main Auditorium</p>
                                </div>
                            </motion.div>

                            {/* Top Right Small */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="col-span-4 relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-xl h-[180px] md:h-auto"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
                                    alt="Interactive Hall"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Middle Right Small */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="col-span-4 relative rounded-3xl overflow-hidden border-2 border-[#fbbf24]/50 shadow-xl h-[180px] md:h-auto"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                                    alt="Discussion Pad"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Bottom Wide Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="col-span-12 relative h-40 md:h-48 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-xl mt-2"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
                                    alt="Smart Infrastructure"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-500" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-[#fbbf24] text-[#0b1d3a] text-sm font-bold tracking-widest uppercase mb-6">
                                Prime Learning Environment
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                                World-Class <br />
                                <span className="text-[#fbbf24]">Lecture Pavilions.</span>
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                                Our air-conditioned lecture halls are equipped with advanced audio-visual aids,
                                tiered seating for perfect visibility, and high-speed connectivity to foster
                                an immersive learning experience.
                            </p>
                        </motion.div>

                        {/* Feature List - Minimalist Style */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {[
                                { title: "Digital Projection", desc: "4K UHD interactive displays" },
                                { title: "Acoustic Design", desc: "Designed for clear sound" },
                                { title: "Comfort Seating", desc: "Ergonomic tiered arrangements" },
                                { title: "Global Connectivity", desc: "Hybrid-ready infrastructure" }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="w-1 h-full bg-[#fbbf24]/30 group-hover:bg-[#fbbf24] transition-colors duration-300" />
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{feature.title}</h4>
                                        <p className="text-white/60 text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <div className="pt-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#fbbf24] text-[#0b1d3a] px-10 py-4 rounded-xl font-black text-lg shadow-xl hover:shadow-[#fbbf24]/20 transition-all uppercase tracking-wider"
                            >
                                Experience 360° Tour
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Label - Vertical Text */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
                <span className="text-[12rem] font-black text-white/[0.03] rotate-90 origin-center whitespace-nowrap leading-none tracking-tighter">
                    THEATRE
                </span>
            </div>
        </section>
    );
};

export default LectureHalls;
