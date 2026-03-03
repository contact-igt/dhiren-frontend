"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import ServicesHero from './ServicesHero';

export default function ServicesView() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = React.useCallback((e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    }, []);

    return (
        <div className="bg-[#fbfbfd] overflow-hidden">
            <ServicesHero />

            {/* Header Section */}
            <section className="pt-24 pb-8 relative overflow-hidden">
                <div className="container-custom max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end gap-12 mb-8 relative group">
                        {/* Background Watermark */}
                        <div className="absolute -top-16 md:-left-10 pointer-events-none z-0">
                            <span
                                className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter opacity-100"
                                style={{ color: 'lab(43 65.24 9.02 / 0.15)' }}
                            >
                                SPECIALTIES
                            </span>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex gap-8 items-start pl-6 border-l-4 border-[#c23c77]">
                            <div className="flex flex-col items-start text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                    Clinical Excellence
                                </span>
                                <h2 className="text-6xl md:text-[90px] font-[900] tracking-tighter text-black leading-[0.9] transition-transform duration-500 group-hover:translate-x-2">
                                    PRECISION <br />
                                    <span className="text-[#c23c77]">VISION</span> CARE
                                </h2>
                            </div>
                        </div>

                        <div className="md:max-w-md md:mb-4 relative z-10">
                            <p className="text-xl text-gray-500 font-medium leading-relaxed border-l-2 border-gray-100 pl-8">
                                Experience a new standard in ophthalmology. Our specialized clinics offer advanced surgical and diagnostic solutions tailored to your unique visual needs.
                            </p>
                        </div>
                    </div>
                </div>

                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-20 right-[-5%] w-[400px] h-[400px] bg-[#c23c77]/5 rounded-full blur-[100px] -z-10"
                />
            </section>

            {/* Editorial Services List */}
            <section
                className="pb-32 container-custom max-w-[1400px] mx-auto px-6 lg:px-12"
                onMouseMove={handleMouseMove}
            >
                {/* Cursor-following Image Tooltip — desktop only */}
                <AnimatePresence>
                    {hoveredIndex !== null && (
                        <motion.div
                            key={hoveredIndex}
                            className="hidden lg:flex fixed z-[999] pointer-events-none w-[220px] h-[280px] rounded-2xl overflow-hidden shadow-[0_20px_60px_-8px_rgba(194,60,119,0.40)] border border-white/80 flex-col"
                            style={{ left: mousePos.x + 28, top: mousePos.y - 140 }}
                            initial={{ opacity: 0, scale: 0.88, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: -6 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                        >
                            <Image
                                src={servicesData[hoveredIndex].image}
                                alt={servicesData[hoveredIndex].title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white font-black text-sm tracking-tight leading-tight">
                                    {servicesData[hoveredIndex].title}
                                </p>
                                <p className="text-white/60 text-[11px] mt-1 font-medium leading-relaxed line-clamp-2">
                                    {servicesData[hoveredIndex].shortDescription}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Service Rows */}
                <div className="divide-y divide-gray-100">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        const isHovered = hoveredIndex === index;
                        return (
                            <motion.a
                                href={`/services/${service.id}`}
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.04 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group flex items-center gap-6 lg:gap-10 py-6 lg:py-7 relative cursor-pointer"
                            >
                                {/* Hover Background Fill */}
                                <motion.div
                                    className="absolute inset-0 bg-[#c23c77]/[0.04] rounded-2xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isHovered ? 1 : 0 }}
                                    transition={{ duration: 0.25 }}
                                />

                                {/* Left accent line */}
                                <motion.div
                                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c23c77] rounded-full"
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: isHovered ? 1 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    style={{ originY: '50%' }}
                                />

                                {/* Index Number */}
                                <span
                                    className="relative z-10 text-[11px] font-black tracking-widest tabular-nums transition-colors duration-300 min-w-[32px] text-right pl-4"
                                    style={{ color: isHovered ? '#c23c77' : '#d1d5db' }}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Icon Pill */}
                                <div
                                    className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                                    style={{
                                        background: isHovered ? '#c23c77' : 'rgba(194,60,119,0.08)',
                                        color: isHovered ? '#fff' : '#c23c77',
                                    }}
                                >
                                    <Icon size={20} strokeWidth={1.8} />
                                </div>

                                {/* Title + Description */}
                                <div className="relative z-10 flex-1 min-w-0">
                                    <h3
                                        className="text-xl lg:text-2xl font-black tracking-tight transition-colors duration-300 leading-tight"
                                        style={{ color: isHovered ? '#c23c77' : '#0a0a0c' }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-medium mt-1 leading-snug line-clamp-1">
                                        {service.shortDescription}
                                    </p>
                                </div>

                                {/* Thumbnail — mobile only */}
                                <div className="lg:hidden relative shrink-0 w-16 h-16 rounded-xl overflow-hidden">
                                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                                </div>

                                {/* Arrow */}
                                <motion.div
                                    className="relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 mr-2"
                                    animate={{
                                        borderColor: isHovered ? '#c23c77' : '#e5e7eb',
                                        background: isHovered ? '#c23c77' : 'transparent',
                                        color: isHovered ? '#fff' : '#9ca3af',
                                    }}
                                >
                                    <ArrowUpRight size={16} />
                                </motion.div>
                            </motion.a>
                        );
                    })}
                </div>
            </section>

            {/* Why Dhiren Eye Care Section — Bento & Cinematic Style */}
            <section className="py-32 bg-[#08080a] relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c23c77]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-[#fbb03b]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container-custom max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-20 text-balance">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#c23c77] font-black tracking-[0.4em] text-xs uppercase mb-4 block"
                        >
                            The Dhiren Difference
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-[900] text-white tracking-tighter leading-[0.95]"
                        >
                            REDEFINING THE <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c23c77] to-[#fbb03b]">
                                PATIENT EXPERIENCE
                            </span>
                        </motion.h2>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        {[
                            {
                                title: "Advanced Diagnostics",
                                desc: "Harnessing latest OCT and laser technologies for ultra-precise early discovery and mapping.",
                                icon: <Sparkles className="w-8 h-8" />,
                                color: "from-[#c23c77]/20 to-transparent",
                                bgNum: "01"
                            },
                            {
                                title: "Expert Surgeons",
                                desc: "Led by 17+ years of specialized seniority in complex ophthalmic and laser procedures.",
                                icon: <div className="w-8 h-8 rounded-full border-2 border-currentColor border-t-transparent animate-spin-slow rotate-45" />,
                                color: "from-[#fbb03b]/20 to-transparent",
                                bgNum: "02"
                            },
                            {
                                title: "Personalized Care",
                                desc: "No two eyes are the same. We craft bespoke treatment journeys tailored to your unique lifestyle.",
                                icon: <ArrowUpRight className="w-8 h-8" />,
                                color: "from-[#c23c77]/20 to-transparent",
                                bgNum: "03"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative group p-10 rounded-[40px] bg-white/[0.03] border border-white/10 hover:border-[#c23c77]/30 transition-all duration-500 overflow-hidden h-full`}
                            >
                                {/* Glow effect */}
                                <div className={`absolute -inset-2 px-10 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                {/* Background Number */}
                                <span className="absolute -bottom-8 -right-4 text-[160px] font-black text-white/[0.02] group-hover:text-[#c23c77]/[0.05] transition-colors duration-700 select-none">
                                    {item.bgNum}
                                </span>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/[0.05] flex items-center justify-center text-[#c23c77] mb-8 group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Cinematic Quote Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[60px] overflow-hidden min-h-[500px] flex items-center justify-center p-12 text-center"
                    >
                        <Image
                            src="/assets/About/cataract.jpg"
                            alt="Vision Excellence"
                            fill
                            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-[#08080a]/50" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-md mb-8"
                            >
                                <div className="w-12 h-12 rounded-full border-2 border-[#c23c77] border-l-transparent animate-spin-slow" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Sparkles className="text-[#c23c77] w-6 h-6" />
                                </div>
                            </motion.div>

                            <h3 className="text-3xl md:text-5xl font-black text-white italic tracking-tight leading-tight mb-12 text-balance lg:px-12">
                                "Our mission is to combine breakthrough technology with a human touch to ensure everyone in our community sees the world with <span className="text-[#c23c77]">clarity</span>."
                            </h3>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-[1px] h-12 bg-gradient-to-b from-[#c23c77] to-transparent" />
                                <div className="text-center">
                                    <p className="text-white font-black text-sm uppercase tracking-[0.3em] mb-1">Dr. Vishal Maniar</p>
                                    <p className="text-[#c23c77] text-xs font-bold uppercase tracking-widest">Chief Surgeon & Founder</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
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
