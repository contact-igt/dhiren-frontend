"use client";
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Meena Sharma',
        patientType: 'Cataract Surgery Patient',
        text: 'I was suffering from blurry vision due to cataracts. Dr. Vishal Maniar explained everything clearly and performed the surgery with great precision. My vision is crystal clear now. Truly grateful!',
        rating: 5,
    },
    {
        name: 'Rajesh Patel',
        patientType: 'Parent of Pediatric Patient',
        text: 'I consulted Dr. Maniar for my child\'s squint problem. His caring approach and expertise made us feel comfortable. The treatment results were excellent. Highly recommended!',
        rating: 5,
    },
    {
        name: 'Rohit Desai',
        patientType: 'LASIK Patient',
        text: 'I underwent LASIK under Dr. Maniar\'s care. The process was smooth, painless, and the results exceeded my expectations. I am now glasses-free after 10 years!',
        rating: 5,
    },
    {
        name: 'Anjali Mehta',
        patientType: 'Glaucoma Patient',
        text: 'Dr. Vishal Maniar is very approachable and attentive. His diagnosis of my glaucoma was timely, and with his treatment plan, my eye pressure is under control.',
        rating: 5,
    },
    {
        name: 'Amit Khanna',
        patientType: 'General Eye Care Patient',
        text: 'What impressed me the most about Dr. Maniar was his personal attention and detailed explanation of the procedure. His expertise and care make him the best eye specialist I\'ve visited.',
        rating: 5,
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next]);

    const active = testimonials[currentIndex];

    return (
        <section className="section-padding bg-[#f9f9ff] relative overflow-hidden">
            {/* soft background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center">

                    {/* ── LEFT: Image Panel ── */}
                    <motion.div
                        className="lg:w-[45%] w-full relative flex-shrink-0"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Main image */}
                        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                            <Image
                                src="/assets/Home/testimonial.png"
                                alt="Doctor with patient"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>

                        {/* 2K+ Review badge — bottom-right of image */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-6 right-6 lg:-right-6 bg-primary text-white rounded-2xl px-6 py-5 shadow-2xl text-center min-w-[130px]"
                        >
                            <div className="text-3xl font-extrabold leading-none">2K+</div>
                            <div className="text-[13px] font-semibold mt-1 opacity-90">Reviews</div>
                            <div className="flex justify-center gap-0.5 mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-3 h-3 fill-[#FFD700]" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT: Content Panel ── */}
                    <div className="lg:w-[55%] w-full relative">

                        {/* Watermark */}
                        <div className="absolute top-0 left-0 -translate-x-2 -translate-y-10 md:-translate-x-6 md:-translate-y-14 pointer-events-none z-0">
                            <span className="text-[72px] md:text-[120px] font-black whitespace-nowrap select-none leading-none tracking-tighter text-[#c23c77]/15">
                                REVIEWS
                            </span>
                        </div>

                        {/* Editorial header */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative z-10 group"
                        >
                            <div className="pl-4 border-l-4 border-[#c23c77] mb-8">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-5 shadow-sm">
                                    OUR TESTIMONIALS
                                </span>
                                <h2 className="text-4xl md:text-[60px] font-[900] tracking-tighter text-gray-900 leading-[1.0] transition-transform duration-500 group-hover:translate-x-2">
                                    WHAT PATIENTS <br />
                                    <span className="text-[#c23c77]">SAY</span>
                                </h2>
                            </div>
                        </motion.div>

                        {/* Testimonial Card */}
                        <div className="relative min-h-[220px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                >
                                    {/* Stars */}
                                    <div className="flex items-center gap-1 mb-5">
                                        {[...Array(active.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 fill-[#FFB800]" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                        {/* Big quote mark */}
                                        <span className="ml-auto text-6xl font-serif leading-none text-primary/15 select-none -mt-4">&ldquo;&rdquo;</span>
                                    </div>

                                    {/* Quote text */}
                                    <p className="text-[16px] text-text-main/80 leading-relaxed font-medium mb-8 italic">
                                        &ldquo;{active.text}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
                                            <span className="text-primary font-black text-lg">
                                                {active.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-extrabold text-text-main text-[15px] leading-tight">{active.name}</p>
                                            <p className="text-xs text-text-muted font-semibold mt-0.5 tracking-wide">{active.patientType}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* ── Navigation Dots + Arrows ── */}
                        <div className="flex items-center gap-6 mt-10">
                            {/* Dots */}
                            <div className="flex gap-2.5">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`rounded-full transition-all duration-300 ${currentIndex === i
                                            ? 'w-8 h-3 bg-primary'
                                            : 'w-3 h-3 bg-primary/20 hover:bg-primary/40'
                                            }`}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Arrow buttons */}
                            <div className="flex gap-3 ml-auto">
                                <button
                                    onClick={prev}
                                    className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                    aria-label="Previous"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    onClick={next}
                                    className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/80 transition-all duration-300 shadow-lg shadow-primary/30"
                                    aria-label="Next"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
