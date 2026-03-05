"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Moon, Sun, Target, Layers, Activity, Type, ShieldAlert } from 'lucide-react';

export default function DetailSymptoms({ content }) {
    if (!content?.symptoms) return null;

    const symptomsList = [
        {
            title: "Cloudy Vision",
            full: "Blurry or cloudy vision",
            desc: "The primary indicator of cataract progression. You may feel like you are looking through a foggy or frosted windowpane that does not clear with glasses.",
            icon: Eye
        },
        {
            title: "Night Deficit",
            full: "Difficulty seeing at night or in low light",
            desc: "Significant reduction in visual contrast during low-light hours. Streetlights and oncoming headlights may appear overwhelming or unclear.",
            icon: Moon
        },
        {
            title: "Photophobia",
            full: "Sensitivity to bright lights and glare",
            desc: "Indoor lighting or sunlight may feel unusually bright, causing squinting or a dull ache as light scatters within the clouded lens.",
            icon: Sun
        },
        {
            title: "Halo Effects",
            full: "Halos around lights, especially while driving",
            desc: "Direct light sources may appear surrounded by circular rings or 'halos'. This is particularly noticeable and distracting while driving at night.",
            icon: Target
        },
        {
            title: "Color Shift",
            full: "Faded, yellowed, or dull colors",
            icon: Layers,
            desc: "Colors lose their vibrancy and may appear faded. Whites often take on a distinct yellow or brownish tint as the lens density changes."
        },
        {
            title: "Double Vision",
            full: "Double vision in one eye",
            icon: Activity,
            desc: "Seeing multiple images of a single object (monocular diplopia) even when one eye is closed. This is a clear sign of lens structural shifts."
        },
        {
            title: "Prescription Sync",
            full: "Frequent changes in eyeglass prescription",
            icon: Type,
            desc: "Your eyeglass or contact lens prescription may require frequent updates as the cataract's growth changes the eye's focal power."
        },
        {
            title: "Focus Strain",
            full: "Trouble reading small print even with glasses",
            icon: ShieldAlert,
            desc: "Difficulty focusing on close-up tasks or fine text even with current reading glasses. Objects require significantly more light to be seen clearly."
        }
    ];

    return (
        <section id="symptoms" className="relative scroll-mt-32 w-full py-24 lg:py-56 bg-white overflow-hidden">
            {/* Atmospheric Background: Soft Clinical Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#c23c77]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-[100px]" />

                {/* Minimal Grid for Precision Feel */}
                <div className="absolute inset-0 opacity-[0.015]"
                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                />
            </div>

            <div className="w-full relative z-10 px-4 md:px-12">
                {/* Editorial Header Area (About Us Style) */}
                <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group container-custom mx-auto">
                    {/* Background Text Watermark */}
                    <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                        <span
                            className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter"
                            style={{ color: 'lab(43 65.24 9.02 / 0.15)' }}
                        >
                            SYMPTOMS
                        </span>
                    </div>

                    {/* Content Block */}
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                DIAGNOSTIC GUIDE
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                WARNING <br /> SIGNALS
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="container-custom mx-auto mb-24">
                    <p className="text-xl md:text-2xl font-bold text-zinc-400 uppercase tracking-tighter italic max-w-2xl">
                        If you experience these transformations in vision, your lens may be undergoing progressive opacification.
                    </p>
                </div>

                {/* The Improved Symptoms Board: Full-Width 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 rounded-[40px] md:rounded-[60px] overflow-hidden border border-zinc-100 shadow-2xl shadow-black/5">
                    {symptomsList.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white p-8 lg:p-10 group relative flex flex-col justify-between hover:bg-zinc-50 transition-all duration-700 min-h-[360px]"
                        >
                            <div className="relative z-10">
                                <header className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 text-[#c23c77] flex items-center justify-center group-hover:bg-[#c23c77] group-hover:text-white transition-all duration-700 shadow-sm border border-zinc-100">
                                        <item.icon size={24} />
                                    </div>
                                </header>

                                <div className="space-y-4">
                                    <h3 className="text-xl lg:text-2xl font-black text-black uppercase tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-700">
                                        {item.full}
                                    </h3>
                                    <div className="h-px w-8 bg-[#c23c77]/20 group-hover:w-16 group-hover:bg-[#c23c77] transition-all duration-700" />
                                    <p className="text-sm lg:text-base font-bold text-zinc-400 leading-relaxed group-hover:text-zinc-600 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
