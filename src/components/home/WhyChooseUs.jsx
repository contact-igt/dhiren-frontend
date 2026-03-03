"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserCheck, Zap, HeartPulse, ShieldCheck } from 'lucide-react';

const reasons = [
    {
        title: '17+ Years Experience',
        description: 'Proven expertise in handling simple to complex eye conditions.',
        icon: <UserCheck size={26} strokeWidth={1.8} />,
    },
    {
        title: 'Latest Technology',
        description: 'Equipped with advanced tools like OCT, YAG Laser & Perimetry.',
        icon: <Zap size={26} strokeWidth={1.8} />,
    },
    {
        title: '2500+ Happy Patients',
        description: 'Trusted by patients for compassionate and successful treatments.',
        icon: <HeartPulse size={26} strokeWidth={1.8} />,
    },
    {
        title: 'Comprehensive Eye Care',
        description: 'From cataract to LASIK, pediatric to diabetic eye care – all under one roof.',
        icon: <ShieldCheck size={26} strokeWidth={1.8} />,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-primary overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center">

                    {/* ── LEFT: Image Card ── */}
                    <motion.div
                        className="lg:w-[45%] w-full relative flex-shrink-0"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* White cross decoration — bottom-left */}
                        <div className="absolute -bottom-1 -left-9 z-20 flex flex-col items-center gap-[3px]">
                            <div className="w-5 h-22  bg-[#fcd34d] rounded-full" />
                            <div className="w-22 h-5  bg-[#fcd34d] rounded-full -mt-13.5" />
                        </div>

                        {/* Main image */}
                        <div className="relative w-full aspect-[4/4] rounded-[4.5rem_0_4.5rem_0] overflow-hidden">
                            <Image
                                src="/assets/Home/whychooseus.png"
                                alt="Dr. Dhiren Eye Care"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            {/* subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Text + Grid ── */}
                    <div className="lg:w-[55%] w-full">

                        {/* Badge */}
                        <motion.span
                            className="inline-flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-white/80"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="w-4 h-[3px] bg-white rounded-full inline-block" />
                            Why Choose Us?
                        </motion.span>

                        {/* Heading */}
                        <motion.h2
                            className="text-4xl md:text-[2.6rem] font-extrabold !text-white leading-tight tracking-tight mb-5"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                        >
                            Trusted{' '}
                            <span className="bg-white text-primary px-3 py-0.5 rounded-lg inline-block">
                                Eye Care
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-white/80 leading-relaxed mb-10 text-[15px] max-w-lg"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            With over 17+ years of expertise and thousands of successful
                            treatments, <strong className="text-white">Dhiren Eye Care</strong> is committed to delivering world-class
                            eye care with compassion, precision, and advanced technology.
                        </motion.p>

                        {/* 2×2 Feature Grid — teal icons (accent), pink on hover title */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={reason.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.5, delay: index * 0.09 }}
                                    className="flex gap-4 group"
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white group-hover:text-primary transition-all duration-300">
                                        {reason.icon}
                                    </div>
                                    {/* Text */}
                                    <div>
                                        <h4 className="font-bold !text-white text-[15px] mb-1 group-hover:text-white/80 transition-colors duration-200">
                                            {reason.title}
                                        </h4>
                                        <p className="text-[13px] text-white/70 leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
