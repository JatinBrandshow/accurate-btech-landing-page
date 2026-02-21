"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sportsItems = [
    {
        title: "Olympic Size Pool",
        category: "Aquatics",
        image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=2070",
        size: "large"
    },
    {
        title: "Badminton Arena",
        category: "Indoor Sports",
        image: "https://images.unsplash.com/photo-1626225967045-9410ee7b3d39?q=80&w=2070",
        size: "small"
    },
    {
        title: "Cricket Grounds",
        category: "Outdoor",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067",
        size: "small"
    },
    {
        title: "Basketball Court",
        category: "Athletics",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090",
        size: "medium"
    },
    {
        title: "Indoor Games Room",
        category: "Recreation",
        image: "https://images.unsplash.com/photo-1629671962297-3949980d4631?q=80&w=2070",
        size: "small"
    },
    {
        title: "High-Tech Gymnasium",
        category: "Fitness",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070",
        size: "large"
    }
];

const SportsGallery = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-secondary font-black tracking-[0.3em] uppercase text-sm mb-4 block"
                        >
                            Arena & Athletics
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-primary uppercase"
                        >
                            Games & <span className="text-secondary">Sports.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 text-lg max-w-sm mb-2"
                    >
                        Pioneering physical excellence with world-class sporting infrastructure designed for champions.
                    </motion.p>
                </div>

                {/* Masonry-style Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[1000px]">

                    {/* Item 1 - Large Vertical (Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] shadow-xl"
                    >
                        <Image src={sportsItems[0].image} alt={sportsItems[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-8 left-8 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest">{sportsItems[0].category}</span>
                            <h3 className="text-2xl font-black uppercase">{sportsItems[0].title}</h3>
                        </div>
                    </motion.div>

                    {/* Item 2 - Small (Top Center) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-4 relative group overflow-hidden rounded-[2.5rem] shadow-xl h-[300px] md:h-auto"
                    >
                        <Image src={sportsItems[1].image} alt={sportsItems[1].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                            <div className="text-center p-6">
                                <span className="text-secondary font-bold text-xs uppercase tracking-widest">{sportsItems[1].category}</span>
                                <h3 className="text-xl font-black text-white uppercase">{sportsItems[1].title}</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Item 3 - Small (Top Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-4 relative group overflow-hidden rounded-[2.5rem] shadow-xl h-[300px] md:h-auto"
                    >
                        <Image src={sportsItems[2].image} alt={sportsItems[2].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                            <div className="text-center p-6">
                                <span className="text-secondary font-bold text-xs uppercase tracking-widest">{sportsItems[2].category}</span>
                                <h3 className="text-xl font-black text-white uppercase">{sportsItems[2].title}</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Item 4 - Medium Wide (Middle Center/Right) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-8 relative group overflow-hidden rounded-[2.5rem] shadow-xl h-[350px] md:h-auto"
                    >
                        <Image src={sportsItems[3].image} alt={sportsItems[3].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white -translate-x-10 group-hover:translate-x-0 transition-transform duration-500 pl-10">
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest">{sportsItems[3].category}</span>
                            <h3 className="text-3xl font-black uppercase">{sportsItems[3].title}</h3>
                            {/* <button className="mt-4 border-2 border-white px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-white hover:text-primary transition-colors">View Details</button> */}
                        </div>
                    </motion.div>

                    {/* Item 5 - Small (Bottom Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-3 relative group overflow-hidden rounded-[2.5rem] shadow-xl h-[300px] md:h-auto"
                    >
                        <Image src={sportsItems[4].image} alt={sportsItems[4].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-all">
                            <h3 className="text-lg font-black uppercase leading-tight">{sportsItems[4].title}</h3>
                        </div>
                    </motion.div>

                    {/* Item 6 - Medium (Bottom Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-9 relative group overflow-hidden rounded-[2.5rem] shadow-xl h-[300px] md:h-auto"
                    >
                        <Image src={sportsItems[5].image} alt={sportsItems[5].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-0.5 w-12 bg-secondary" />
                                <span className="text-secondary font-bold text-sm uppercase tracking-[0.3em]">{sportsItems[5].category}</span>
                            </div>
                            <h3 className="text-4xl font-black uppercase">{sportsItems[5].title}</h3>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Decorative Element */}
                <div className="mt-20 flex justify-center">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-20 bg-linear-to-b from-secondary to-transparent"
                    />
                </div>
            </div>
        </section>
    );
};

export default SportsGallery;
