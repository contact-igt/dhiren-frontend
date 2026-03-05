"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, Activity, Eye, Search, CheckCircle2 } from 'lucide-react';

const serviceCategories = [
    {
        id: 'surgical',
        title: 'Surgical Procedures',
        badge: 'ADVANCED SURGERY',
        icon: <Zap size={20} />,
        description: 'Providing precision-driven surgical solutions for complex eye conditions using state-of-the-art technology and minimally invasive techniques.',
        image: '/assets/Home/surgical_procedure.png', // Fallback to provided paths or placeholders
        treatments: [
            'Cataract (Phacoemulsification) Treatment',
            'Glaucoma Surgical Management',
            'Cornea Transplant & Care',
            'Lasik & Refractive Surgery',
            'Advanced Retina Procedures',
            'Squint (Strabismus) Correction',
            'Oculoplasty & Reconstructive Surgery',
            'Pterygium Removal with Graft',
            'ICL (Implantable Collamer Lens)'
        ]
    },
    {
        id: 'specialized',
        title: 'Specialized Eye Care',
        badge: 'CUSTOMIZED CARE',
        icon: <ShieldCheck size={20} />,
        description: 'Tailored eye care services designed for specific age groups and health conditions to ensure comprehensive vision wellness for every stage of life.',
        image: '/assets/Home/specialized_eye_care.png',
        treatments: [
            'Senior Citizen Comprehensive Care',
            'Paediatric (Child) Eye Care',
            'Diabetic Retinopathy Management',
            'Low Vision Aids & Management',
            'Dry Eye Clinic & Treatment'
        ]
    },
    {
        id: 'vision',
        title: 'Vision Correction',
        badge: 'CLEAR SIGHT',
        icon: <Eye size={20} />,
        description: 'Personalized treatment options and premium lens solutions to correct various vision problems and reduce or eliminate dependency on glasses.',
        image: '/assets/Home/vision_correction.png',
        treatments: [
            'Advanced Laser Eye Treatment (LASIK/PRK)',
            'ICL & Toric ICL Surgery',
            'Premium Multifocal & Toric Lenses',
            'Contact Lens Clinic (Specialty Lenses)',
            'Presbyopia Management'
        ]
    },
    {
        id: 'diagnostic',
        title: 'Diagnostic Tests',
        badge: 'PRECISION DIAGNOSIS',
        icon: <Search size={20} />,
        description: 'State-of-the-art diagnostic tools for accurate evaluation and early detection of eye diseases, enabling personalized treatment planning.',
        image: '/assets/Home/diagnostic.png',
        treatments: [
            'OCT Scan & YAG Laser',
            'Automated Perimetry (Field Test)',
            'A-Scan & B-Scan Ultrasound',
            'Topography & Pachymetry',
            'Fundus Photography'
        ]
    },
    {
        id: 'comprehensive',
        title: 'Comprehensive Eye Care',
        badge: 'COMPLETE CARE',
        icon: <Activity size={20} />,
        description: 'Complete eye care solutions from consultation to vision aids, ensuring healthy eyesight for all ages.',
        image: '/assets/Home/comprehensive_eye_care.png',
        treatments: [
            'Optical Services (Frames, Lenses & Contact Lenses)',
            'Regular Eye Check-ups',
            'Preventive Vision Screening & Counselling',
            'Dry Eye & Computer Vision Care',
            'Senior Citizen & Family Eye Care'
        ]
    }
];

export default function ServicesPreview() {
    const [activeTab, setActiveTab] = useState(serviceCategories[0].id);
    const activeData = serviceCategories.find(c => c.id === activeTab);

    return (
        <section className="section-padding bg-[#FDF8FA] overflow-hidden">
            <div className="container-custom">
                {/* ── Header ── */}
                <div className="flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-12 mb-16 md:mb-20 relative group">
                    <div className="hidden md:block absolute -top-16 -left-10 pointer-events-none z-0">
                        <span className="text-[12vw] md:text-[160px] xl:text-[200px] font-black whitespace-nowrap select-none leading-none tracking-tighter text-[#c23c77]/5 uppercase">
                            OUR SERVICES
                        </span>
                    </div>
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                WHAT WE DO
                            </span>
                            <h2 className="text-[40px] md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                COMPREHENSIVE <br /> EYE CARE
                            </h2>
                        </div>
                    </div>
                </div>

                {/* ── Tab Controller ── */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
                    {serviceCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center cursor-pointer gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-sm tracking-tight border shadow-sm
                                ${activeTab === cat.id
                                    ? 'bg-[#c23c77] text-white border-[#c23c77] shadow-[#c23c77]/20 scale-105'
                                    : 'bg-white text-gray-600 border-gray-100 hover:border-[#c23c77]/40 text-gray-500'
                                }`}
                        >
                            <span className={`transition-transform duration-300 ${activeTab === cat.id ? 'scale-110' : 'opacity-70'}`}>
                                {cat.icon}
                            </span>
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* ── Content Panel ── */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-pink-900/5 relative border border-gray-50">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.02, y: -10 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="flex flex-col lg:flex-row gap-12 items-center"
                        >
                            {/* Left: Text Content */}
                            <div className="flex-1 w-full">
                                <span className="inline-block mb-4 text-[#c23c77] text-xs font-black tracking-widest uppercase py-1 border-b-2 border-[#c23c77]/30">
                                    {activeData.badge}
                                </span>
                                <h3 className="text-3xl md:text-[42px] font-black text-gray-900 leading-tight mb-6">
                                    Services Offered / <br />
                                    <span className="text-[#c23c77]">{activeData.title}</span>
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium">
                                    {activeData.description}
                                </p>

                                {/* Treatments Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                    {activeData.treatments.map((treatment, idx) => (
                                        <motion.div
                                            key={treatment}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + (idx * 0.05) }}
                                            className="flex items-start gap-3 group"
                                        >
                                            <div className="mt-1 w-5 h-5 rounded-full bg-[#c23c77]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c23c77] group-hover:text-white transition-colors duration-200">
                                                <CheckCircle2 size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-[15px] font-bold text-gray-700 group-hover:text-black transition-colors duration-200">
                                                {treatment}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="lg:w-5/12 w-full relative group">
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={activeData.image} // Assuming these assets will be provided or mapped
                                        alt={activeData.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#c23c77]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c23c77]/10 rounded-full blur-3xl -z-10" />
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#c23c77]/5 rounded-full blur-2xl -z-10" />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ── Bottom CTA ── */}
                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 bg-[#c23c77] text-white font-bold px-10 py-4 rounded-full hover:bg-[#a12f62] hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-900/20"
                    >
                        Learn More About Our Care
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}