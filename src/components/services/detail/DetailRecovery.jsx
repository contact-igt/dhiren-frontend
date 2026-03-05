"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, PlayCircle, ShieldCheck, HeartPulse, Activity } from 'lucide-react';

export default function DetailRecovery({ content }) {
    if (!content?.recovery) return null;

    // Enhanced recovery data grouping
    const recoveryPhases = [
        {
            phase: "Immediate Care",
            label: "First 24-48 Hours",
            tips: content.recovery.slice(0, 2),
            icon: Clock
        },
        {
            phase: "Restoration",
            label: "Week 1 - Progressive",
            tips: content.recovery.slice(2, 5),
            icon: Activity
        },
        {
            phase: "Sustainability",
            label: "Ongoing Support",
            tips: content.recovery.slice(5),
            icon: HeartPulse
        }
    ];

    return (
        <section id="recovery" className="relative scroll-mt-32 w-full py-16 lg:py-32 bg-white overflow-hidden">
            {/* The Vertical Editorial Line (Aligned with Grid) */}
            <div className="absolute top-0 left-[10.5%] w-[1px] h-full bg-zinc-100 hidden lg:block" />

            <div className="container-custom relative z-10">
                {/* Unified Editorial Header Area (About Us Style) */}
                <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group mx-auto">
                    {/* Background Text Watermark */}
                    <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                        <span
                            className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter"
                            style={{ color: 'lab(43 65.24 9.02 / 0.15)' }}
                        >
                            RECOVERY
                        </span>
                    </div>

                    {/* Content Block */}
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                Post-Op Care
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                THE HEALING <br /> TIMELINE
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left: Interactive Legend */}
                    <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-40">
                        <div className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100 group">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#c23c77] mb-8 group-hover:scale-110 transition-transform">
                                <PlayCircle size={24} />
                            </div>
                            <h4 className="text-2xl font-black text-black uppercase tracking-tighter mb-4">Patient Journey</h4>
                            <p className="text-sm font-bold text-zinc-400 leading-relaxed uppercase tracking-tight">
                                Most patients experience clearer vision within 24 hours. Following these guidelines ensures optimal surgical results.
                            </p>
                            <div className="mt-8 flex items-center gap-3">
                                <ShieldCheck size={18} className="text-[#c23c77]" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-black">Clinical Success Certified</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Phases List */}
                    <div className="lg:col-span-8 space-y-20">
                        {recoveryPhases.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative flex flex-col md:flex-row gap-12 group/phase"
                            >
                                {/* Phase Marker Dot */}
                                <div className="hidden lg:flex absolute left-[-11.5%] top-4 w-12 h-12 rounded-full bg-white border border-zinc-100 z-20 items-center justify-center text-[#c23c77] group-hover/phase:border-[#c23c77] transition-all group-hover/phase:scale-110 shadow-sm">
                                    <phase.icon size={20} />
                                </div>

                                <div className="w-full md:w-1/3 pt-2">
                                    <span className="text-[10px] font-black text-[#c23c77] uppercase tracking-[0.2em] mb-4 block">Stage 0{idx + 1}</span>
                                    <h3 className="text-3xl font-black text-black uppercase tracking-tighter leading-none mb-4 group-hover/phase:text-[#c23c77] transition-colors">{phase.phase}</h3>
                                    <p className="text-xs font-black text-zinc-300 uppercase tracking-widest leading-none">{phase.label}</p>
                                </div>

                                <div className="flex-1 grid grid-cols-1 gap-4">
                                    {phase.tips.map((tip, tIdx) => (
                                        <div key={tIdx} className="p-8 rounded-[30px] bg-zinc-50 border border-transparent hover:border-[#c23c77]/10 hover:bg-white transition-all duration-500 group/tip flex items-center justify-between shadow-sm hover:shadow-xl">
                                            <div className="flex items-center gap-6">
                                                <div className="w-2 h-2 rounded-full bg-zinc-200 group-hover/tip:bg-[#c23c77] transition-all" />
                                                <span className="text-base font-black text-zinc-500 uppercase tracking-tight group-hover/tip:text-black transition-colors">{tip}</span>
                                            </div>
                                            <CheckCircle2 size={18} className="text-zinc-100 group-hover/tip:text-[#c23c77] transition-all" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Patient Success Strip */}
                <div className="mt-32 p-12 lg:p-16 rounded-[60px] bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-12 group overflow-hidden relative shadow-2xl">
                    <div className="flex flex-col gap-2 relative z-10 text-center md:text-left">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                            <ShieldCheck size={16} className="text-[#c23c77]" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#c23c77]">Recovery Status</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight max-w-2xl">
                            Our team provides comprehensive post-operative monitoring for your safety.
                        </p>
                    </div>
                    <div className="h-16 w-px bg-zinc-800 hidden lg:block" />
                    <button className="px-12 py-6 rounded-full bg-white text-black font-black text-[11px] uppercase tracking-[0.3em] hover:bg-[#c23c77] hover:text-white transition-all relative z-10 shadow-2xl shrink-0">
                        Clinical Roadmap
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2s]" />
                </div>
            </div>

            {/* Background Narrative Watermark */}
            <div className="absolute bottom-10 left-10 opacity-[0.02] select-none pointer-events-none hidden lg:block">
                <span className="text-[120px] font-black uppercase tracking-tighter text-black leading-none">Optimal Healing Protocols System</span>
            </div>
        </section>
    );
}
