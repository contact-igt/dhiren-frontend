"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, ArrowRight, CheckCircle2, Star, Users } from 'lucide-react';

const heroImages = [
    '/assets/Heroslider/h1.png',
    '/assets/Heroslider/h2.png',
    '/assets/Heroslider/h3.png',
    '/assets/Heroslider/h4.png',
    '/assets/Heroslider/image.png'
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">

                    {/* Left Column: Premium Typography & Content */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-gray-100 shadow-sm rounded-full mb-8">
                                <div className="w-6 h-6 rounded-full bg-[#E0F2FE] flex items-center justify-center">
                                    <Star size={12} className="text-[#0284C7] fill-[#0284C7]" />
                                </div>
                                <span className="text-xs sm:text-sm font-bold tracking-wide text-primary">
                                    Mumbai's Premier Eye Care
                                </span>
                            </div>

                            <h1 className="text-[3.5rem] lg:text-[5rem] font-extrabold text-primary leading-[1.05] tracking-tight mb-8">
                                Vision Care,
                                <span className="block mt-1">Perfected.</span>
                            </h1>

                            <p className="text-lg text-text-muted mb-10 max-w-xl leading-relaxed font-medium">
                                Join over 50,000 satisfied patients who trust <strong>Dr. Vishal Maniar</strong> for advanced, personalized treatments using world-class technology.
                            </p>

                            <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-14">
                                <Link
                                    href="/appointment"
                                    className="group bg-primary text-white text-[15px] px-6 py-4 rounded-[14px] font-bold flex items-center justify-between shadow-lg hover:shadow-xl hover:bg-primary/95 transition-all duration-300 w-full sm:w-[220px]"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="opacity-80 flex flex-col justify-center">
                                            <Calendar size={20} strokeWidth={2.5} />
                                        </div>
                                        <span className="text-left leading-tight text-white tracking-wide">
                                            Schedule<br />Visit
                                        </span>
                                    </div>
                                    <div className="opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all">
                                        <ArrowRight size={20} strokeWidth={2.5} />
                                    </div>
                                </Link>

                                <a
                                    href="tel:+917715069185"
                                    className="group bg-white text-text-main border border-gray-200 px-6 py-4 rounded-[14px] font-bold flex items-center gap-4 hover:border-black transition-all shadow-sm w-full sm:w-[200px]"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                                        <Phone size={18} className="text-text-main" />
                                    </div>
                                    <span className="text-[15px] leading-tight">Call Us<br />Now</span>
                                </a>
                            </div>

                            {/* Trust Logos / Simple Metrics */}
                            <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
                                <div>
                                    <div className="text-3xl font-extrabold text-text-main mb-0.5">17+</div>
                                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest">Years Exp.</div>
                                </div>
                                <div className="w-px h-10 bg-gray-200" />
                                <div>
                                    <div className="text-3xl font-extrabold text-text-main mb-0.5">50k+</div>
                                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest">Surgeries</div>
                                </div>
                                <div className="w-px h-10 bg-gray-200 hidden sm:block" />
                                <div className="hidden sm:block">
                                    <div className="text-3xl font-extrabold text-text-main mb-0.5">100%</div>
                                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest">Commitment</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: "Dashboard / Widget" Slider Area - Wider */}
                    <div className="w-full lg:w-[55%] relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[550px]">

                        {/* Much wider slider area */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 bg-gray-100"
                                >
                                    <Image
                                        src={heroImages[currentImage]}
                                        alt={`Dhiren Eye Care ${currentImage + 1}`}
                                        fill
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        priority={currentImage === 0}
                                        className="transition-transform duration-[8000ms] ease-out hover:scale-105"
                                    />
                                    {/* Subtle gradient for UI elements visibility */}
                                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Integrated Navigation Inside Pill */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/30 backdrop-blur-md px-5 py-2.5 rounded-full">
                                {heroImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImage(idx)}
                                        className={`rounded-full transition-all duration-300 ${currentImage === idx
                                            ? 'w-6 h-1.5 bg-white'
                                            : 'w-1.5 h-1.5 bg-white/50 hover:bg-white'
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Floating Widget 1: Doctor Status (Top Right) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, x: 20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="absolute top-10 right-4 lg:-right-8 bg-white p-3.5 pr-6 rounded-[1.25rem] shadow-xl border border-gray-100/50 z-20 flex items-center gap-3.5 hover:-translate-y-1 transition-transform cursor-default"
                        >
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                                    <Image src="/assets/Doctor/dhiren.png" alt="Dr. Vishal Maniar" width={48} height={48} className="object-cover w-full h-full" />
                                </div>
                                <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#10B981] rounded-full border-[2.5px] border-white z-10" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-primary text-[14px] leading-tight mb-0.5">Dr. Vishal Maniar</span>
                                <span className="text-[11px] text-text-muted font-bold leading-tight">Available for Consult</span>
                            </div>
                        </motion.div>

                        {/* Floating Widget 2: Patient Satisfaction (Bottom Left) */}
                        <motion.div
                            initial={{ opacity: 0, y: -30, x: -20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="absolute bottom-10 -left-4 lg:-left-12 bg-white p-3.5 pr-6 rounded-[1.25rem] shadow-xl border border-gray-100/50 z-20 hidden sm:flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-default"
                        >
                            <div className="flex -space-x-3.5">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] relative z-10 shadow-sm">
                                        <Users size={16} />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-[3px] border-white bg-primary text-white flex items-center justify-center text-[11px] font-bold relative z-20 shadow-sm">
                                    +2k
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-primary text-[14px] leading-tight mb-1">Happy Patients</span>
                                <div className="flex items-center gap-[2px]">
                                    <Star size={12} className="fill-[#FBBF24] text-[#FBBF24]" />
                                    <Star size={12} className="fill-[#FBBF24] text-[#FBBF24]" />
                                    <Star size={12} className="fill-[#FBBF24] text-[#FBBF24]" />
                                    <Star size={12} className="fill-[#FBBF24] text-[#FBBF24]" />
                                    <Star size={12} className="fill-[#FBBF24] text-[#FBBF24]" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Widget 3: Quick Success Stat (Bottom Right) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="absolute bottom-10 right-6 bg-primary text-white pl-4 pr-6 py-3 rounded-full shadow-xl z-20 flex items-center gap-3 hidden md:flex hover:scale-105 transition-transform cursor-default"
                        >
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                <CheckCircle2 size={14} className="text-[#34D399]" />
                            </div>
                            <span className="text-[14px] font-bold tracking-wide">High Success Rate</span>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
