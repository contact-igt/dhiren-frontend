"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ClipboardCheck, Target, ScanLine } from 'lucide-react';

export default function DetailDiagnosis({ content, image, getClinicalAsset }) {
    if (!content?.diagnosis) return null;

    return (
        <section id="diagnosis" className="relative scroll-mt-32 w-full py-24 lg:py-56 bg-zinc-950 overflow-hidden">
            {/* Background Medical Hud */}
            <div className="absolute top-0 right-0 p-24 opacity-[0.03] select-none pointer-events-none hidden lg:block">
                <span className="text-[200px] font-black uppercase tracking-tighter text-white leading-none">CHECKLIST</span>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left: Interactive Diagnosis Card */}
                    <div className="lg:col-span-6 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900 rounded-[80px] p-8 lg:p-12 border border-zinc-800 shadow-3xl overflow-hidden group"
                        >
                            <div className="relative rounded-[50px] overflow-hidden mb-12">
                                <Image
                                    src={getClinicalAsset('diagnosis') || image}
                                    alt="Diagnostic Center"
                                    width={800}
                                    height={500}
                                    className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-[3s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

                                <div className="flex items-center gap-3">
                                    <ClipboardCheck className="text-[#c23c77]" size={24} />
                                    <h4 className="text-xl font-black text-white uppercase tracking-tight">Standard Protocol</h4>
                                </div>
                                <p className="text-zinc-500 font-bold leading-relaxed">
                                    Our diagnostic protocol uses advanced imaging to map the unique landscape of your eye, ensuring surgical precision.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Sequential Checklist */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            {/* Editorial Header Area (About Us Style - Dark Mode) */}
                            <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group">
                                {/* Background Text Watermark */}
                                <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                                    <span
                                        className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter"
                                        style={{ color: 'rgba(255, 255, 255, 0.03)' }}
                                    >
                                        DIAGNOSIS
                                    </span>
                                </div>

                                {/* Content Block */}
                                <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                                    <div className="flex flex-col items-start text-left">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-[#c23c77]/30 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                            CLINICAL EXAM
                                        </span>
                                        <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-white leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                            PRECISION <br /> ANALYSIS
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {content.diagnosis.map((item, i) => {
                                    const [title, desc] = item.split(':');
                                    return (
                                        <motion.div
                                            key={i}
                                            whileHover={{ x: 20 }}
                                            className="group flex gap-8 p-10 rounded-[40px] bg-zinc-900/40 border border-zinc-900 hover:bg-zinc-900 transition-all duration-500"
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center font-black text-[#c23c77] border border-zinc-800 group-hover:bg-[#c23c77] group-hover:text-white transition-all shrink-0">
                                                0{i + 1}
                                            </div>
                                            <div>
                                                <h5 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#c23c77] transition-colors">{title}</h5>
                                                <p className="text-sm font-bold text-zinc-500 leading-relaxed uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="pt-12 flex items-center gap-12 border-t border-zinc-900">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Duration</span>
                                    <span className="text-2xl font-black text-white uppercase tracking-tighter">~45 mins</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Accuracy</span>
                                    <span className="text-2xl font-black text-white uppercase tracking-tighter">High Res</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#c23c77]/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
}
