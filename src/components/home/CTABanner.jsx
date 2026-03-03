"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, CalendarCheck, Play } from 'lucide-react';

export default function CTABanner() {
    return (
        <section className="relative bg-[#fefefe] overflow-hidden">
            {/* ── Background blobs ── */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -z-0" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-0" />

            <div className="relative flex flex-col lg:flex-row min-h-[480px] bg-[url('/assets/Home/eyespecialist.png')] bg-cover bg-center">
                {/* Gradient overlay — covers background image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/75 to-[#0f172a]/10 z-0" />
                {/* ── LEFT: Text content ── */}
                <div className="lg:w-[55%] flex items-center relative z-10 px-8 md:px-16 xl:px-24 py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >

                        {/* Headline */}
                        <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-tight tracking-tight mb-5">
                            Need an{' '}
                            <span className="text-primary">Eye Specialist</span>
                            {'?'}
                            <br className="hidden md:block" />
                            <span className="text-3xl md:text-4xl font-bold text-white/80 mt-1 block">
                                Call for Immediate Assistance!
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-white/60 text-[15px] leading-relaxed max-w-lg mb-10">
                            Dhiren Eye Care and their team provide quick and effective treatment for urgent eye problems, ensuring you receive the right care without delay.
                        </p>

                        {/* Emergency Phone Block */}
                        <div className="flex items-center gap-5 mt-10">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                <Phone size={28} fill="currentColor" className="text-white" />
                            </div>
                            <div>
                                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-1">For Emergency Appointments</p>
                                <a href="tel:+917715069185" className="text-white text-3xl font-extrabold tracking-tight hover:text-primary transition-colors duration-200">
                                    +91 77150 69185
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
