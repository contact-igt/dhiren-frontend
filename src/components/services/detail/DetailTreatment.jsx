"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Target, Cpu, ShieldCheck, ChevronRight, Sparkles, Microscope } from 'lucide-react';

export default function DetailTreatment({ content }) {
    const [activeTab, setActiveTab] = useState('techniques');

    if (!content?.treatmentOptions) return null;

    const techniques = content.treatmentOptions.slice(0, 3);
    const lenses = content.treatmentOptions.slice(3);

    const activeList = activeTab === 'techniques' ? techniques : lenses;

    return (
        <section id="treatment" className="relative scroll-mt-32 w-full py-16 lg:py-32 bg-white overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Unified Editorial Header Area (About Us Style) */}
                <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group mx-auto">
                    {/* Background Text Watermark */}
                    <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                        <span
                            className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter"
                            style={{ color: 'lab(43 65.24 9.02 / 0.15)' }}
                        >
                            TREATMENT
                        </span>
                    </div>

                    {/* Content Block */}
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                Clinical Solutions
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                PRECISION <br /> INTERVENTION
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Interactive Selection Module */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Side: Navigation & Summary */}
                    <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-40">
                        <div className="space-y-4">
                            <p className="text-lg font-bold text-zinc-400 uppercase tracking-tighter leading-tight italic max-w-sm border-b border-zinc-100 pb-8">
                                While early stages may be managed with conservative care, advanced cataracts require surgical restoration.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => setActiveTab('techniques')}
                                className={`group flex items-center justify-between p-6 rounded-[30px] border-2 transition-all duration-500 ${activeTab === 'techniques' ? 'bg-[#c23c77] border-[#c23c77] shadow-2xl shadow-[#c23c77]/20 text-white' : 'bg-white border-zinc-100 text-zinc-400 hover:border-[#c23c77]/30'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <Microscope size={20} className={activeTab === 'techniques' ? 'text-white' : 'text-[#c23c77]'} />
                                    <span className="text-xs font-black uppercase tracking-widest">Surgical Methods</span>
                                </div>
                                <ChevronRight size={18} />
                            </button>

                            <button
                                onClick={() => setActiveTab('lenses')}
                                className={`group flex items-center justify-between p-6 rounded-[30px] border-2 transition-all duration-500 ${activeTab === 'lenses' ? 'bg-[#c23c77] border-[#c23c77] shadow-2xl shadow-[#c23c77]/20 text-white' : 'bg-white border-zinc-100 text-zinc-400 hover:border-[#c23c77]/30'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <Sparkles size={20} className={activeTab === 'lenses' ? 'text-white' : 'text-[#c23c77]'} />
                                    <span className="text-xs font-black uppercase tracking-widest">Lens Technology</span>
                                </div>
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        <div className="p-8 rounded-[40px] bg-zinc-50 border border-zinc-100 group">
                            <ShieldCheck size={24} className="text-[#c23c77] mb-6" />
                            <h4 className="text-black font-black uppercase tracking-tight mb-2">Patient Security</h4>
                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-tighter leading-relaxed">
                                All procedures follow strict FDA-approved protocols and high-sterility clinical standards.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Interactive Content */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                {activeList.map((option, i) => (
                                    <div
                                        key={i}
                                        className="group bg-zinc-50 rounded-[50px] p-10 flex flex-col justify-between min-h-[420px] border border-transparent hover:border-[#c23c77]/20 hover:bg-white hover:shadow-2xl transition-all duration-700 relative overflow-hidden"
                                    >
                                        <header className="relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#c23c77] group-hover:bg-[#c23c77] group-hover:text-white transition-all duration-700 mb-8">
                                                {activeTab === 'techniques'
                                                    ? (i === 0 ? <Zap size={24} /> : i === 1 ? <Microscope size={24} /> : <Target size={24} />)
                                                    : (i === 0 ? <Sparkles size={24} /> : i === 1 ? <Cpu size={24} /> : <Microscope size={24} />)
                                                }
                                            </div>
                                            <span className="text-zinc-200 text-5xl font-black font-mono block mb-4 group-hover:text-[#c23c77]/10 transition-colors">0{i + 1}</span>
                                            <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter leading-none mb-6 group-hover:text-[#c23c77] transition-colors">
                                                {option.name}
                                            </h3>
                                        </header>

                                        <footer className="relative z-10 pt-8 border-t border-zinc-100">
                                            <p className="text-sm font-bold text-zinc-400 uppercase tracking-tighter leading-relaxed group-hover:text-zinc-600 transition-colors">
                                                {option.description}
                                            </p>
                                        </footer>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Procedure Summary Strip */}
                        <div className="mt-16 p-10 rounded-[40px] bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-12 group overflow-hidden relative shadow-2xl">
                            <div className="flex flex-wrap gap-8 items-center justify-center relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#c23c77]" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#c23c77]">Painless Procedure</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#c23c77]" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Rapid Restoration</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-[#c23c77] relative z-10">
                                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Scientific Accuracy</span>
                                <div className="w-8 h-px bg-[#c23c77]/30" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c23c77]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2s]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Narrative Watermark */}
            <div className="absolute bottom-10 left-10 opacity-[0.02] select-none pointer-events-none hidden lg:block">
                <span className="text-[120px] font-black uppercase tracking-tighter text-black leading-none">Advanced Surgical Reconstruction Phase</span>
            </div>
        </section>
    );
}
