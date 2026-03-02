"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Search, Stethoscope, Users } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative bg-white pt-[72px] overflow-hidden min-h-screen flex flex-col justify-center">

            {/* ════════════════════════════════════════
                MAIN CONTENT ROW
            ════════════════════════════════════════ */}
            <div className="container-custom relative z-10 flex-1 flex items-center py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full">

                    {/* ─── LEFT: Text ─── */}
                    <div className="w-full lg:w-[50%] flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            {/* Eyebrow */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                                <span className="text-sm font-bold tracking-wide text-primary">
                                    Mumbai&apos;s Premier Eye Care
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-[2.8rem] sm:text-[3.4rem] lg:text-[3.8rem] font-extrabold !text-text-main leading-[1.08] tracking-tight mb-6">
                                Best Eye Care{' '}
                                <span className="text-primary">Services</span>
                                <span className="block">Available Now</span>
                            </h1>

                            {/* Subline */}
                            <p className="text-[15.5px] text-text-muted mb-8 max-w-[460px] leading-relaxed">
                                Experience top-tier eye care with tailored treatments for your vision needs.
                                Trust{' '}
                                <strong className="text-text-main">Dr. Vishal Maniar</strong> to keep your
                                vision healthy and vibrant.
                            </p>

                            {/* CTA */}
                            <Link
                                href="/appointment"
                                className="inline-flex items-center gap-2.5 bg-primary text-white text-[15px] font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 mb-10"
                            >
                                Book Appointment
                                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Stats row */}
                            <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
                                <div>
                                    <div className="text-2xl font-extrabold text-text-main">17+</div>
                                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest">Years Exp.</div>
                                </div>
                                <div className="w-px h-10 bg-gray-200" />
                                <div>
                                    <div className="text-2xl font-extrabold text-text-main">50k+</div>
                                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest">Surgeries</div>
                                </div>
                                <div className="w-px h-10 bg-gray-200 hidden sm:block" />
                                <div className="hidden sm:block">
                                    <div className="text-2xl font-extrabold text-text-main">100%</div>
                                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest">Commitment</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ─── RIGHT: Image card ─── */}
                    <div className="w-full lg:w-[50%] flex justify-center items-center relative">

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
                            className="relative"
                        >
                            {/* Pink rounded-square background card */}
                            <div
                                className="relative w-[300px] h-[350px] md:w-[360px] md:h-[420px] lg:w-[400px] lg:h-[460px] rounded-[2.5rem] overflow-hidden"
                                style={{ background: 'linear-gradient(145deg, #C2185B 0%, #ad1457 100%)' }}
                            >
                                {/* Doctor image — bottom-anchored so body fills card */}
                                <Image
                                    src="/assets/Doctor/dhiren.png"
                                    alt="Dr. Vishal Maniar"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                {/* Bottom gradient for image depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                            </div>

                            {/* Dotted decoration — bottom right */}
                            <div
                                className="absolute -bottom-6 -right-6 z-0 pointer-events-none"
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundImage: 'radial-gradient(circle, #C2185B 1.3px, transparent 1.3px)',
                                    backgroundSize: '12px 12px',
                                    opacity: 0.35,
                                }}
                            />

                            {/* Dotted decoration — top left */}
                            <div
                                className="absolute -top-5 -left-5 z-0 pointer-events-none"
                                style={{
                                    width: 80,
                                    height: 80,
                                    backgroundImage: 'radial-gradient(circle, #C2185B 1.3px, transparent 1.3px)',
                                    backgroundSize: '12px 12px',
                                    opacity: 0.25,
                                }}
                            />

                            {/* Floating badge — top left of card (like "200+ Best Doctor") */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="absolute top-6 -left-6 lg:-left-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20"
                            >
                                <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                                    <Image
                                        src="/assets/Doctor/dhiren.png"
                                        alt="Dr. Vishal Maniar"
                                        width={40}
                                        height={40}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <div className="text-[13px] font-extrabold text-text-main leading-tight">50k+</div>
                                    <div className="text-[11px] text-text-muted font-semibold">Happy Patients</div>
                                </div>
                            </motion.div>

                            {/* Floating pill — bottom left */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -bottom-4 left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 z-20"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Users size={15} className="text-primary" />
                                </div>
                                <div>
                                    <div className="text-[12px] font-bold text-primary leading-tight">Available Now</div>
                                    <div className="text-[10px] text-text-muted font-medium">Dr. Vishal Maniar</div>
                                </div>
                                {/* Online dot */}
                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full ml-1 flex-shrink-0" />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    );
}
