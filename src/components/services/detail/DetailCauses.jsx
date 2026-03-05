"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, AlertCircle } from 'lucide-react';

export default function DetailCauses({ content }) {
    // Structured Etiology Data
    const causesCategories = [
        {
            category: "Biological Factors",
            items: [
                { title: "Aging", desc: "The primary biological cause of protein breakdown in the natural lens." },
                { title: "Diabetes", desc: "Chronic metabolic conditions that accelerate lens opacification." },
                { title: "Genetics", desc: "Inherited traits and family history influencing early onset." }
            ]
        },
        {
            category: "External Triggers",
            items: [
                { title: "UV Exposure", desc: "Excessive sunlight and radiation damaging ocular tissue." },
                { title: "Eye Trauma", desc: "Physical injuries or external impacts to the ocular structure." },
                { title: "Radiation", desc: "Exposure from clinical treatments or environmental factors." }
            ]
        },
        {
            category: "Lifestyle & Treatment",
            items: [
                { title: "Lifestyle", desc: "Smoking and alcohol consumption impacting metabolic health." },
                { title: "Medication", desc: "Long-term usage of steroids or specific clinical drugs." },
                { title: "Nutrition", desc: "Deficiencies in antioxidants and essential ocular vitamins." }
            ]
        }
    ];

    return (
        <section id="causes" className="relative scroll-mt-32 w-full py-24 lg:py-56 bg-white overflow-hidden">
            {/* Medical Documentation Grid (Abstract) */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden text-[10px] uppercase font-mono tracking-widest text-[#c23c77] leading-relaxed p-10">
                {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i}>ETIOLOGY_STUDY_REF_0x{i.toString(16).toUpperCase()}_DIAGNOSTIC_PATHWAY</div>
                ))}
            </div>

            <div className="container-custom relative z-10">
                {/* Unified Editorial Header Area */}
                <div className="flex flex-col md:flex-row items-end gap-12 mb-32 relative group mx-auto">
                    {/* Background Text Watermark */}
                    <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                        <span
                            className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter"
                            style={{ color: 'lab(43 65.24 9.02 / 0.12)' }}
                        >
                            ETIOLOGY
                        </span>
                    </div>

                    {/* Content Block */}
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-50 border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                Clinical Origins
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                BIOLOGICAL <br /> TAXONOMY
                            </h2>
                        </div>
                    </div>
                </div>

                {/* The Clinical Taxonomy Matrix */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-stretch">
                    {causesCategories.map((group, idx) => (
                        <div key={idx} className="flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="mb-12"
                            >
                                <span className="text-[10px] font-black tracking-[0.4em] text-[#c23c77] uppercase mb-4 block">
                                    Class 0{idx + 1}
                                </span>
                                <h3 className="text-3xl font-black text-black uppercase tracking-tighter border-b border-zinc-100 pb-6 mb-8 group-hover:text-[#c23c77] transition-colors">
                                    {group.category}
                                </h3>

                                <div className="space-y-12">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="group/item">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#c23c77]/30 group-hover/item:bg-[#c23c77] group-hover/item:scale-125 transition-all" />
                                                <h4 className="text-xl font-black text-black uppercase tracking-tight group-hover/item:text-[#c23c77] transition-colors">
                                                    {item.title}
                                                </h4>
                                            </div>
                                            <p className="text-sm font-bold text-zinc-400 uppercase tracking-tight leading-relaxed group-hover/item:text-zinc-600 transition-colors">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Bottom Clinical Insight Strip */}
                <div className="mt-32 p-12 lg:p-16 rounded-[60px] bg-zinc-50 border border-zinc-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 text-[#c23c77]/10 group-hover:scale-110 transition-transform duration-1000">
                        <ShieldCheck size={120} />
                    </div>

                    <div className="flex-1 relative z-10 text-center md:text-left">
                        <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                            <Activity size={18} className="text-[#c23c77]" />
                            <span className="text-[11px] font-black uppercase tracking-widest text-[#c23c77]">Expert Conclusion</span>
                        </div>
                        <p className="text-xl md:text-2xl font-black text-black uppercase tracking-tighter leading-tight max-w-3xl">
                            Understanding these primary causes is the first step toward effective prevention and clinical intervention.
                        </p>
                    </div>

                    <div className="h-12 w-px bg-zinc-200 hidden lg:block" />

                    <div className="relative z-10 flex flex-col items-center md:items-end gap-2">
                        <div className="flex items-center gap-3">
                            <AlertCircle size={14} className="text-zinc-300" />
                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Scientific Basis</span>
                        </div>
                        <span className="text-2xl font-black text-black tracking-tighter">PHASE_A1</span>
                    </div>
                </div>
            </div>

            {/* Background Narrative Strip */}
            <div className="absolute bottom-20 left-0 w-full opacity-[0.03] overflow-hidden whitespace-nowrap pointer-events-none select-none">
                <span className="text-[180px] font-black uppercase tracking-tighter text-black">
                    BIOLOGICAL ORIGINS BIOLOGICAL ORIGINS BIOLOGICAL ORIGINS
                </span>
            </div>
        </section>
    );
}
