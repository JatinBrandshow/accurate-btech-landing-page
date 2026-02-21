"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HostelFacilities = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Content Side */}
                    <div className="w-full lg:w-5/12 space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 leading-tight">
                                A <span className="text-secondary italic">Home</span> Away <br /> From Home.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                We provide separate, high-standard residential facilities for boys and girls,
                                designed to offer comfort, security, and a community atmosphere that supports
                                both academic focus and personal growth.
                            </p>
                        </motion.div>

                        {/* Facility Grid - Custom Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Secure Living", desc: "24/7 CCTV surveillance & professional security staff." },
                                { title: "Nutritious Dining", desc: "Modern mess providing healthy, multi-cuisine meals." },
                                { title: "Recreation Zones", desc: "Dedicated spaces for indoor games and relaxation." },
                                { title: "Wi-Fi Campus", desc: "High-speed internet connectivity in every room." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="border-l-4 border-secondary pl-4 group"
                                >
                                    <h4 className="text-primary font-black text-lg group-hover:text-secondary transition-colors uppercase tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Mosaic Gallery */}
                    <div className="w-full lg:w-7/12 order-1 lg:order-2">
                        <div className="relative grid grid-cols-12 gap-4 h-[500px] md:h-[650px]">

                            {/* Primary Room View - Clean Room */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="col-span-12 md:col-span-8 relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070"
                                    alt="Clean Modern Room"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black tracking-widest text-primary uppercase">
                                    Pristine Living Quarters
                                </div>
                            </motion.div>

                            {/* Lobby/Common Area View - Clean Lobby */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="hidden md:block md:col-span-4 relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070"
                                    alt="Clean Modern Lobby"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-secondary/10" />
                            </motion.div>

                            {/* Study/Social View - Clean Study Area */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="col-span-12 h-40 md:h-52 relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 mt-2"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2025"
                                    alt="Clean Study Space"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20" />
                                <div className="absolute right-8 bottom-6 text-white text-right">
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Hygienic Environment</p>
                                    <h5 className="text-xl font-black">Spaces That Inspire Focus</h5>
                                </div>
                            </motion.div>

                            {/* Overlapping Info Box - repositioned for mosaic */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="absolute -bottom-4 -left-6 lg:-left-12 bg-secondary p-6 rounded-3xl text-primary shadow-2xl z-30 hidden xl:block max-w-[200px]"
                            >
                                <div className="text-3xl font-black mb-1">100%</div>
                                <div className="text-[10px] font-black leading-tight uppercase tracking-widest opacity-80">
                                    Power Backup & Water Supply
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HostelFacilities;
