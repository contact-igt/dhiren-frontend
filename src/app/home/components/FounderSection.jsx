"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const mission = [
    '50,000+ Successful Cataract surgeries',
    '10,000+ Refractive procedures',
    'Precision and patient-centric care',
];

const vision = [
    'Advanced and accessible eye care',
    'Innovation and quality in eye care',
    'Superior patient outcomes and research',
];

export default function FounderSection() {
    return (
        <section className="section-padding bg-white overflow-hidden relative">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-14 xl:gap-20">

                    {/* ════════════════════════════
                        LEFT — Image panel
                    ════════════════════════════ */}
                    <motion.div
                        className="lg:w-[42%] w-full relative flex-shrink-0 flex justify-center"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, ease: 'easeOut' }}
                    >
                        {/* Dotted grid decoration — bottom-left */}
                        <div className="absolute bottom-10 -left-4 z-0"
                            style={{
                                width: 110,
                                height: 110,
                                backgroundImage: 'radial-gradient(circle, #C2185B 1.2px, transparent 1.2px)',
                                backgroundSize: '12px 12px',
                                opacity: 0.35,
                            }}
                        />

                        {/* Dotted grid decoration — top-right */}
                        <div className="absolute top-6 -right-2 z-0"
                            style={{
                                width: 80,
                                height: 80,
                                backgroundImage: 'radial-gradient(circle, #C2185B 1.2px, transparent 1.2px)',
                                backgroundSize: '12px 12px',
                                opacity: 0.25,
                            }}
                        />

                        {/* Circular image */}
                        <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl border-[6px] border-white z-10">
                            <Image
                                src="/assets/Doctor/dhiren.png"
                                alt="Dr. Vishal Maniar"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            {/* subtle pink tint at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                        </div>

                        {/* Experience badge — bottom-right corner of the circle */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-13 md:-bottom-2 right-3 md:-right-2 z-20 bg-primary text-white rounded-[1.9rem] px-6 py-8 shadow-2xl text-center w-[185px]"
                        >
                            <div className="text-5xl font-extrabold leading-none">17+</div>
                            <div className="text-[14px] font-semibold mt-1 leading-5 opacity-90">
                                Years of<br />Expertise in<br />Eye Care
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ════════════════════════════
                        RIGHT — Content panel
                    ════════════════════════════ */}
                    <div className="mt-16 md:mt-0 lg:w-[58%] w-full relative">

                        {/* Watermark */}
                        <div className="absolute top-0 left-0 -translate-x-2 -translate-y-10 md:-translate-x-6 md:-translate-y-14 pointer-events-none z-0">
                            <span className="text-[68px] md:text-[120px] font-black whitespace-nowrap select-none leading-none tracking-tighter text-[#c23c77]/15">
                                VISIONARY
                            </span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative z-10 group"
                        >
                            {/* Left-border editorial block */}
                            <div className="pl-4 border-l-4 border-[#c23c77] mb-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-5 shadow-sm">
                                    FOUNDER &amp; CHIEF SURGEON
                                </span>
                                <h2 className="text-4xl md:text-[60px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2">
                                    DR. VISHAL <br /> MANIAR
                                </h2>
                            </div>

                            {/* Qualifications */}
                            <p className="text-primary font-semibold text-[15px] mb-5 tracking-wide">
                                MBBS, DOMS, DNB (Ophthalmology), FGO
                            </p>

                            {/* Description */}
                            <p className="text-text-muted leading-relaxed text-[15px] mb-8 max-w-xl">
                                Dr. Vishal Maniar is a <strong>highly distinguished ophthalmic surgeon</strong> with a remarkable career spanning over <strong>17 years</strong>. He is an expert in Cataract, LASIK, Glaucoma, and Paediatric Eye Care — committed to delivering advanced, compassionate, and accessible eye care.
                            </p>

                            {/* Mission & Vision two-column list */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Our Mission */}
                                <div>
                                    <h4 className="font-extrabold !text-text-main text-[16px] mb-3 flex items-center gap-2">
                                        <span className="w-5 h-[3px] bg-primary rounded-full inline-block" />
                                        Surgical Milestones
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {mission.map((item) => (
                                            <li key={item} className="flex items-start gap-2.5 text-[14px] text-text-muted">
                                                <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check size={11} className="text-primary" strokeWidth={3} />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Our Vision */}
                                <div>
                                    <h4 className="font-extrabold !text-text-main text-[16px] mb-3 flex items-center gap-2">
                                        <span className="w-5 h-[3px] bg-primary rounded-full inline-block" />
                                        Our Commitment
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {vision.map((item) => (
                                            <li key={item} className="flex items-start gap-2.5 text-[14px] text-text-muted">
                                                <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check size={11} className="text-primary" strokeWidth={3} />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
