"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';

export default function DetailHero({ title, image, shortDescription, scrollToSection }) {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#fafafa]">
            {/* Atmospheric Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(194,60,119,0.08),transparent_50%)]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.03),transparent_50%)]" />

                {/* Clinical Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: 40 }}
                                className="h-[1px] bg-[#c23c77]"
                            />
                            <span className="text-[#c23c77] text-[11px] font-black tracking-[0.4em] uppercase">Premium Care Series</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase leading-[0.85] mb-10">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className="block overflow-hidden">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="block"
                                    >
                                        {word === 'Surgery' ? <span className="text-[#c23c77]">{word}</span> : word}
                                    </motion.span>
                                </span>
                            ))}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-12 max-w-xl"
                        >
                            {shortDescription}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-wrap gap-6 items-center"
                        >
                            <button
                                onClick={() => scrollToSection('treatment')}
                                className="px-10 py-5 bg-black text-white font-black rounded-full hover:bg-[#c23c77] transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-black/10 text-xs tracking-[0.2em] uppercase"
                            >
                                Explorer Procedure
                            </button>
                            <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white border border-gray-100 shadow-sm">
                                <ShieldCheck className="text-[#c23c77]" size={20} />
                                <span className="text-[10px] font-black uppercase tracking-widest">ISO 9001 Certified</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 rounded-[60px] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group"
                        >
                            <Image
                                src={image}
                                alt={title}
                                width={800}
                                height={1000}
                                className="w-full h-full object-cover aspect-[4/5] group-hover:scale-110 transition-transform duration-1000"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>

                        {/* Floating Experience Badge */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute -right-12 top-20 bg-white p-8 rounded-[40px] shadow-3xl z-20 hidden xl:block border border-gray-50 border-r-0"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} className="fill-[#c23c77] text-[#c23c77]" />)}
                            </div>
                            <div className="text-4xl font-black text-black tracking-tighter leading-none mb-1">99%</div>
                            <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Success <br /> Accuracy</div>
                        </motion.div>

                        {/* Interactive Feature Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute -bottom-10 -left-10 lg:-left-20 bg-white/80 backdrop-blur-2xl p-10 rounded-[50px] shadow-2xl z-20 border border-white/50 max-w-xs"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#c23c77] flex items-center justify-center mb-6">
                                <MousePointer2 className="text-white" size={24} />
                            </div>
                            <h3 className="text-xl font-black text-black tracking-tighter uppercase mb-4 leading-tight">Elite <br /> Precision Technology</h3>
                            <p className="text-xs font-bold text-gray-500 leading-relaxed uppercase tracking-tighter">Utilizing the latest AI-driven diagnostics for perfect outcomes.</p>
                        </motion.div>
                    </div>
                </div>

                {/* Vertical Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute left-1/2 bottom-10 -translate-x-1/2 flex flex-col items-center gap-4 lg:hidden"
                >
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 [writing-mode:vertical-lr]">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-[#c23c77] to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
