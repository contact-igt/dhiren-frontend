"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, AlertCircle, Sun, Pizza, Cigarette, Apple, Eye } from 'lucide-react';

export default function DetailPrevention({ content }) {
    if (!content?.prevention) return null;

    // Categorized prevention data
    const preventionGroups = [
        {
            category: "Biological Control",
            items: [
                { title: "Regular Checkups", desc: "Essential full-scale ocular examinations once you cross age 40.", icon: Eye },
                { title: "Metabolic Health", desc: "Rigorous control of blood sugar and hypertension levels.", icon: Heart }
            ]
        },
        {
            category: "Environmental Defense",
            items: [
                { title: "UV Protection", desc: "Consistently wearing 100% UV-protective clinical sunglasses.", icon: Sun },
                { title: "Safety Protocol", desc: "Utilizing industrial-grade protective eyewear during high-risk activity.", icon: ShieldCheck }
            ]
        },
        {
            category: "Life-Science Habits",
            items: [
                { title: "Nutritional Intake", desc: "Diets rich in antioxidants, lutein, and essential Omega-3s.", icon: Apple },
                { title: "Habit Modification", desc: "Complete cessation of smoking and moderation of alcohol intake.", icon: Cigarette }
            ]
        }
    ];

    return (
        <section id="prevention" className="relative scroll-mt-32 w-full py-16 lg:py-32 bg-zinc-50 overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Unified Editorial Header Area (About Us Style) */}
                <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group mx-auto">
                    {/* Background Text Watermark */}
                    <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                        <span
                            className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter"
                            style={{ color: 'lab(43 65.24 9.02 / 0.12)' }}
                        >
                            DEFENSE
                        </span>
                    </div>

                    {/* Content Block */}
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                Preventative Protocol
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                PROACTIVE <br /> MEASURES
                            </h2>
                        </div>
                    </div>
                </div>

                {/* The Proactive Matrix */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {preventionGroups.map((group, gIdx) => (
                        <div key={gIdx} className="space-y-12">
                            <div className="inline-flex items-center gap-4 border-b border-zinc-100 pb-4 w-full">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#c23c77]">{group.category}</span>
                            </div>

                            <div className="space-y-8">
                                {group.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group p-10 rounded-[40px] bg-white border border-transparent shadow-sm hover:border-[#c23c77]/10 hover:shadow-2xl transition-all duration-700"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center text-[#c23c77] mb-8 group-hover:bg-[#c23c77] group-hover:text-white transition-all duration-700">
                                            <item.icon size={28} />
                                        </div>
                                        <h4 className="text-2xl font-black text-black uppercase tracking-tighter mb-4 group-hover:text-[#c23c77] transition-colors">{item.title}</h4>
                                        <p className="text-sm font-bold text-zinc-400 leading-relaxed uppercase tracking-tight group-hover:text-zinc-600 transition-colors">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Clinical Insight Strip */}
                <div className="mt-32 p-12 lg:p-16 rounded-[60px] bg-zinc-950 text-white relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 right-0 p-12 text-[#c23c77]/10 group-hover:scale-110 transition-transform duration-[2s]">
                        <Sparkles size={120} />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <AlertCircle size={14} className="text-[#c23c77]" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#c23c77]">Professional Consensus</span>
                            </div>
                            <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight max-w-4xl">
                                Adhering to these calibrated protocols significantly extends ocular longevity and enhances surgical readiness.
                            </p>
                        </div>
                        <div className="h-16 w-px bg-zinc-800 hidden lg:block" />
                        <div className="text-center md:text-right">
                            <span className="text-[11px] font-black uppercase tracking-widest text-zinc-500 block mb-2">Protocol Status</span>
                            <span className="text-4xl font-black text-white tracking-widest uppercase">ACTIVE</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Narrative Strip */}
            <div className="absolute bottom-10 left-10 opacity-[0.02] select-none pointer-events-none hidden lg:block">
                <span className="text-[150px] font-black uppercase tracking-tighter text-black leading-none">SAFEGUARD</span>
            </div>
        </section>
    );
}
