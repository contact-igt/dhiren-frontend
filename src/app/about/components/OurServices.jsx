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
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden">

            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-400/[0.04] blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#c23c77]/[0.04] blur-[150px]"></div>
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-orange-400/[0.02] blur-[100px]"></div>
            </div>

            {/* Header Area */}
            <div className="text-center mb-16 relative flex flex-col items-center justify-center">
                {/* Background Text Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <span className="text-[10vw] md:text-[120px] font-black text-[#e4ecea] whitespace-nowrap select-none leading-none tracking-tight">
                        Our Services
                    </span>
                </div>
                <span className="inline-block px-5 py-2 rounded-full border border-[#c23c77] text-[#c23c77] text-[12px] font-bold tracking-widest uppercase mb-4 bg-white shadow-sm relative z-10">
                    WHAT WE DO
                </span>
                {/* Foreground Title */}
                <h3 className="text-3xl md:text-[42px] font-extrabold tracking-tight !text-gray-900 leading-[1.3] relative z-10">
                    Comprehensive Eye Care <br className="hidden md:block" />
                    <span className="text-[#c23c77]">by Dr. Vishal Maniar</span>
                </h3>
            </div>

            <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Services Grid - 3 Columns on lg as per screenshot density */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="bg-white rounded-[24px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-visible flex flex-col group relative border border-gray-100/50"
                            >
                                {/* Image Half */}
                                <div className="h-[220px] w-full rounded-t-[24px] overflow-hidden relative p-4 pb-0">
                                    <div className="w-full h-full rounded-t-2xl rounded-b-md overflow-hidden relative">
                                        <img
                                            src={service.image || PLACEHOLDER_IMAGE}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Overlay gradient for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* The Distinctive Overlapping Icon Badge */}
                                    <div className="absolute -bottom-6 right-8 w-14 h-14 rounded-full bg-[#8c224b] text-white flex items-center justify-center shadow-[0_8px_16px_rgba(140,34,75,0.25)] z-20 transition-transform duration-300 group-hover:bg-[#a62b5a]">
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Content Half */}
                                <div className="p-8 pt-10 flex flex-col flex-grow">
                                    <h4 className="text-[19px] font-extrabold text-gray-900 mb-3 tracking-tight">
                                        {service.title}
                                    </h4>
                                    <p className="text-[15px] text-gray-500 leading-relaxed font-medium mb-6 flex-grow">
                                        {service.description}
                                    </p>

                                    <a
                                        href={service.link}
                                        className="text-[15px] font-black text-gray-900 tracking-wide hover:text-[#8c224b] transition-colors inline-flex items-center"
                                    >
                                        Read More
                                    </a>
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
