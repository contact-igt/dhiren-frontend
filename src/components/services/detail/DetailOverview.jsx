"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Award, CheckCircle2 } from 'lucide-react';

export default function DetailOverview({ content, image, getClinicalAsset }) {
    return (
        <section id="overview" className="relative scroll-mt-32 w-full py-16 lg:py-32 bg-white overflow-hidden">
            {/* Minimalist Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 -skew-x-12 translate-x-20 hidden lg:block border-l border-zinc-100/50" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group container-custom mx-auto">
                    {/* Background Text Watermark */}
                    <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                        <span
                            className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter"
                            style={{ color: 'lab(43 65.24 9.02 / 0.15)' }}
                        >
                            OVERVIEW
                        </span>
                    </div>

                    {/* Content Block */}
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                Clinical Insight
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                PRECISION <br /> VISION RESTORATION
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

                    {/* Left: Punchy Editorial Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <p className="text-lg font-bold text-black/70 leading-relaxed tracking-tight border-b border-zinc-100 pb-6">
                                        {content?.introduction}
                                    </p>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-[11px] font-black uppercase tracking-tight text-zinc-600">Advanced IOL Technology</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-[11px] font-black uppercase tracking-tight text-zinc-600">Microsurgical Precision</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Expertise Card - Integrated and Compact */}
                                <div className="p-8 rounded-[30px] bg-zinc-950 text-white relative group overflow-hidden flex flex-col justify-between shadow-2xl">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                        <Award size={60} />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#c23c77] flex items-center justify-center mb-6 shadow-lg shadow-[#c23c77]/20">
                                            <Sparkles size={18} className="text-white" />
                                        </div>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-[#c23c77] mb-2">Lead Surgeon</h4>
                                        <p className="text-lg font-black tracking-tight mb-4">DR. VISHAL MANIAR</p>
                                        <p className="text-xs font-bold text-zinc-500 leading-relaxed italic line-clamp-3 group-hover:text-zinc-300 transition-colors">
                                            {content?.expertise}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-end items-center text-[10px] font-black tracking-widest text-[#c23c77]">
                                        <span>CERTIFIED EXPERT</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Dynamic Visual Accent */}
                    <div className="lg:col-span-5 relative flex items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full relative group"
                        >
                            {/* Architectural Frame */}
                            <div className="absolute -inset-4 border border-zinc-100 rounded-[50px] -z-10 group-hover:-inset-6 transition-all duration-700" />

                            <div className="relative rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl bg-zinc-100 ring-8 ring-white">
                                <Image
                                    src={getClinicalAsset('overview') || image}
                                    alt="Vision Clarity"
                                    width={700}
                                    height={900}
                                    className="w-full object-cover aspect-[4/5] lg:aspect-[3/4] group-hover:scale-105 transition-transform duration-[4s]"
                                />

                                {/* Light Leak Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-[30px] flex items-center justify-between border border-zinc-200/50 shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                                    <div className="flex flex-col">
                                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#c23c77] mb-1">Clinical Trust</span>
                                        <span className="text-2xl font-black tracking-tighter text-black">17+ YRS</span>
                                    </div>
                                    <div className="h-8 w-px bg-zinc-200" />
                                    <div className="text-right">
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-1">Status</div>
                                        <div className="text-xs font-black tracking-tight text-black">SURGERY READY</div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
