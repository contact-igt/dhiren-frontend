"use client";

import { motion } from 'framer-motion';
import { ChevronRight, Home, ShieldCheck, Activity, Users } from 'lucide-react';
import Image from 'next/image';

const ServicesHero = () => {
    return (
        <section className="relative h-[100vh] min-h-[500px] w-full flex items-center overflow-hidden bg-[#0a0a0c] mt-20 md:mt-0">
            {/* Background Layering */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/Heroslider/h3.png"
                    alt="Dhiren Eye Care Services"
                    fill
                    className="w-full h-full object-cover opacity-40 scale-105 select-none pointer-events-none"
                    priority
                />

                {/* Dynamic Brand-colored Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#c23c77]/15 blur-[140px] rounded-full" />
                <div className="absolute bottom-[10%] right-[10%] w-[45%] h-[45%] bg-[#fbb03b]/5 blur-[120px] rounded-full" />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/20 z-0" />
            </div>

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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c23c77] via-[#fbb03b] to-[#c23c77] bg-[length:200%_auto] animate-gradient-flow">
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
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-flow {
                    background-size: 200% 200%;
                    animation: gradient-flow 3s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default ServicesHero;
