"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function DetailBenefits({ content, image, getClinicalAsset }) {
    if (!content?.benefits) return null;

    return (
        <section id="benefits" className="scroll-mt-32 py-10 relative overflow-hidden">
            {/* Atmospheric Pulse Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#c23c77]/[0.02] rounded-full blur-[150px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <div className="relative group order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative overflow-hidden rounded-[80px] shadow-3xl border-[16px] border-white bg-white"
                    >
                        <Image
                            src={getClinicalAsset('benefits') || image}
                            alt="Benefits Comparison"
                            width={800}
                            height={600}
                            className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-700" />
                        <div className="absolute bottom-16 left-16 right-16">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className="flex items-center gap-4 mb-4"
                            >
                                <Sparkles className="text-[#c23c77]" size={24} />
                                <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.5em]">Transformation</span>
                            </motion.div>
                            <span className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1]">Vision <br /> Renewed</span>
                        </div>
                    </motion.div>

                    {/* Floating Clinical UI Item */}
                    <div className="absolute -top-10 -right-10 bg-white p-8 rounded-[40px] shadow-2xl hidden xl:block border border-gray-50 scale-110">
                        <div className="w-12 h-12 rounded-2xl bg-[#c23c77]/10 flex items-center justify-center mb-4">
                            <Eye size={24} className="text-[#c23c77]" />
                        </div>
                        <div className="text-[10px] font-black text-black uppercase tracking-widest">Crystal HD <br /> Result</div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 rounded-full bg-[#c23c77]" />
                        <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase block">Vision Outcomes</span>
                    </div>
                    <h2 className="text-5xl md:text-9xl font-black tracking-tighter text-black uppercase leading-[0.8] mb-16">Visual <br /> <span className="text-gray-100">Evolution</span></h2>

                    <div className="space-y-8">
                        {content?.benefits?.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-8 group hover:translate-x-6 transition-all duration-500 cursor-default"
                            >
                                <div className="w-14 h-[2px] bg-gray-100 group-hover:bg-[#c23c77] group-hover:w-20 transition-all duration-500" />
                                <span className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase group-hover:text-[#c23c77] transition-colors leading-none">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                            <Sparkles size={16} />
                        </div>
                        <p className="text-sm font-black text-gray-400 uppercase tracking-widest max-w-[200px]">Peer Reviewed Surgical Benefits</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
