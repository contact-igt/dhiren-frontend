"use client";

import { motion } from 'framer-motion';
import { Award, Zap, Users, HeartPulse } from 'lucide-react';

const CommittedEyeCare = () => {
    return (
        <section className="py-40 relative overflow-hidden bg-white">

            {/* Interactive/Decorative Ambient Orbs using Brand Colors */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-[#c23c77]/[0.03] blur-[100px] mix-blend-multiply"></div>
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.03] blur-[100px] mix-blend-multiply"></div>
                <div className="absolute -bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-orange-500/[0.03] blur-[120px] mix-blend-multiply"></div>
            </div>

            <div className="container-custom max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Editorial Header Area */}
                <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group">
                    {/* Background Text Watermark - Editorial Position */}
                    <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                        <span
                            className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter opacity-100"
                            style={{ color: 'lab(43 65.24 9.02 / 0.21)' }}
                        >
                            COMMITMENT
                        </span>
                    </div>

                    {/* Content Block */}
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                WHY CHOOSE US
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2">
                                COMMITTED <br /> EYE CARE
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Elegantly Framed Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Decorative dashed border framing the image */}
                        <div className="absolute -inset-4 md:-inset-6 border border-dashed border-gray-300 rounded-[2rem] z-0"></div>
                        <div className="absolute -inset-4 md:-inset-6 border border-dashed border-[#c23c77]/30 rounded-[2rem] z-0 translate-x-3 translate-y-3"></div>

                        <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] bg-gray-50">
                            <img
                                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Committed Eye Care Family"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Clean Content & Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col"
                    >
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
                            A trusted name in ophthalmology, known for his dedication to restoring and protecting vision. With a strong commitment to ethical medical practice, compassionate care, and cutting-edge technology, he ensures personalized treatment for every patient.
                        </p>

                        {/* Minimalist Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">

                            {/* Feature 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full border border-dashed border-orange-300 flex items-center justify-center shrink-0">
                                    <Award size={20} className="text-orange-500 stroke-[2.5]" />
                                </div>
                                <div>
                                    <h4 className="text-[16px] font-bold text-gray-900 mb-1">17+ Years Expertise</h4>
                                    <p className="text-[14px] text-gray-500 leading-relaxed pr-2">Extensive experience in advanced surgical procedures.</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full border border-dashed border-blue-300 flex items-center justify-center shrink-0">
                                    <Zap size={20} className="text-blue-500 stroke-[2.5]" />
                                </div>
                                <div>
                                    <h4 className="text-[16px] font-bold text-gray-900 mb-1">Modern Tech</h4>
                                    <p className="text-[14px] text-gray-500 leading-relaxed pr-2">Equipped with the latest diagnostic and surgical tools.</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full border border-dashed border-green-300 flex items-center justify-center shrink-0">
                                    <Users size={20} className="text-green-600 stroke-[2.5]" />
                                </div>
                                <div>
                                    <h4 className="text-[16px] font-bold text-gray-900 mb-1">Trusted by 1000s</h4>
                                    <p className="text-[14px] text-gray-500 leading-relaxed pr-2">A proven record of successful patient outcomes.</p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full border border-dashed border-red-300 flex items-center justify-center shrink-0">
                                    <HeartPulse size={20} className="text-red-500 stroke-[2.5]" />
                                </div>
                                <div>
                                    <h4 className="text-[16px] font-bold text-gray-900 mb-1">Comprehensive Care</h4>
                                    <p className="text-[14px] text-gray-500 leading-relaxed pr-2">From basic checks to complex surgeries under one roof.</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CommittedEyeCare;
