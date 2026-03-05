"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ChevronRight } from 'lucide-react';

export default function DetailTypes({ content }) {
    if (!content?.types) return null;

    return (
        <section id="types" className="relative scroll-mt-32 w-full py-24 bg-zinc-50 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-stretch">

                    {/* Sticky Sidebar (3 Cols) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* Editorial Header Area (About Us Style) */}
                            <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group">
                                {/* Background Text Watermark */}
                                <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                                    <span
                                        className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter"
                                        style={{ color: 'lab(43 65.24 9.02 / 0.15)' }}
                                    >
                                        TYPES
                                    </span>
                                </div>

                                {/* Content Block */}
                                <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                                    <div className="flex flex-col items-start text-left">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                            VARIANTS
                                        </span>
                                        <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                            DIAGNOSTIC <br /> DIVERSITY
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xl font-bold text-zinc-400 leading-tight tracking-tighter max-w-xs mb-12">
                                Every cataract case is unique. We categorize them by their anatomical location and progression.
                            </p>

                            <div className="flex items-center gap-6">
                                <div className="p-6 rounded-full bg-white shadow-xl border border-zinc-100 flex items-center justify-center">
                                    <Layers size={32} className="text-[#c23c77]" />
                                </div>
                                <div className="text-[10px] font-black text-black uppercase tracking-widest">Formal Medical Selection</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scrollable Gallery (8 Cols + 1 Offset) */}
                    <div className="lg:col-span-7 lg:col-start-6">
                        <div className="grid grid-cols-1 gap-12">
                            {content.types.map((type, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="group relative flex flex-col md:flex-row items-stretch bg-white rounded-[60px] overflow-hidden shadow-2xl hover:shadow-[0_80px_100px_-30px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-2 border border-zinc-100"
                                >
                                    {/* Column 1: Index & Visual */}
                                    <div className="w-full md:w-48 bg-black p-10 flex flex-col justify-between items-center text-center">
                                        <span className="text-white/20 text-6xl font-black font-mono">0{i + 1}</span>
                                        <div className="w-12 h-12 rounded-2xl bg-[#c23c77] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                            <Layers size={24} />
                                        </div>
                                    </div>

                                    {/* Column 2: Content */}
                                    <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-2 h-2 rounded-full bg-[#c23c77]/30 group-hover:bg-[#c23c77] transition-all" />
                                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Anatomical Focus</span>
                                        </div>
                                        <h4 className="text-3xl lg:text-5xl font-black text-black uppercase tracking-tighter leading-none mb-8 group-hover:text-[#c23c77] transition-colors">
                                            {type.name}
                                        </h4>
                                        <p className="text-lg text-zinc-500 font-bold leading-relaxed max-w-md">
                                            {type.description}
                                        </p>
                                    </div>

                                    {/* The Interactive Arrow */}
                                    <div className="absolute top-1/2 right-0 -translate-y-1/2 p-10 opacity-0 group-hover:opacity-100 transition-all transform translate-x-12 group-hover:translate-x-0 hidden lg:block">
                                        <button className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-300 hover:bg-[#c23c77] hover:text-white hover:shadow-2xl transition-all">
                                            <ChevronRight size={32} strokeWidth={3} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Context */}
                        <div className="mt-24 p-12 rounded-[50px] bg-white border border-dashed border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-8">
                            <p className="text-xs font-black text-zinc-400 uppercase tracking-widest text-center md:text-left">
                                Specific variants may require advanced laser assistance or surgical customization.
                            </p>
                            <div className="h-0.5 w-12 bg-zinc-100 hidden md:block" />
                            <span className="text-[#c23c77] text-[10px] font-black uppercase tracking-widest">Medical Accuracy Confirmed</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Narrative Watermark */}
            <div className="absolute bottom-20 left-0 w-full opacity-[0.02] overflow-hidden whitespace-nowrap pointer-events-none select-none">
                <span className="text-[250px] font-black uppercase tracking-tighter text-black">
                    CLINICAL VARIANTS CLINICAL VARIANTS
                </span>
            </div>
        </section>
    );
}
