"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

export default function DetailCTA() {
    return (
        <section className="bg-black rounded-[80px] p-24 text-center relative overflow-hidden group">
            {/* Atmospheric Background Layers */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                    rotate: [0, 45, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c23c77] rounded-full blur-[150px] pointer-events-none"
            />

            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-12"
                >
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/60 text-[10px] font-black tracking-[0.3em] uppercase">Appointments Available Now</span>
                </motion.div>

                <h3 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-16 uppercase">
                    Restoring Your <br /> <span className="text-[#c23c77]">Crystal Vision</span>
                </h3>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/appointment"
                        className="group/btn relative px-14 py-7 bg-[#c23c77] text-white font-black rounded-full transition-all shadow-3xl shadow-[#c23c77]/40 text-lg uppercase tracking-[0.2em] flex items-center gap-4 min-w-[300px] justify-center"
                    >
                        <Calendar size={22} />
                        <span>Book Surgery</span>
                        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="tel:+917715069185"
                        className="px-14 py-7 bg-white/5 backdrop-blur-xl text-white border border-white/10 font-black rounded-full hover:bg-white hover:text-black transition-all text-lg flex items-center justify-center gap-4 uppercase tracking-[0.2em] min-w-[300px]"
                    >
                        <Phone size={22} className="group-hover:rotate-12 transition-transform" />
                        <span>Emergency Line</span>
                    </motion.a>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-12 pt-12 border-t border-white/10">
                    <div className="text-center">
                        <div className="text-2xl font-black text-white tracking-tighter">Gold Standard</div>
                        <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-1">Clinical Safety</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-black text-white tracking-tighter">Zero Pain</div>
                        <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-1">Advanced Laser</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-black text-white tracking-tighter">Fast Recovery</div>
                        <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-1">Next Day Vision</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
