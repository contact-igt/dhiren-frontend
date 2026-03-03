"use client";

import { motion } from 'framer-motion';
import { Award, Zap, Users, HeartPulse } from 'lucide-react';

const CommittedEyeCare = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">

            {/* Interactive/Decorative Ambient Orbs using Brand Colors */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-[#c23c77]/[0.03] blur-[100px] mix-blend-multiply"></div>
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.03] blur-[100px] mix-blend-multiply"></div>
                <div className="absolute -bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-orange-500/[0.03] blur-[120px] mix-blend-multiply"></div>
            </div>

            <div className="container-custom max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Unified Header */}
                <div className="text-center mb-16 relative flex flex-col items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <span className="text-[10vw] md:text-[120px] font-black text-gray-100 whitespace-nowrap select-none leading-none tracking-tight">
                            Commitment
                        </span>
                    </div>
                    <span className="inline-block px-5 py-2 rounded-full border border-[#c23c77] text-[#c23c77] text-[12px] font-bold tracking-widest uppercase mb-4 bg-white shadow-sm relative z-10">
                        WHY CHOOSE US
                    </span>
                    <h2 className="text-3xl md:text-[42px] font-extrabold tracking-tight !text-gray-900 leading-[1.3] relative z-10">
                        Committed Eye Care <br className="hidden md:block" />
                        <span className="text-[#c23c77]">with Dr. Vishal Maniar</span>
                    </h2>
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
