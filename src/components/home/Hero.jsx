"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const stats = [
    { value: '17+', label: 'Years of Experience' },
    { value: '16+', label: 'Specialized Eye Care Services' },
    { value: '2500+', label: 'Happy Patients Treated' },
    { value: '100+', label: 'Awards & Recognitions' },
];

export default function Hero() {
    return (
        <section className="relative bg-text-main pt-[12px] overflow-hidden min-h-screen flex flex-col">
            {/* ── Full-bleed background image ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/Home/banner.png"
                    alt="Dhiren Eye Care"
                    fill
                    className="object-cover object-center opacity-30"
                    priority
                />
                {/* Primary pink tint overlay */}
                <div className="absolute inset-0 !bg-gradient-to-t from-primary/70 via-primary/40 to-primary/10" />
                {/* Bottom fade for stats bar */}
                <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* ── Main content ── */}
            <div className="relative z-10 flex-1 flex items-center">
                <div className="container-custom py-20 lg:py-28 w-full">
                    <div className="max-w-2xl">

                        {/* Eyebrow badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/25 mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse flex-shrink-0" />
                            <span className="text-sm font-bold tracking-wide text-white">
                                Mumbai&apos;s Premier Eye Care Hospital
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.1 }}
                            className="text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] font-black !text-white leading-[1.05] tracking-tight mb-6"
                        >
                            Expert Vision Care and{' '}
                            <span className="text-[#FCD34D]">Trusted Eye Specialists</span>
                        </motion.h1>

                        {/* Sub-heading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.2 }}
                            className="text-base sm:text-lg text-white/85 mb-10 max-w-xl leading-relaxed font-medium"
                        >
                            Experience world-class eye care with advanced diagnostics and surgical precision. Led by <strong className="text-white">Dr. Vishal Maniar</strong>, we combine cutting-edge technology with compassionate care to protect and enhance your vision.
                        </motion.p>

                        {/* CTAs row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-4 mb-14"
                        >
                            <Link
                                href="/appointment"
                                className="inline-flex items-center gap-3 bg-white text-primary font-black px-7 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 text-sm"
                            >
                                Book Appointment
                                <div className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                                    <ArrowRight size={16} strokeWidth={3} />
                                </div>
                            </Link>
                            <a
                                href="tel:+918433983169"
                                className="inline-flex items-center gap-3 backdrop-blur-sm font-bold px-7 py-5 rounded-full bg-primary text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90 text-sm shadow-2xl"
                            >
                                <Phone size={18} fill="currentColor" />
                                Call Us Now
                            </a>
                        </motion.div>
                    </div>

                    {/* Patient avatar cluster + count — Floating Right as in image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, delay: 0.45 }}
                        className="relative lg:absolute lg:top-[40%] lg:-translate-y-1/2 lg:right-[10%] flex items-center gap-4 mt-10 lg:mt-0"
                    >
                        {/* Avatar stack */}
                        <div className="flex -space-x-4">
                            {[
                                'https://randomuser.me/api/portraits/men/32.jpg',
                                'https://randomuser.me/api/portraits/women/44.jpg',
                                'https://randomuser.me/api/portraits/men/45.jpg',
                            ].map((src, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg flex-shrink-0">
                                    <img src={src} alt="Patient" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-black text-2xl leading-none">2500+</span>
                            <span className="text-white/80 text-[11px] font-bold uppercase tracking-widest mt-1">Happy Patients</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Stats bar — pinned to bottom ── */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/15">
                <div className="container-custom py-7">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                                className="text-center px-6"
                            >
                                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                                <div className="text-[11px] text-white/65 font-bold uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}