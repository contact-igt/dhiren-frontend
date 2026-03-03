"use client";
import React, { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ArrowLeft, Phone, Calendar,
    AlertCircle, Lightbulb, ShieldCheck, ClipboardList,
    Stethoscope, Activity, Zap, Info, Sparkles, HeartPulse, BoxSelect,
    UserCheck, ShieldAlert
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

    const { content, title, image, shortDescription, gallery } = service;

    const sections = [
        { id: 'overview', label: 'Overview', icon: Info },
        { id: 'symptoms', label: 'Symptoms', icon: AlertCircle },
        { id: 'causes', label: 'Causes', icon: Lightbulb },
        { id: 'types', label: 'Types', icon: BoxSelect },
        { id: 'diagnosis', label: 'Diagnosis', icon: Stethoscope },
        { id: 'candidates', label: 'Candidates', icon: UserCheck },
        { id: 'treatment', label: 'Treatments', icon: Zap },
        { id: 'recovery', label: 'Recovery', icon: ClipboardList },
        { id: 'benefits', label: 'Benefits', icon: Sparkles },
        { id: 'risks', label: 'Safety', icon: ShieldAlert },
        { id: 'prevention', label: 'Prevention', icon: ShieldCheck },
    ].filter(s => {
        if (s.id === 'overview') return true;
        if (s.id === 'symptoms') return content?.symptoms;
        if (s.id === 'causes') return content?.causes;
        if (s.id === 'types') return content?.types;
        if (s.id === 'diagnosis') return content?.diagnosis;
        if (s.id === 'candidates') return content?.candidates;
        if (s.id === 'treatment') return content?.treatmentOptions;
        if (s.id === 'recovery') return content?.recovery;
        if (s.id === 'benefits') return content?.benefits;
        if (s.id === 'risks') return content?.risks;
        if (s.id === 'prevention') return content?.prevention;
        return false;
    });

    // Asset Mapping for Cataract
    const getClinicalAsset = (sectionId) => {
        if (slug !== 'cataract-surgery') return null;
        const mapping = {
            'overview': '/assets/services/cataract/c7.png',
            'symptoms': '/assets/services/cataract/c2.png',
            'causes': '/assets/services/cataract/c3.png',
            'types': '/assets/services/cataract/c8.png',
            'diagnosis': '/assets/services/cataract/c9.png',
            'candidates': '/assets/services/cataract/c4.png',
            'treatment': '/assets/services/cataract/c5.png',
            'recovery': '/assets/services/cataract/c6.png',
            'benefits': '/assets/services/cataract/c11.png',
            'risks': '/assets/services/cataract/c12.png',
            'prevention': '/assets/services/cataract/c10.png',
        };
        return mapping[sectionId];
    };

    useEffect(() => {
        const handleScroll = () => {
            // Updated scroll position with 180px offset (101px navbar + subnav height + padding)
            const scrollPosition = window.scrollY + 180;
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
    }, [sections]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                // Adjust scroll-to offset for combined navbars (101px + 60px approx)
                top: element.offsetTop - 165,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-[#c23c77]/10 selection:text-[#c23c77]">
            {/* Full Height Modern Hero */}
            <section className="relative h-screen flex flex-col justify-end overflow-hidden bg-black">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="container-custom relative z-10 pb-20 px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <a href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-[#c23c77] mb-8 transition-all font-black tracking-[0.3em] uppercase text-[10px]">
                            <ArrowLeft size={14} /> Back to Services
                        </a>
                        <h1 className="text-7xl md:text-[120px] font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-bold leading-relaxed max-w-2xl">
                            {shortDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sticky Editorial Navigation - Stacked below main Navbar (101px when scrolled) */}
            <nav className="sticky top-[101px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 hidden lg:block transition-all duration-300 shadow-sm">
                <div className="container-custom flex justify-center py-4">
                    <div className="flex gap-8">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all pb-2 border-b-2 ${activeSection === section.id
                                    ? 'text-[#c23c77] border-[#c23c77]'
                                    : 'text-gray-400 border-transparent hover:text-black'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            <div className="container-custom py-32 space-y-48">
                {/* 01. Overview Section: Text Left, Image Right (Reversed) */}
                <section id="overview" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center scroll-mt-32">
                    <div className="relative order-2 lg:order-1">
                        <span className="text-[120px] font-black text-gray-50 absolute -top-20 -left-10 select-none z-0">01</span>
                        <div className="relative z-10">
                            <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Medical Context</span>
                            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black uppercase mb-8 leading-none">The Foundation</h2>
                            <p className="text-2xl md:text-3xl font-black text-black leading-tight tracking-tighter mb-8">
                                {content?.introduction}
                            </p>
                            <p className="text-lg text-gray-500 font-bold leading-relaxed border-l-2 border-[#c23c77]/30 pl-8">
                                {content?.expertise}
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-[40px] order-1 lg:order-2">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#c23c77]/10 to-transparent z-10 pointer-events-none" />
                        <Image
                            src={getClinicalAsset('overview') || image}
                            alt="Visual Overview"
                            width={800}
                            height={600}
                            className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000 shadow-2xl"
                        />
                    </div>
                </section>

                {/* 02. Symptoms Section: Bento Grid Layout */}
                <section id="symptoms" className="scroll-mt-32">
                    <div className="mb-16">
                        <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Diagnostics</span>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black uppercase leading-none">Warning Signs</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {/* Featured Symptom */}
                        <div className="md:col-span-2 lg:col-span-3 row-span-2 p-10 rounded-[40px] bg-black text-white relative overflow-hidden group">
                            <Activity className="text-[#c23c77] mb-6" size={40} />
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{content?.symptoms?.[0]}</h3>
                            <p className="text-white/60 font-medium font-sans">Early indication of crystal-dimming cataract development.</p>
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-6xl font-black text-white/5 uppercase select-none">Focus</span>
                            </div>
                        </div>

                        {/* Secondary Symptoms */}
                        {content?.symptoms?.slice(1, 4).map((symptom, i) => (
                            <div key={i} className="md:col-span-2 lg:col-span-3 p-8 rounded-[40px] bg-[#fbfbfd] border border-gray-100 flex flex-col justify-between hover:border-[#c23c77]/30 transition-all group">
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Indicator 0{i + 2}</span>
                                    <div className="w-2 h-2 rounded-full bg-[#c23c77] group-hover:scale-150 transition-transform" />
                                </div>
                                <span className="text-xl font-black text-black uppercase tracking-tight">{symptom}</span>
                            </div>
                        ))}

                        {/* Smaller Bento Items */}
                        {content?.symptoms?.slice(4).map((symptom, i) => (
                            <div key={i} className="md:col-span-2 lg:col-span-2 p-6 rounded-[30px] bg-white border border-gray-100 flex items-center gap-4 hover:shadow-xl transition-all">
                                <div className="w-10 h-10 rounded-xl bg-[#c23c77]/5 flex items-center justify-center">
                                    <CheckCircle2 size={16} className="text-[#c23c77]" />
                                </div>
                                <span className="text-xs font-black text-gray-600 uppercase tracking-widest">{symptom}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 03. Causes Section: Center Aligned Typography */}
                <section id="causes" className="scroll-mt-32 relative overflow-hidden rounded-[60px] bg-[#f8f8f8] p-20 lg:p-32">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[#c23c77]/5 rounded-full blur-[120px]" />

                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Root Causes</span>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black uppercase mb-16 leading-[0.9]">Biological <br /> Factors</h2>

                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                            {content?.causes?.map((cause, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#c23c77]" />
                                    <span className="text-xl md:text-2xl font-black text-black tracking-tighter uppercase whitespace-nowrap">{cause}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 04. Types Section: Horizontal Card Layout */}
                <section id="types" className="scroll-mt-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Classifications</span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">Diagnostic <br /> Variants</h2>
                        </div>
                        <div className="hidden md:block">
                            <BoxSelect className="text-[#c23c77]/20" size={100} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content?.types?.map((type, i) => (
                            <div key={i} className="group p-10 rounded-[40px] bg-white border border-gray-100 hover:border-[#c23c77]/30 transition-all hover:shadow-2xl hover:-translate-y-2">
                                <span className="text-4xl font-black text-gray-100 group-hover:text-[#c23c77]/10 transition-colors mb-6 block">0{i + 1}</span>
                                <h4 className="text-2xl font-black text-black tracking-tighter uppercase mb-4">{type.name}</h4>
                                <p className="text-gray-500 font-bold leading-relaxed">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 05. Diagnosis Section: Vertical Stepper / Process */}
                <section id="diagnosis" className="grid grid-cols-1 lg:grid-cols-12 gap-20 scroll-mt-32">
                    <div className="lg:col-span-5">
                        <div className="sticky top-48">
                            <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Clinical Exam</span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9] mb-8">Precision <br /> Diagnosis</h2>
                            <p className="text-xl text-gray-500 font-bold leading-relaxed max-w-md">
                                Our diagnostic protocol uses advanced imaging to map the unique landscape of your eye.
                            </p>
                            <div className="mt-12 group overflow-hidden rounded-[30px] hidden lg:block">
                                <Image
                                    src={getClinicalAsset('diagnosis') || image}
                                    alt="Medical Diagnosis"
                                    width={600}
                                    height={400}
                                    className="w-full object-cover aspect-video group-hover:scale-110 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-12">
                        {content?.diagnosis?.map((item, i) => (
                            <div key={i} className="relative pl-16 group">
                                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black group-hover:bg-[#c23c77] transition-colors z-10">
                                    {i + 1}
                                </div>
                                {i !== content.diagnosis.length - 1 && (
                                    <div className="absolute left-[19px] top-10 bottom-[-48px] w-[2px] bg-gray-100" />
                                )}
                                <div className="pt-1">
                                    <span className="text-2xl md:text-3xl font-black text-black tracking-tighter uppercase group-hover:text-[#c23c77] transition-colors">
                                        {item.split(':')[0]}
                                    </span>
                                    <p className="text-lg text-gray-500 font-bold mt-2 leading-relaxed italic">
                                        {item.split(':')[1]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 06. Candidates Section: Premium Highlight Box */}
                <section id="candidates" className="scroll-mt-32">
                    <div className="bg-[#c23c77] rounded-[60px] p-12 lg:p-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <BoxSelect className="absolute -top-20 -right-20 rotate-12" size={400} />
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-white/60 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Eligibility</span>
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8">Surgery <br /> Candidates</h2>
                                <p className="text-xl text-white/70 font-bold leading-relaxed mb-12">
                                    If you experience any of these vision impairments, you may be a candidate for advanced cataract restoration.
                                </p>
                                <div className="hidden lg:block">
                                    <Image
                                        src={getClinicalAsset('candidates') || image}
                                        alt="Candidates Guide"
                                        width={500}
                                        height={300}
                                        className="rounded-3xl shadow-2xl border border-white/20"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {content?.candidates?.map((candidate, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 group hover:bg-white hover:text-[#c23c77] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-[#c23c77]/10">
                                            <UserCheck size={20} className="text-white group-hover:text-[#c23c77]" />
                                        </div>
                                        <span className="text-xl font-black text-white group-hover:text-black tracking-tighter uppercase transition-colors">{candidate}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 07. Treatment Section: Feature Mosaic */}
                <section id="treatment" className="scroll-mt-32">
                    <div className="text-center mb-20">
                        <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Advanced Solutions</span>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black uppercase leading-[0.85]">Surgical <br /> Excellence</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content?.treatmentOptions?.map((option, i) => (
                            <div
                                key={i}
                                className={`group p-10 rounded-[50px] transition-all duration-500 hover:shadow-2xl flex flex-col justify-between min-h-[350px] ${i % 3 === 0 ? 'bg-black text-white md:col-span-2 lg:col-span-1' :
                                    i % 3 === 1 ? 'bg-[#fbfbfd] text-black border border-gray-100' :
                                        'bg-white text-black border border-gray-100'
                                    }`}
                            >
                                <div>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${i % 3 === 0 ? 'bg-[#c23c77]/20 text-[#c23c77]' : 'bg-[#c23c77]/5 text-[#c23c77]'
                                        }`}>
                                        <Zap size={24} />
                                    </div>
                                    <h4 className="text-3xl font-black tracking-tighter uppercase mb-4 leading-none">{option.name}</h4>
                                    <p className={`font-bold leading-relaxed ${i % 3 === 0 ? 'text-white/60' : 'text-gray-500'}`}>
                                        {option.description}
                                    </p>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <span className={`text-[10px] font-black tracking-widest uppercase pb-2 border-b-2 ${i % 3 === 0 ? 'border-[#c23c77] text-[#c23c77]' : 'border-black text-black'
                                        }`}>Method 0{i + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 08. Recovery Section: Roadmap Style */}
                <section id="recovery" className="scroll-mt-32">
                    <div className="mb-16">
                        <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Patient Journey</span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">Recovery <br /> Roadmap</h2>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 hidden lg:block" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {content?.recovery?.map((item, i) => (
                                <div key={i} className="relative bg-white p-10 rounded-[40px] border border-gray-100 hover:border-[#c23c77]/30 transition-all group">
                                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black mb-6 group-hover:bg-[#c23c77] transition-colors relative z-10">
                                        0{i + 1}
                                    </div>
                                    <p className="text-lg font-black text-black tracking-tighter uppercase leading-tight">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 09. Benefits Section: Outcome Focused Layout */}
                <section id="benefits" className="scroll-mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative group overflow-hidden rounded-[40px] order-2 lg:order-1">
                            <Image
                                src={getClinicalAsset('benefits') || image}
                                alt="Benefits Comparison"
                                width={800}
                                height={600}
                                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000 shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <span className="text-white text-3xl font-black uppercase tracking-tighter">Vision Renewed</span>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Vision Outcomes</span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9] mb-12">Visual <br /> Evolution</h2>

                            <div className="space-y-6">
                                {content?.benefits?.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-6 group hover:translate-x-4 transition-transform">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#c23c77]" />
                                        <span className="text-2xl font-black text-black tracking-tighter uppercase">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Safety/Risks Section: High-Trust Banner */}
                <section id="risks" className="scroll-mt-32">
                    <div className="bg-[#fbfbfd] rounded-[60px] p-12 lg:p-24 border border-gray-100 relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none">
                            <ShieldAlert size={300} />
                        </div>

                        <div className="max-w-4xl relative z-10">
                            <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Clinical Safety</span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9] mb-8">Trust & <br /> Transparency</h2>
                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="p-8 rounded-[40px] bg-white shadow-xl shadow-black/5 flex items-center justify-center">
                                    <ShieldAlert className="text-[#c23c77]" size={48} />
                                </div>
                                <p className="text-2xl font-black text-black leading-tight tracking-tighter">
                                    {content?.risks}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 11. Prevention & Tips: Masonry Tip Grid */}
                <section id="prevention" className="scroll-mt-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <span className="text-[#c23c77] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Proactive Care</span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">Prevention <br /> Strategy</h2>
                        </div>
                        <div className="hidden md:block">
                            <Lightbulb className="text-[#c23c77]/20" size={100} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content?.prevention?.map((tip, i) => (
                            <div key={i} className="group p-8 rounded-[40px] bg-white border border-gray-100 hover:border-[#c23c77]/30 transition-all hover:bg-[#fbfbfd]">
                                <div className="w-12 h-12 rounded-2xl bg-[#c23c77]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} className="text-[#c23c77]" />
                                </div>
                                <p className="text-sm font-black text-gray-800 uppercase tracking-tight leading-relaxed">{tip}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA Strip */}
                <section className="bg-black rounded-[60px] p-20 text-center relative overflow-hidden group">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#c23c77] rounded-full blur-[120px]"
                    />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-12 uppercase">
                            Restoring Your <br /> <span className="text-[#c23c77]">Crystal Vision</span>
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="/appointment" className="px-12 py-6 bg-[#c23c77] text-white font-black rounded-full hover:bg-white hover:text-black transition-all shadow-2xl shadow-[#c23c77]/30 text-lg uppercase tracking-widest">
                                Book Now
                            </a>
                            <a href="tel:+917715069185" className="px-12 py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black rounded-full hover:bg-white hover:text-black transition-all text-lg flex items-center justify-center gap-3 uppercase tracking-widest">
                                Emergency Line
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
