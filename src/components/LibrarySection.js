"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LibrarySection = () => {
    return (
        <section className="relative py-24 bg-[#0b1d3a] overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/[0.03] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side - Collage with a specific style */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            {/* Main Background Image - Large Vertical */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative h-[600px] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070"
                                    alt="Central Library"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0b1d3a] via-[#0b1d3a]/20 to-transparent" />
                            </motion.div>

                            {/* Floating Digital Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute -right-8 top-1/4 bg-[#fbbf24] p-6 rounded-3xl shadow-2xl hidden md:block max-w-[200px]"
                            >
                                <div className="text-primary font-black text-3xl mb-1 italic">LIBRARY</div>
                                <p className="text-primary/70 text-xs font-bold uppercase tracking-widest leading-tight">
                                    Access to 10M+ Digital Research Papers & Journals
                                </p>
                            </motion.div>

                            {/* Bottom Floating Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 bg-white p-6 rounded-[2rem] shadow-2xl flex justify-around items-center"
                            >
                                <div className="text-center">
                                    <div className="text-primary font-black text-2xl">50,000+</div>
                                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Volumes</div>
                                </div>
                                <div className="w-[1px] h-8 bg-gray-100" />
                                <div className="text-center">
                                    <div className="text-primary font-black text-2xl">500+</div>
                                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Seating</div>
                                </div>
                                <div className="w-[1px] h-8 bg-gray-100" />
                                <div className="text-center">
                                    <div className="text-primary font-black text-2xl">24/7</div>
                                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Online Access</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-secondary font-black tracking-widest uppercase text-sm mb-4 block">Knowledge Hub</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                                The Fountainhead <br />
                                <span className="text-secondary">Of Wisdom.</span>
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed text-justify">
                                Our central library is more than just a collection of books; it's a modern research
                                sanctuary designed for the digital age. From rare engineering manuscripts to the latest
                                global software journals, everything you need is right at your fingertips.
                            </p>
                        </motion.div>

                        {/* Custom Icon List */}
                        <div className="space-y-6">
                            {[
                                { title: "Global E-Resources", desc: "Access to IEEE, J-Gate, and Springer journals from anywhere on campus." },
                                { title: "Automated Circulation", desc: "Advanced RFID-based book tracking for seamless borrowing and returns." },
                                { title: "Silent Study Zones", desc: "Comfortable, noise-isolated areas designed for deep research and focus." }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 * idx }}
                                    className="group flex items-start gap-4"
                                >
                                    <div className="mt-1 w-2 h-2 rounded-full bg-secondary shrink-0 group-hover:scale-150 transition-transform" />
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-1">{feature.title}</h4>
                                        <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-secondary text-secondary px-10 py-4 rounded-xl font-black text-lg hover:bg-secondary hover:text-primary transition-all uppercase tracking-widest"
                            >
                                Explore Catalog
                            </motion.button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Decorative Large Text */}
            <div className="absolute left-0 bottom-0 pointer-events-none select-none overflow-hidden h-32">
                <span className="text-[10rem] font-black text-white/[0.02] leading-none tracking-tighter uppercase block transform translate-y-12">
                    Research & Reference
                </span>
            </div>
        </section>
    );
};

export default LibrarySection;
