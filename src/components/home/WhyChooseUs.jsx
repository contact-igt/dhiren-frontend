"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserCheck, Zap, HeartPulse, ShieldCheck } from 'lucide-react';

const reasons = [
    {
        title: 'Expert Eye Surgeon',
        description: 'Specialist in Cataract, Lasik, Retina, and advanced vision correction surgeries.',
        icon: <UserCheck size={26} strokeWidth={1.8} />,
    },
    {
        title: 'Latest Technology',
        description: 'Equipped with state-of-the-art diagnostic tools like OCT, Perimetry, and YAG Laser.',
        icon: <Zap size={26} strokeWidth={1.8} />,
    },
    {
        title: 'Comprehensive Care',
        description: 'From pediatric eye care to senior vision management – complete solutions under one roof.',
        icon: <HeartPulse size={26} strokeWidth={1.8} />,
    },
    {
        title: 'Personalized Approach',
        description: 'Every patient receives customized treatment plans ensuring long-term healthy vision.',
        icon: <ShieldCheck size={26} strokeWidth={1.8} />,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-white overflow-hidden">
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
                        {/* Primary pink cross decoration — bottom-left */}
                        <div className="absolute -bottom-1 -left-8 z-20 flex flex-col items-center gap-[3px]">
                            <div className="w-6 h-22 bg-primary rounded-full" />
                            <div className="w-22 h-6 bg-primary rounded-full -mt-14" />
                        </div>

                        {/* Main image */}
                        <div className="relative w-full aspect-[4/4] rounded-[4.5rem_0_4.5rem_0] overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/Home/whychooseus.png"
                                alt="Dr. Dhiren Eye Care"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            {/* subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5" />
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Text + Grid ── */}
                    <div className="lg:w-[55%] w-full">

                        {/* Badge — teal accent */}
                        <motion.span
                            className="inline-flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-primary"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="w-4 h-[3px] bg-primary rounded-full inline-block" />
                            Why Choose Us?
                        </motion.span>

                        {/* Heading — primary pink highlight boxes */}
                        <motion.h2
                            className="text-4xl md:text-[2.6rem] font-extrabold !text-text-main leading-tight tracking-tight mb-5"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                        >
                            When You{' '}
                            <span className="bg-primary text-white px-3 py-0.5 rounded-lg inline-block">
                                Need
                            </span>{' '}
                            Expert
                            <span className="block">
                                Trusted{' '}
                                <span className="bg-primary text-white px-3 py-0.5 rounded-lg inline-block">
                                    Eye Care
                                </span>
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-text-muted leading-relaxed mb-10 text-[15px] max-w-lg"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Dedicated to delivering advanced, compassionate, and personalized eye care
                            with a focus on restoring and protecting vision for patients of all ages.
                            With 17+ years of expertise, we are your trusted eye care partner.
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
                                    {/* Icon — teal bg, fill pink on hover */}
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {reason.icon}
                                    </div>
                                    {/* Text */}
                                    <div>
                                        <h4 className="font-bold !text-text-main text-[15px] mb-1 group-hover:text-primary transition-colors duration-200">
                                            {reason.title}
                                        </h4>
                                        <p className="text-[13px] text-text-muted leading-relaxed">
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
