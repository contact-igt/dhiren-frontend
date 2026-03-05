"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Sparkles, CheckSquare } from 'lucide-react';
import Image from 'next/image';

export default function DetailCandidates({ content, image, getClinicalAsset }) {
    if (!content?.candidates) return null;

    return (
        <section id="candidates" className="relative scroll-mt-32 w-full py-24 lg:py-56 bg-zinc-50 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Right: Candidate Checklist (Order 2 on Mobile, 1 on Large) */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
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
                                        CANDIDATES
                                    </span>
                                </div>

                                {/* Content Block */}
                                <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                                    <div className="flex flex-col items-start text-left">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                            ELIGIBILITY
                                        </span>
                                        <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                            SURGICAL <br /> SELECTION
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xl font-bold text-zinc-400 leading-tight tracking-tighter max-w-lg mb-16">
                                If you experience any of these vision impairments, you may be a candidate for advanced cataract restoration.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {content.candidates.map((candidate, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="p-8 rounded-[40px] bg-white border border-zinc-100 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-[#c23c77] group-hover:bg-[#c23c77] group-hover:text-white transition-all">
                                            <CheckSquare size={18} />
                                        </div>
                                        <span className="text-sm font-black text-black uppercase tracking-tight group-hover:text-[#c23c77] transition-colors">{candidate}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Left: The Visual Spotlight (Order 1 on Mobile, 2 on Large) */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-[80px] p-8 lg:p-12 bg-white shadow-3xl border border-zinc-100 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 text-[#c23c77]/10 group-hover:text-[#c23c77]/20 transition-colors">
                                    <UserCheck size={120} />
                                </div>

                                <div className="relative z-10 rounded-[60px] overflow-hidden mb-12 border-4 border-zinc-50">
                                    <Image
                                        src={getClinicalAsset('candidates') || image}
                                        alt="Ideal Candidate"
                                        width={600}
                                        height={800}
                                        className="w-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-[4s]"
                                    />
                                </div>

                                <div className="text-center px-4 relative z-10">
                                    <Sparkles size={32} className="text-[#c23c77] mx-auto mb-6" />
                                    <h4 className="text-xl font-black text-black uppercase tracking-tight mb-2">Patient Profile</h4>
                                    <p className="text-sm font-bold text-zinc-400 italic">Optimized for patients seeking 20/20 clarity.</p>
                                </div>
                            </div>

                            {/* Structural Accent */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c23c77]/5 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
