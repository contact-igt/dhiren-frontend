"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Info } from 'lucide-react';

export default function DetailSafety({ content }) {
    if (!content?.risks) return null;

    return (
        <section id="risks" className="scroll-mt-32 py-10">
            <div className="bg-[#fbfbfd] rounded-[80px] p-16 lg:p-32 border border-gray-100 relative overflow-hidden group">
                {/* Clinical Pulse Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                    <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="500" cy="500" r="100" stroke="black" strokeWidth="1" />
                        <circle cx="500" cy="500" r="200" stroke="black" strokeWidth="1" />
                        <circle cx="500" cy="500" r="300" stroke="black" strokeWidth="1" />
                        <circle cx="500" cy="500" r="400" stroke="black" strokeWidth="1" strokeDasharray="10 10" />
                    </svg>
                </div>

                <div className="absolute -bottom-20 -right-20 p-12 opacity-[0.03] pointer-events-none group-hover:rotate-12 group-hover:scale-110 transition-transform duration-1000">
                    <ShieldAlert size={500} />
                </div>

                <div className="max-w-5xl relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 rounded-full bg-[#c23c77]" />
                        <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase block">Clinical Protocol</span>
                    </div>
                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-black uppercase leading-[0.8] mb-12">Trust & <br /> <span className="text-gray-200">Safety</span></h2>

                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="p-10 rounded-[50px] bg-white shadow-3xl shadow-black/5 flex items-center justify-center border border-gray-50 relative group/icon"
                        >
                            <div className="absolute inset-0 bg-[#c23c77]/5 rounded-[50px] scale-0 group-hover/icon:scale-105 transition-transform duration-500" />
                            <ShieldAlert className="text-[#c23c77] relative z-10" size={64} />
                        </motion.div>

                        <div className="space-y-10">
                            <p className="text-3xl md:text-4xl font-black text-black leading-[1.1] tracking-tighter">
                                {content?.risks}
                            </p>

                            <div className="flex items-center gap-4 p-6 rounded-3xl bg-black/[0.03] border border-black/5 max-w-sm">
                                <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center">
                                    <Info size={16} className="text-black/40" />
                                </div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Transparency Policy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
