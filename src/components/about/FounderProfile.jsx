"use client";

import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award } from 'lucide-react';

const FounderProfile = () => {
    return (
        <section className="py-40 bg-[#fbfbfd]">
            <div className="container-custom max-w-5xl mx-auto">
                {/* Header Area */}
                {/* Editorial Header Area Area */}
                <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group">
                    {/* Background Text Watermark - Editorial Position */}
                    <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                        <span
                            className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter opacity-100"
                            style={{ color: 'lab(43 65.24 9.02 / 0.21)' }}
                        >
                            VISIONARY
                        </span>
                    </div>

                    {/* Content Block */}
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                FOUNDER & CHIEF SURGEON
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2">
                                DR. VISHAL <br /> MANIAR
                            </h2>
                        </div>
                    </div>
                </div>

                {/* FINAL STRUCTURE MATCHING SCREENSHOT EXACTLY */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

                    {/* LEFT COLUMN: Photo (Tall) then Vision & Mission (Combined) */}
                    <div className="flex flex-col gap-6 md:col-span-1">
                        {/* Photo Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col relative h-[420px]"
                        >
                            <img
                                src="/assets/Doctor/dhiren.png"
                                alt="Dr. Vishal Maniar"
                                className="w-full h-full object-cover absolute inset-0 object-top"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/600x800/f3f4f6/d1d5db?text=Image";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <p className="text-white/80 text-[12px] font-bold tracking-widest uppercase mb-1">Excellence in Vision</p>
                                <p className="text-white font-bold text-lg leading-tight">Leading Ophthalmic Surgeon in Chennai.</p>
                            </div>
                        </motion.div>

                        {/* Combined Vision & Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col gap-6 flex-grow"
                        >
                            {/* Vision Section */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center border border-blue-100 shadow-sm shrink-0">
                                        <Eye size={14} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#c23c77]">Vision</h3>
                                </div>
                                <p className="text-gray-500 text-[14px] leading-relaxed pl-11">
                                    To ensure a <strong className="text-gray-700 font-semibold">healthy and clear vision</strong> for all individuals, regardless of background.
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-100 w-full" />

                            {/* Mission Section */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center border border-green-100 shadow-sm shrink-0">
                                        <Target size={14} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#c23c77]">Mission</h3>
                                </div>
                                <p className="text-gray-500 text-[14px] leading-relaxed pl-11">
                                    To deliver <strong className="text-gray-700 font-semibold">high-quality eye care services</strong> that are accessible and affordable for every segment of society.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* MIDDLE AND RIGHT COLUMNS */}
                    <div className="flex flex-col gap-6 md:col-span-2">
                        {/* Bio Card (Spans both right columns) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full"
                        >
                            <h3 className="text-xl font-bold text-[#c23c77] mb-4">About Dr. Maniar</h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed mb-6 max-w-3xl">
                                The esteemed Founder of Dhiren Eye Care, Dr. Vishal Maniar brings extensive expertise to eye health. He is profoundly committed to delivering personalized, advanced, and safe treatments to every patient that walks through our doors.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Cataract Surgery', 'Lasik', 'Glaucoma', 'Retina', 'Cornea', 'Pediatric Care', 'Senior Care'].map((tag, idx) => (
                                    <span key={idx} className="bg-gray-50 text-gray-500 px-3 py-1.5 rounded-md text-[12px] font-semibold border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stat Card & Quality Policy Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                            {/* Stat Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-[#c23c77] text-white rounded-3xl p-8 shadow-md flex flex-col justify-center items-center text-center relative overflow-hidden h-full min-h-[200px]"
                            >
                                <Award className="absolute -right-10 -bottom-10 w-48 h-48 text-white opacity-10 pointer-events-none" />
                                <div className="relative z-10 w-full flex flex-col items-center">
                                    <div className="text-6xl font-black mb-1">17+</div>
                                    <div className="text-sm font-bold text-white mb-3">Years Experience</div>
                                    <div className="text-[13px] text-white/80 leading-relaxed font-medium px-4">Dedicated to advanced diagnostic tools like OCT, Perimetry, and YAG Laser.</div>
                                </div>
                            </motion.div>

                            {/* Quality Policy Card (Replacing where Mission was) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-gray-900 text-white rounded-3xl p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col justify-center h-full min-h-[200px]"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3" />
                                <div className="relative z-10 flex flex-col items-center text-center gap-3">
                                    <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center shrink-0 mb-1">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Quality Policy</h3>
                                        <p className="text-gray-300 leading-relaxed text-[14px] max-w-[200px] mx-auto">
                                            To promote <strong className="text-white font-semibold">glasses-free vision</strong>, wherever clinically feasible, within each individual's budget.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FounderProfile;
