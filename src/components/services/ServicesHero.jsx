"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, ShieldCheck, Activity, Users } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const heroSlides = [
    // { src: "/assets/Heroslider/h1.png", alt: "Dhiren Eye Care - Advanced Eye Services 1" },
    { src: "/assets/Heroslider/h2.png", alt: "Dhiren Eye Care - Advanced Eye Services 2" },
    { src: "/assets/Heroslider/h3.png", alt: "Dhiren Eye Care - Advanced Eye Services 3" },
    { src: "/assets/Heroslider/h4.png", alt: "Dhiren Eye Care - Advanced Eye Services 4" },
    { src: "/assets/Heroslider/h5.png", alt: "Dhiren Eye Care - Advanced Eye Services 5" },
];

const AUTOPLAY_INTERVAL = 4500;

const ServicesHero = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goNext = useCallback(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, []);

    const goPrev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [isPaused, goNext]);

    return (
        <section
            className="relative h-[100vh] min-h-[500px] w-full flex items-center overflow-hidden bg-[#0a0a0c] mt-20 md:mt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={current}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.06 }}
                        animate={{ opacity: 1, scale: 1.0 }}
                        exit={{ opacity: 0, scale: 1.03 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        <Image
                            src={heroSlides[current].src}
                            alt={heroSlides[current].alt}
                            fill
                            className="w-full h-full object-cover object-left md:object-center opacity-65 select-none pointer-events-none"
                            priority={current === 0}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Brand-colored Glow Blobs */}
                <div className="absolute top-[-15%] left-[-8%] w-[55%] h-[65%] bg-[#c23c77]/20 blur-[160px] rounded-full" />
                <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[55%] bg-[#fbb03b]/12 blur-[130px] rounded-full" />
                <div className="absolute top-[40%] left-[30%] w-[35%] h-[40%] bg-[#c23c77]/8 blur-[100px] rounded-full" />

                {/* Directional Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/5 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
                {/* Extra left-panel darkener for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />
                {/* Soft vignette — edges only, right side kept open */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_30%_50%,transparent_45%,rgba(0,0,0,0.40)_100%)] z-10" />
            </div>

            {/* Main Content */}
            <div className="container-custom relative z-20 w-full px-6 lg:px-12">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-white/50 text-[10px] mb-8 bg-white/5 backdrop-blur-2xl w-fit px-5 py-2.5 rounded-full border border-white/10 shadow-2xl">
                            <Home size={12} className="text-[#c23c77]" />
                            <ChevronRight size={12} className="opacity-50" />
                            <span className="font-bold tracking-[0.2em] uppercase">Specialized Clinics</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] mb-8 tracking-tighter">
                            Advanced <br />
                            <span
                                className="text-transparent bg-clip-text animate-gradient-flow"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #e8326a, #f7693a, #fbb03b, #f7693a, #e8326a)',
                                    backgroundSize: '250% auto',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Eye Services.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/60 leading-relaxed font-medium max-w-2xl mb-12">
                            Blending surgical precision with compassionate care. Explore our comprehensive range of eye care specialties designed to restore and protect your vision.
                        </p>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                            <div className="flex flex-col gap-1">
                                <span className="text-white font-black text-3xl tracking-tighter flex items-center gap-2">
                                    <ShieldCheck className="text-[#c23c77]" size={20} />
                                    16+
                                </span>
                                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Specialties</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white font-black text-3xl tracking-tighter flex items-center gap-2">
                                    <Activity className="text-[#fbb03b]" size={20} />
                                    Modern
                                </span>
                                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Diagnostics</span>
                            </div>
                            <div className="flex flex-col gap-1 hidden md:flex">
                                <span className="text-white font-black text-3xl tracking-tighter flex items-center gap-2">
                                    <Users className="text-[#c23c77]" size={20} />
                                    NABH
                                </span>
                                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Accredited</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style jsx>{`
                @keyframes gradient-flow {
                    0%   { background-position: 0% center; }
                    50%  { background-position: 100% center; }
                    100% { background-position: 0% center; }
                }
                .animate-gradient-flow {
                    animation: gradient-flow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default ServicesHero;
