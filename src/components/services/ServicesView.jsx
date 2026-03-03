"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Plus, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import ServicesHero from './ServicesHero';

export default function ServicesView() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Function to determine card size based on index for mosaic effect
    const getCardSpan = (index) => {
        const patterns = [
            "md:col-span-2 md:row-span-2", // Large
            "md:col-span-1 md:row-span-1", // Small
            "md:col-span-1 md:row-span-2", // Tall
            "md:col-span-1 md:row-span-1", // Small
            "md:col-span-2 md:row-span-1", // Wide
            "md:col-span-1 md:row-span-1", // Small
        ];
        return patterns[index % patterns.length];
    };

    return (
        <div className="bg-[#fbfbfd] overflow-hidden">
            <ServicesHero />
            {/* Asymmetric Header Section */}
            <section className="pt-24 pb-24 relative overflow-hidden">
                <div className="container-custom max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group">
                        {/* Background Text Watermark - Editorial Position */}
                        <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                            <span
                                className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter opacity-100"
                                style={{ color: 'lab(43 65.24 9.02 / 0.15)' }}
                            >
                                SPECIALTIES
                            </span>
                        </div>

                        {/* Content Block */}
                        <div className="relative z-10 flex gap-8 items-start pl-6 border-l-4 border-[#c23c77]">
                            <div className="flex flex-col items-start text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                    Clinical Excellence
                                </span>
                                <h1 className="text-6xl md:text-[90px] font-[900] tracking-tighter text-black leading-[0.9] transition-transform duration-500 group-hover:translate-x-2">
                                    PRECISION <br />
                                    <span className="text-[#c23c77]">VISION</span> CARE
                                </h1>
                            </div>
                        </div>

                        <div className="md:max-w-md md:mb-4 relative z-10">
                            <p className="text-xl text-gray-500 font-medium leading-relaxed border-l-2 border-gray-100 pl-8">
                                Experience a new standard in ophthalmology. Our specialized clinics offer advanced surgical and diagnostic solutions tailored to your unique visual needs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-20 right-[-5%] w-[400px] h-[400px] bg-[#c23c77]/5 rounded-full blur-[100px] -z-10"
                />
            </section>

            {/* Mosaic Services Grid */}
            <section className="pb-40 container-custom max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className={`group relative rounded-[40px] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 ${getCardSpan(index)}`}
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent group-hover:from-black/60 group-hover:via-black/20 group-hover:to-transparent transition-all duration-500" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="w-14 h-14 rounded-2xl bg-[#c23c77]/10 flex items-center justify-center text-[#c23c77] group-hover:bg-[#c23c77] group-hover:text-white transition-all duration-500 transform group-hover:rotate-[360deg]">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>
                                        <motion.div
                                            whileHover={{ rotate: 45 }}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <a href={`/services/${service.id}`} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                                                <ArrowUpRight size={20} />
                                            </a>
                                        </motion.div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-black text-black mb-3 tracking-tighter group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-bold leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors">
                                            {service.shortDescription}
                                        </p>

                                        <div className="mt-6 flex items-center gap-2 text-[#c23c77] group-hover:text-white font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <span>Explore Procedure</span>
                                            <Plus size={14} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Editorial Feature Section */}
            <section className="py-40 bg-black relative overflow-hidden">
                <div className="container-custom max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#c23c77] font-black tracking-[0.4em] text-xs uppercase mb-6 block">Why Dhiren Eye Care?</span>
                            <h2 className="text-5xl md:text-[72px] font-[900] text-white tracking-tighter leading-[0.9] mb-10">
                                REDEFINING <br /> THE PATIENT <br /> <span className="text-[#c23c77]">EXPERIENCE</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Advanced Diagnostics", desc: "Using the latest OCT and laser technologies for early detection." },
                                    { title: "Expert Surgeons", desc: "Over 17 years of specialized surgical experience." },
                                    { title: "Personalized Care", desc: "Tailored treatment plans for every unique vision requirement." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-[#c23c77]/20 flex items-center justify-center text-[#c23c77] shrink-0">
                                            <Sparkles size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-gray-400 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="relative h-[600px] rounded-[60px] overflow-hidden">
                            <Image
                                src="/assets/About/cataract.jpg"
                                alt="Modern Clinic"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <motion.div
                                style={{ y: y2 }}
                                className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-xl rounded-[30px] border border-white/20"
                            >
                                <p className="text-white text-lg font-medium leading-relaxed italic">
                                    "Our mission is to combine breakthrough technology with a human touch to ensure everyone in our community sees the world with clarity."
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#c23c77]" />
                                    <div>
                                        <p className="text-white font-black text-sm uppercase tracking-widest">Dr. Vishal Maniar</p>
                                        <p className="text-[#c23c77] text-xs font-bold uppercase tracking-widest">Medical Director</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-32 bg-white">
                <div className="container-custom max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-[60px] font-black text-black mb-10 tracking-tighter leading-tight">
                            Ready for a clearer perspective?
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="/appointment" className="px-12 py-6 bg-black text-white font-black rounded-full hover:bg-[#c23c77] transition-all duration-300 shadow-2xl flex items-center gap-3 group">
                                Schedule Your Visit
                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

