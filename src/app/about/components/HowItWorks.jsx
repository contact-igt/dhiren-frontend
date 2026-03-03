"use client";

import { motion } from 'framer-motion';
import { CalendarHeart, Search, ShieldCheck } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-[#8c224b] to-[#c23c77] relative overflow-hidden">

            {/* Minimalist Watermark Texture (Right Side) */}
            <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none z-0 opacity-10 hidden lg:block mix-blend-overlay">
                <img src="/assets/paintbrush_texture.png" alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
            </div>

            <div className="container-custom max-w-[1100px] mx-auto px-6 lg:px-8 relative z-10">

                {/* Unified Header */}
                <div className="text-center mb-16 relative flex flex-col items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <span className="text-[10vw] md:text-[120px] font-black text-white/20 whitespace-nowrap select-none leading-none tracking-tight">
                            How It Works
                        </span>
                    </div>
                    <span className="inline-block px-5 py-2 rounded-full border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-4 bg-white/10 backdrop-blur-sm shadow-sm relative z-10">
                        YOUR JOURNEY
                    </span>
                    <h2 className="text-3xl md:text-[42px] font-extrabold tracking-tight text-[#ffffff] leading-[1.3] relative z-10">
                        Journey to Clearer Vision <br className="hidden md:block" />
                        <span className="text-[#ffffff]/90">with Dr. Vishal Maniar</span>
                    </h2>
                </div>

                {/* Steps Flow Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative z-10">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[90px] left-[16%] right-[16%] h-[1px] border-t-2 border-dashed border-white/30 z-0"></div>

                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center text-center relative z-10 bg-white rounded-3xl p-8 pt-10 shadow-sm border border-gray-100"
                    >
                        <div className="relative mb-8 w-[140px] h-[140px] mx-auto flex items-center justify-center">
                            {/* Number Badge */}
                            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-[#fbb03b] text-white flex items-center justify-center font-black text-[18px] shadow-sm z-20 border-[3px] border-white">
                                01
                            </div>

                            {/* Dashed Circle */}
                            <div className="absolute inset-0 rounded-full border border-dashed border-[#c23c77]/30 z-10"></div>

                            {/* Inner Content - Clean Icon on White Area */}
                            <div className="w-[110px] h-[110px] rounded-full bg-[#fdf5f8] flex items-center justify-center object-contain relative z-10 border border-[#c23c77]/10">
                                <CalendarHeart size={48} className="text-[#c23c77]" strokeWidth={1.5} />
                            </div>
                        </div>

                        <h4 className="text-[19px] font-bold text-gray-900 mb-3 px-2 tracking-tight">Book Your Consultation</h4>
                        <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                            Schedule an appointment with Dr. Vishal Maniar for a detailed eye check-up and personalized advice.
                        </p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center text-center relative z-10 bg-white rounded-3xl p-8 pt-10 shadow-sm border border-gray-100"
                    >
                        <div className="relative mb-8 w-[140px] h-[140px] mx-auto flex items-center justify-center">
                            {/* Number Badge */}
                            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-[#fbb03b] text-white flex items-center justify-center font-black text-[18px] shadow-sm z-20 border-[3px] border-white">
                                02
                            </div>

                            {/* Dashed Circle */}
                            <div className="absolute inset-0 rounded-full border border-dashed border-[#c23c77]/30 z-10"></div>

                            {/* Inner Content */}
                            <div className="w-[110px] h-[110px] rounded-full bg-[#fdf5f8] flex items-center justify-center object-contain relative z-10 border border-[#c23c77]/10">
                                <Search size={48} className="text-[#c23c77]" strokeWidth={1.5} />
                            </div>
                        </div>

                        <h4 className="text-[19px] font-bold text-gray-900 mb-3 px-2 tracking-tight">Comprehensive Evaluation</h4>
                        <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                            Undergo advanced diagnostic tests and expert evaluation to detect and treat eye conditions early.
                        </p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center text-center relative z-10 bg-white rounded-3xl p-8 pt-10 shadow-sm border border-gray-100"
                    >
                        <div className="relative mb-8 w-[140px] h-[140px] mx-auto flex items-center justify-center">
                            {/* Number Badge */}
                            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-[#fbb03b] text-white flex items-center justify-center font-black text-[18px] shadow-sm z-20 border-[3px] border-white">
                                03
                            </div>

                            {/* Dashed Circle */}
                            <div className="absolute inset-0 rounded-full border border-dashed border-[#c23c77]/30 z-10"></div>

                            {/* Inner Content */}
                            <div className="w-[110px] h-[110px] rounded-full bg-[#fdf5f8] flex items-center justify-center object-contain relative z-10 border border-[#c23c77]/10">
                                <ShieldCheck size={48} className="text-[#c23c77]" strokeWidth={1.5} />
                            </div>
                        </div>

                        <h4 className="text-[19px] font-bold text-gray-900 mb-3 px-2 tracking-tight">Enjoy Healthy Vision</h4>
                        <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                            With customized treatment and ongoing care, achieve clearer vision and maintain long-term eye health.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
