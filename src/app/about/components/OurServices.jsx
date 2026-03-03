"use client";

import { motion } from 'framer-motion';
import {
    Eye, Activity, BoxSelect, Syringe, ScanLine, Expand,
    Glasses, Plus, ShieldAlert, HeartPulse, Sparkles,
    ZoomIn, ActivitySquare, UserCheck, Stethoscope, FileSearch
} from 'lucide-react';

// Using a high-quality relevant placeholder for all services as requested by the user
const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1579684385127-1ef15d506041?auto=format&fit=crop&q=80&w=800";

const servicesData = [
    {
        title: "Cataract Treatments",
        description: "Safe and advanced cataract removal with premium IOLs for clear vision.",
        icon: Eye,
        link: "#",
        image: "/assets/About/cataract.jpg"
    },
    {
        title: "Glaucoma Treatments",
        description: "Advanced surgical & laser treatments to control eye pressure and prevent vision loss.",
        icon: Activity,
        link: "#",
        image: "/assets/About/glaucoma.webp"
    },
    {
        title: "Cornea Treatments",
        description: "Expert care for corneal diseases and injuries with advanced surgical techniques.",
        icon: BoxSelect,
        link: "#",
        image: "/assets/About/cornea.jpg"
    },
    {
        title: "LASIK Treatments",
        description: "Blade-free LASIK for freedom from glasses and improved vision quality.",
        icon: Sparkles,
        link: "#",
        image: "/assets/About/lasik.webp"
    },
    {
        title: "Retina Treatments",
        description: "Expert treatment for retinal disorders including diabetic retinopathy & detachment.",
        icon: ScanLine,
        link: "#",
        image: "/assets/About/retina.jpg"
    },
    {
        title: "Squint Treatments",
        description: "Corrective surgery for squint (strabismus) to restore eye alignment and vision.",
        icon: Expand,
        link: "#",
        image: "/assets/About/squint.jpg"
    },
    {
        title: "Oculoplasty Treatments",
        description: "Cosmetic and reconstructive eye procedures for eyelids, orbit, and tear ducts.",
        icon: Glasses,
        link: "#",
        image: "/assets/About/oculoplasty.webp"
    },
    {
        title: "Pterygium Treatments",
        description: "Safe and effective removal of pterygium growth to restore comfort and vision.",
        icon: ShieldAlert,
        link: "#",
        image: "/assets/About/pterygium.jpg"
    },
    {
        title: "ICL Treatments",
        description: "Implantable Collamer Lens for high power correction without removing cornea tissue.",
        icon: UserCheck,
        link: "#",
        image: "/assets/About/icl.jpg"
    },
    {
        title: "Senior Citizen Eye Care",
        description: "Comprehensive eye care plans tailored to the needs of elderly patients.",
        icon: HeartPulse,
        link: "#",
        image: "/assets/About/senior.jpg"
    },
    {
        title: "Low Vision Management",
        description: "Specialized aids and therapies to enhance quality of life for low vision patients.",
        icon: ZoomIn,
        link: "#",
        image: "/assets/About/low-vision.jpg"
    },
    {
        title: "Pediatric Eye Care",
        description: "Dedicated children's eye treatments including squint correction & lazy eye therapy.",
        icon: Plus,
        link: "#",
        image: "/assets/About/pediatric.webp"
    },
    {
        title: "Diabetic Eye Care",
        description: "Comprehensive management of diabetes-related eye problems to prevent blindness.",
        icon: ActivitySquare,
        link: "#",
        image: "/assets/About/diabetic.jpg"
    },
    {
        title: "Optical Services",
        description: "High-quality eyeglasses, frames, and contact lenses with expert guidance.",
        icon: FileSearch,
        link: "#",
        image: "/assets/About/optical.jpg"
    },
    {
        title: "OCT Scan & YAG Laser",
        description: "Advanced diagnostic scanning and laser procedures for precise eye care.",
        icon: Syringe,
        link: "#",
        image: "/assets/About/oct.png"
    },
    {
        title: "Perimetry Test",
        description: "Visual field testing to detect early signs of glaucoma and other eye conditions.",
        icon: Stethoscope,
        link: "#",
        image: "/assets/About/perimetry.jpg"
    }
];

const OurServices = () => {
    return (
        <section className="py-40 bg-[#fbfbfd] relative overflow-hidden">

            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#c23c77]/[0.02] blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.02] blur-[100px]"></div>
            </div>

            {/* Editorial Header Area */}
            <div className="container-custom max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-end gap-12 mb-20 relative group">
                    {/* Background Text Watermark - Editorial Position */}
                    <div className="absolute -top-16 -left-10 pointer-events-none z-0">
                        <span
                            className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter opacity-100"
                            style={{ color: 'lab(43 65.24 9.02 / 0.21)' }}
                        >
                            SERVICES
                        </span>
                    </div>

                    {/* Content Block */}
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                WHAT WE DO
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2">
                                COMPREHENSIVE <br /> EYE CARE
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ y: -10 }}
                                className="group relative flex flex-col h-full"
                            >
                                {/* Main Card Body */}
                                <div className="relative flex flex-col h-full bg-white rounded-[40px] p-2 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] border border-gray-100/50 transition-all duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(194,60,119,0.15)] group-hover:border-[#c23c77]/20 overflow-hidden">

                                    {/* Top Image Container */}
                                    <div className="relative h-[240px] w-full rounded-[32px] overflow-hidden mb-2">
                                        <img
                                            src={service.image || PLACEHOLDER_IMAGE}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Floating Icon Badge - Integrated into Image */}
                                        <div className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:bg-[#c23c77] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">
                                            <Icon size={26} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Textual Content */}
                                    <div className="flex flex-col flex-grow px-8 py-8">
                                        <h4 className="text-[22px] font-black text-gray-900 mb-3 tracking-tight group-hover:text-[#c23c77] transition-colors duration-300">
                                            {service.title}
                                        </h4>
                                        <p className="text-[15px] text-gray-500 leading-relaxed font-medium mb-4 flex-grow">
                                            {service.description}
                                        </p>

                                        {/* Premium Read More Interaction */}
                                        <div className="flex items-center justify-between mt-auto pt-2  border-t border-gray-200">
                                            <a
                                                href={service.link}
                                                className="text-[14px] font-black text-gray-900 tracking-wider uppercase flex items-center gap-2 group/btn"
                                            >
                                                <span className="relative overflow-hidden inline-block">
                                                    <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">Read More</span>
                                                    <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0 text-[#c23c77]">Learn Why</span>
                                                </span>
                                            </a>
                                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#c23c77]/10 group-hover:rotate-45">
                                                <Plus size={18} className="text-[#c23c77]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Overlay for interaction bloom */}
                                    <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-[#c23c77]/[0.03] rounded-full blur-[40px] pointer-events-none group-hover:bg-[#c23c77]/[0.08] transition-colors duration-500" />
                                </div>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default OurServices;
