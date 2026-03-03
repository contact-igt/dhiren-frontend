"use client";
import React, { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ArrowLeft, Phone, Calendar,
    AlertCircle, Lightbulb, ShieldCheck, ClipboardList,
    Stethoscope, Activity, Zap, Info
} from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import Image from 'next/image';

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = servicesData.find(s => s.id === slug);
    const [activeSection, setActiveSection] = useState('overview');

    if (!service) {
        return notFound();
    }

    const { content, title, image, shortDescription } = service;

    const sections = [
        { id: 'overview', label: 'Overview', icon: Info },
        { id: 'symptoms', label: 'Symptoms & Causes', icon: AlertCircle },
        { id: 'treatment', label: 'Treatments', icon: Stethoscope },
        { id: 'recovery', label: 'Recovery', icon: ClipboardList },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-[#c23c77]/10 selection:text-[#c23c77]">
            {/* Split Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col lg:flex-row overflow-hidden">
                <div className="w-full lg:w-1/2 flex items-center bg-[#fbfbfd] px-6 lg:px-20 py-32 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <a href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c23c77] mb-12 transition-all font-bold tracking-widest uppercase text-xs">
                            <ArrowLeft size={16} /> All Services
                        </a>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-10 h-[1px] bg-[#c23c77]" />
                            <span className="text-[#c23c77] font-black tracking-widest text-xs uppercase">Specialized Procedure</span>
                        </div>
                        <h1 className="text-6xl md:text-[80px] font-black text-black tracking-tighter leading-[0.9] mb-8">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 border-l-4 border-[#c23c77]/20 pl-6">
                            {shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => scrollToSection('treatment')} className="px-8 py-4 bg-[#c23c77] text-white font-black rounded-2xl hover:bg-black transition-all shadow-lg hover:shadow-xl">
                                Explore Treatment
                            </button>
                            <a href="/appointment" className="px-8 py-4 bg-white text-black border-2 border-black/5 font-black rounded-2xl hover:bg-gray-50 transition-all flex items-center gap-3">
                                <Calendar size={18} /> Book Visit
                            </a>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfd] via-transparent to-transparent hidden lg:block" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-2xl p-8 rounded-[30px] border border-white/20 hidden md:block max-w-xs"
                    >
                        <Zap className="text-white mb-4" size={32} />
                        <p className="text-white font-bold leading-tight">Advanced precision surgery with minimal recovery time.</p>
                    </motion.div>
                </div>
            </section>

            <div className="container-custom max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sticky Sidebar Navigation */}
                    <aside className="lg:w-1/4 hidden lg:block">
                        <div className="sticky top-32 space-y-2">
                            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 mb-6 pl-4">ON THIS PAGE</p>
                            {sections.map((section) => {
                                const SectionIcon = section.icon;
                                const isActive = activeSection === section.id;
                                return (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 text-left group ${isActive
                                            ? 'bg-[#c23c77] text-white shadow-xl shadow-[#c23c77]/20 scale-[1.02]'
                                            : 'hover:bg-gray-50 text-gray-500'
                                            }`}
                                    >
                                        <SectionIcon size={18} className={isActive ? 'text-white' : 'group-hover:text-[#c23c77]'} />
                                        <span className="font-black text-sm uppercase tracking-wider">{section.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </aside>

                    {/* Content Sections */}
                    <main className="lg:w-3/4 space-y-32">
                        {/* Overview Section */}
                        <section id="overview" className="scroll-mt-32">
                            <div className="flex flex-col md:flex-row items-end gap-8 mb-16 relative group">
                                <div className="absolute -top-12 -left-6 pointer-events-none z-0">
                                    <span className="text-[8vw] md:text-[120px] font-black whitespace-nowrap select-none leading-none tracking-tighter opacity-100" style={{ color: 'lab(43 65.24 9.02 / 0.1)' }}>
                                        OVERVIEW
                                    </span>
                                </div>
                                <div className="relative z-10 flex gap-6 items-start pl-4 border-l-4 border-[#c23c77]">
                                    <div className="flex flex-col items-start text-left">
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#fbfbfd] border border-[#c23c77]/20 text-[#c23c77] text-[10px] font-black tracking-[0.2em] uppercase mb-4 shadow-sm">
                                            Procedure Details
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight uppercase">
                                            Medical Overview
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <p className="text-3xl md:text-[42px] font-black text-black leading-[1.1] tracking-tighter">
                                    {content?.introduction || shortDescription}
                                </p>
                                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-4xl border-l-2 border-gray-100 pl-8">
                                    {content?.expertise}
                                </p>
                            </div>
                        </section>

                        {/* Bento Grid: Symptoms & Causes */}
                        {content && (
                            <section id="symptoms" className="scroll-mt-32">
                                <div className="flex flex-col md:flex-row items-end gap-8 mb-20 relative group">
                                    <div className="absolute -top-12 -left-6 pointer-events-none z-0">
                                        <span className="text-[8vw] md:text-[120px] font-black whitespace-nowrap select-none leading-none tracking-tighter opacity-100" style={{ color: 'lab(43 65.24 9.02 / 0.1)' }}>
                                            DIAGNOSIS
                                        </span>
                                    </div>
                                    <div className="relative z-10 flex gap-6 items-start pl-4 border-l-4 border-[#c23c77]">
                                        <div className="flex flex-col items-start text-left">
                                            <span className="inline-block px-3 py-1 rounded-full bg-[#fbfbfd] border border-[#c23c77]/20 text-[#c23c77] text-[10px] font-black tracking-[0.2em] uppercase mb-4 shadow-sm">
                                                Signs & Indicators
                                            </span>
                                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight uppercase">
                                                Symptoms & Causes
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                    {/* Symptoms Card - Large */}
                                    <div className="md:col-span-12 lg:col-span-7 bg-[#fbfbfd] p-10 rounded-[40px] border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                                        <div className="flex justify-between items-start mb-8 text-black/50 group-hover:text-[#c23c77] transition-colors">
                                            <h3 className="text-4xl font-black text-black tracking-tighter">Symptoms</h3>
                                            <Activity size={40} />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                                            {content.symptoms?.map((symptom, i) => (
                                                <div key={i} className="flex gap-3 items-start group/item">
                                                    <CheckCircle2 size={18} className="text-[#c23c77] mt-1 shrink-0 transform transition-transform group-hover/item:scale-125" />
                                                    <span className="text-gray-600 font-bold leading-snug">{symptom}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Causes Card - Tall */}
                                    <div className="md:col-span-12 lg:col-span-5 bg-black p-10 rounded-[40px] text-white flex flex-col justify-between group hover:shadow-2xl transition-all duration-500">
                                        <div>
                                            <Lightbulb className="text-[#c23c77] mb-8" size={40} />
                                            <h3 className="text-4xl font-black tracking-tighter mb-8">Primary Causes</h3>
                                            <div className="space-y-4">
                                                {content.causes?.map((cause, i) => (
                                                    <div key={i} className="flex items-center gap-4 py-3 border-b border-white/10 group/cause">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#c23c77] group-hover/cause:scale-150 transition-transform" />
                                                        <span className="text-gray-300 font-bold text-sm">{cause}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                                            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c23c77] mb-2">Expert Note</p>
                                            <p className="text-sm text-gray-400 font-bold">Early detection through regular screening can prevent 80% of vision loss cases.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Treatment Section - Horizontal Cards */}
                        {content?.treatmentOptions && (
                            <section id="treatment" className="scroll-mt-32">
                                <div className="flex flex-col md:flex-row items-end gap-8 mb-20 relative group">
                                    <div className="absolute -top-12 -left-6 pointer-events-none z-0">
                                        <span className="text-[8vw] md:text-[120px] font-black whitespace-nowrap select-none leading-none tracking-tighter opacity-100" style={{ color: 'lab(43 65.24 9.02 / 0.1)' }}>
                                            SOLUTIONS
                                        </span>
                                    </div>
                                    <div className="relative z-10 flex gap-6 items-start pl-4 border-l-4 border-[#c23c77]">
                                        <div className="flex flex-col items-start text-left">
                                            <span className="inline-block px-3 py-1 rounded-full bg-[#fbfbfd] border border-[#c23c77]/20 text-[#c23c77] text-[10px] font-black tracking-[0.2em] uppercase mb-4 shadow-sm">
                                                Advanced Care
                                            </span>
                                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight uppercase">
                                                Treatment Solutions
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {content.treatmentOptions.map((option, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ x: 10 }}
                                            className="p-8 bg-white border border-gray-100 rounded-[30px] flex flex-col md:flex-row md:items-center gap-8 hover:shadow-xl transition-all group"
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-[#fbfbfd] flex items-center justify-center text-[#c23c77] shrink-0 group-hover:bg-[#c23c77] group-hover:text-white transition-colors uppercase font-black">
                                                0{i + 1}
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="text-2xl font-black text-black mb-2 tracking-tight">{option.name}</h4>
                                                <p className="text-gray-500 font-bold">{option.description}</p>
                                            </div>
                                            <ShieldCheck className="text-gray-100 group-hover:text-[#c23c77] transition-colors shrink-0" size={40} />
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Recovery Section - Offset Layout */}
                        <section id="recovery" className="scroll-mt-32">
                            <div className="flex flex-col md:flex-row items-end gap-8 mb-20 relative group">
                                <div className="absolute -top-12 -left-6 pointer-events-none z-0">
                                    <span className="text-[8vw] md:text-[120px] font-black whitespace-nowrap select-none leading-none tracking-tighter opacity-100" style={{ color: 'lab(43 65.24 9.02 / 0.1)' }}>
                                        RECOVERY
                                    </span>
                                </div>
                                <div className="relative z-10 flex gap-6 items-start pl-4 border-l-4 border-[#c23c77]">
                                    <div className="flex flex-col items-start text-left">
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#fbfbfd] border border-[#c23c77]/20 text-[#c23c77] text-[10px] font-black tracking-[0.2em] uppercase mb-4 shadow-sm">
                                            Post-Op Care
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight uppercase">
                                            Aftercare Process
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                <div className="space-y-4">
                                    {content?.recovery?.map((item, i) => (
                                        <div key={i} className="flex gap-6 p-6 rounded-3xl bg-[#fbfbfd] border border-gray-100 hover:border-[#c23c77]/30 transition-colors">
                                            <div className="text-2xl font-black text-[#c23c77] opacity-20">0{i + 1}</div>
                                            <p className="font-bold text-gray-700 leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-[#c23c77] p-12 rounded-[50px] text-white overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                                        <ShieldCheck size={200} />
                                    </div>
                                    <h4 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">Care Excellence</h4>
                                    <p className="text-lg text-white/80 font-bold leading-relaxed relative z-10 mb-8">
                                        Our post-operative support includes 24/7 emergency contacts and scheduled follow-ups to ensure your vision stabilizes perfectly.
                                    </p>
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black tracking-widest text-white/60 mb-1">EMERGENCY LINE</p>
                                            <p className="font-black">+91 77150 69185</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Final CTA Strip */}
                        <section className="bg-black rounded-[60px] p-12 md:p-20 text-center relative overflow-hidden group">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.1, 0.2, 0.1]
                                }}
                                transition={{ duration: 8, repeat: Infinity }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#c23c77] rounded-full blur-[120px]"
                            />
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h3 className="text-4xl md:text-[54px] font-[900] text-white tracking-tighter leading-none mb-8">
                                    READY TO SEE <br /> <span className="text-[#c23c77]">CLEARLY?</span>
                                </h3>
                                <p className="text-xl text-gray-400 font-medium mb-12">
                                    Join thousands of patients who have restored their vision under the care of Dr. Vishal Maniar.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <a href="/appointment" className="px-12 py-6 bg-[#c23c77] text-white font-black rounded-full hover:bg-white hover:text-black transition-all shadow-2xl shadow-[#c23c77]/30 text-lg">
                                        Book Your Consultation
                                    </a>
                                    <a href="tel:+917715069185" className="px-12 py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black rounded-full hover:bg-white hover:text-black transition-all text-lg flex items-center justify-center gap-3 group/tel">
                                        <Phone size={20} className="group-hover/tel:rotate-12 transition-transform" /> +91 77150 69185
                                    </a>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
