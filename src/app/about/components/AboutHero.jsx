"use client";

import { motion } from 'framer-motion';
import { ChevronRight, Home, Award, Star, Users } from 'lucide-react';

const AboutHero = () => {
    return (
        <section className="relative h-[85vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#0a0a0c] mt-20 md:mt-0">
            {/* Background Layering */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/About/hero-bg-custom.png"
                    alt="Dhiren Eye Care Hero"
                    className="w-full h-full object-cover opacity-50 scale-105 select-none pointer-events-none"
                />

                {/* Dynamic Brand-colored Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#c23c77]/15 blur-[140px] rounded-full animate-pulse" />
                <div className="absolute bottom-[10%] right-[10%] w-[45%] h-[45%] bg-[#8c224b]/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] right-[5%] w-[30%] h-[30%] bg-[#fbb03b]/5 blur-[100px] rounded-full" />

                {/* Specialized Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/60 to-[#fbfbfd]/5" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="container-custom relative z-10 w-full px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Main Content Area - Refined Glassmorphism Card */}
                    <div className="w-full lg:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative group pt-10 lg:pt-0"
                        >
                            {/* Breadcrumbs */}
                            <div className="flex items-center gap-2 text-white/70 text-[10px] mb-10 bg-white/5 backdrop-blur-2xl w-fit px-6 py-3 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(194,60,119,0.1)]">
                                <Home size={12} className="text-[#fbb03b]" />
                                <ChevronRight size={12} className="opacity-50" />
                                <span className="font-bold tracking-[0.2em] uppercase">The Legacy of Care</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] text-white leading-[1.05] mb-8 tracking-tighter">
                                Dedication to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c23c77] via-[#fbb03b] to-[#c23c77] bg-[length:200%_auto] animate-gradient-flow drop-shadow-[0_0_20px_rgba(194,60,119,0.3)]">
                                    Your Vision.
                                </span>
                            </h1>

                            <p className="text-lg md:text-2xl text-white/60 leading-relaxed font-medium max-w-2xl mb-12">
                                Since 2007, Dhiren Eye Care has been Chennai's beacon of ophthalmic innovation, blending <span className="text-white">expert compassion with cutting-edge tech</span>
                            </p>

                            <div className="flex flex-wrap items-center gap-8">
                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(194,60,119,0.5)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative overflow-hidden group px-10 py-5 bg-gradient-to-r from-[#c23c77] to-[#8c224b] text-white rounded-full font-black text-xs tracking-[0.2em] uppercase border border-white/10 shadow-2xl"
                                >
                                    <span className="relative z-10">Discover Our Story</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                </motion.button>

                                <div className="flex items-center gap-5">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-800 p-0.5 overflow-hidden ring-4 ring-white/5">
                                                <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Patient" className="w-full h-full object-cover rounded-full" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-0.5 text-[#fbb03b] mb-1">
                                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} fill="currentColor" />)}
                                        </div>
                                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">25k+ Trusted Lives</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Re-balanced Interactive Cards */}
                    <div className="w-full lg:w-2/5 relative h-[500px] hidden md:block">
                        {/* stat Card: Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotate: -3 }}
                            animate={{ opacity: 1, y: 0, rotate: -3 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileHover={{ y: -15, rotate: 0, scale: 1.02 }}
                            className="absolute top-5 right-5 w-64 bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[40px] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group z-30"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#c23c77] to-[#8c224b] rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_20px_rgba(194,60,119,0.3)] group-hover:shadow-[0_15px_30px_rgba(194,60,119,0.5)] transition-all">
                                <Award className="text-white" size={30} />
                            </div>
                            <h3 className="text-white text-5xl font-black mb-2 tracking-tighter">17+</h3>
                            <p className="text-white/50 font-bold uppercase tracking-[0.15em] text-[10px] leading-relaxed">Years of Surgical <br />Mastery</p>
                        </motion.div>

                        {/* stat Card: Accreditation */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 8 }}
                            animate={{ opacity: 1, x: 0, rotate: 8 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            whileHover={{ x: -10, rotate: 2, scale: 1.05 }}
                            className="absolute bottom-5 left-0 w-72 bg-white/[0.05] backdrop-blur-3xl p-10 rounded-[45px] border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group z-20"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#fbb03b] to-[#c23c77]/50 rounded-2xl flex items-center justify-center mb-8 shadow-2xl overflow-hidden relative">
                                <Users className="text-white relative z-10" size={30} />
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </div>
                            <h3 className="text-white text-5xl font-black mb-2 tracking-tighter">NABH</h3>
                            <p className="text-white/50 font-bold uppercase tracking-[0.15em] text-[10px] leading-relaxed">Committed to Quality <br />Standards</p>
                        </motion.div>

                        {/* Decorative Geometry */}
                        <div className="absolute top-[25%] left-[10%] w-72 h-72 border border-white/5 rounded-full z-10 animate-spin-slow opacity-20" />
                        <div className="absolute top-[20%] left-[15%] w-56 h-56 border-2 border-dashed border-[#c23c77]/10 rounded-full z-10 animate-spin-slow-reverse" />
                    </div>
                </div>
            </div>

            {/* Clean Modern Background Transitions */}
            {/* <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#fbfbfd] via-[#fbfbfd]/70 to-transparent z-40" />
            <div className="absolute bottom-10 left-0 w-full flex justify-center z-50 animate-bounce cursor-pointer opacity-50">
                <div className="w-0.5 h-16 bg-gradient-to-b from-[#c23c77] to-transparent rounded-full" />
            </div> */}

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
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-slow-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 25s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default AboutHero;
