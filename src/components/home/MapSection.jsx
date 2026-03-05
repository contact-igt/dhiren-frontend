"use client";
import { useState } from 'react';
import { MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const locations = [
    {
        id: 1,
        branch: 'Matunga (W)',
        tag: 'Matunga Branch',
        address: 'C-2A, Padmavati Apartment, Ground Floor, T.H. Kataria Marg, Mumbai-400016',
        phone: '+91 77150 69185',
        email: 'matunga@dhireneyecare.com',
        hours: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sun: 10:00 AM – 1:00 PM'],
        specialist: 'Dr. Dhiren Maniar',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9120!2d72.8410!3d19.0247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8e5b8b8b8b%3A0x0!2sDhiren%20Eye%20Care%2C%20Matunga!5e0!3m2!1sen!2sin!4v1700000000001'
    },
    {
        id: 2,
        branch: 'Dadar (W)',
        tag: 'Dadar Branch',
        address: 'Karmyog Udyog Bhavan, 1st Floor, Balgovindas Marg, Opp Ruparel College Gate, Mumbai-400028',
        phone: '+91 77150 69186',
        email: 'dadar@dhireneyecare.com',
        hours: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sun: Closed'],
        specialist: 'Dr. Dhiren Maniar',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.8410!3d19.0180!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8e5b8b8b8c%3A0x0!2sDhiren%20Eye%20Care%20Dadar%20West!5e0!3m2!1sen!2sin!4v1700000000002'
    },
    {
        id: 3,
        branch: 'Dombivli (E)',
        tag: 'Dombivli Branch',
        address: 'Navre Plaza, 1st Floor, Shop 107-109, Opp Ramnagar Police Chowky, Near Swami Samarth Math, Mumbai-412201',
        phone: '+91 77150 69187',
        email: 'dombivli@dhireneyecare.com',
        hours: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sun: Closed'],
        specialist: 'Dr. Dhiren Maniar',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0!2d73.0859!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7950a0a0a0a0a%3A0x0!2sDhiren%20Eye%20Care%20Hospital%20Dombivli!5e0!3m2!1sen!2sin!4v1700000000003'
    },
    {
        id: 4,
        branch: 'Mahalaxmi (E)',
        tag: 'Mahalaxmi Branch',
        address: 'Shop no 04, Fortune View, B.J. Road, Near Bank of Baroda, Saat Rasta, Mumbai-400011',
        phone: '+91 77150 69188',
        email: 'mahalaxmi@dhireneyecare.com',
        hours: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sun: Closed'],
        specialist: 'Dr. Dhiren Maniar',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0!2d72.8310!3d18.9822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5a0a0a0a0a%3A0x0!2sFortune%20View%20Mahalaxmi!5e0!3m2!1sen!2sin!4v1700000000004'
    }
];

export default function MapSection() {
    const [activeId, setActiveId] = useState(1);
    const active = locations.find(l => l.id === activeId);

    return (
        <section className="section-padding bg-[#0f172a] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="container-custom">
                {/* Section Header */}
                {/* <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block mb-3 text-sm font-black tracking-widest uppercase text-primary px-5 py-1.5 bg-primary/20 rounded-full">Our Locations</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-5 text-white tracking-tight">Visit Our Hospital</h2>
                    <p className="text-lg text-white/60 font-medium">
                        Find us across four branches in Mumbai — click a branch to explore.
                    </p>
                </div> */}
                {/* ── Header ── */}
                <div className="flex flex-col md:flex-row md:items-end md:gap-12 mb-20 relative group">
                    <div className="mt-5 md:mt-0 absolute -top-16 md:-left-10 pointer-events-none z-0">
                        <span className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter text-white/5 uppercase">
                            OUR LOCATIONS
                        </span>
                    </div>
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-white">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-white/20 text-primary text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                VISIT OUR HOSPITAL
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-white leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                OUR <br /> LOCATIONS
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

                    {/* Tabs — Left Column */}
                    <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        {locations.map((loc) => (
                            <button
                                key={loc.id}
                                onClick={() => setActiveId(loc.id)}
                                className={`relative flex-shrink-0 w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group border
                                    ${activeId === loc.id
                                        ? 'bg-primary text-white shadow-2xl shadow-primary/25 border-primary'
                                        : 'bg-white/10 text-white border-white/10 shadow-sm hover:shadow-md hover:border-primary/40'
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activeId === loc.id ? 'bg-white/20' : 'bg-white/20'}`}>
                                    <MapPin size={20} className={activeId === loc.id ? 'text-white' : 'text-white'} />
                                </div>
                                <div className="overflow-hidden min-w-0 flex-1">
                                    <p className={`font-black text-sm truncate ${activeId === loc.id ? 'text-white' : 'text-white'}`}>{loc.branch}</p>
                                    <p className={`text-[11px] font-bold uppercase tracking-wider mt-0.5 ${activeId === loc.id ? 'text-white/70' : 'text-white/50'}`}>{loc.tag}</p>
                                </div>
                                <ChevronRight
                                    size={16}
                                    className={`flex-shrink-0 transition-transform duration-300 ${activeId === loc.id ? 'text-white translate-x-0.5' : 'text-text-muted'}`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Content Panel — Right */}
                    <div className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="bg-white/5 backdrop-blur-sm rounded-[2rem] shadow-xl border border-white/10 overflow-hidden"
                            >
                                {/* Map embed */}
                                <div className="w-full h-[300px] md:h-[360px] relative">
                                    <iframe
                                        src={active.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full"
                                    ></iframe>
                                    {/* Branch tag */}
                                    <div className="absolute top-5 left-5 z-10">
                                        <span className="bg-primary text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg">{active.tag}</span>
                                    </div>
                                    {/* Live dot */}
                                    <div className="absolute top-5 right-5 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-md">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                                        </span>
                                        {/* <span className="text-[11px] font-black text-primary uppercase tracking-wider">Live Map</span> */}
                                    </div>
                                </div>

                                {/* Info Section */}
                                <div className="p-8 md:p-10">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-1">{active.branch}</h3>
                                            {/* <p className="text-sm text-secondary font-bold uppercase tracking-widest">Lead: {active.specialist}</p> */}
                                        </div>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-shrink-0 bg-[#2D2E32] text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-primary transition-all duration-300 shadow-lg hover:scale-105 group/btn w-fit"
                                        >
                                            <span className="text-sm font-black tracking-tight">Get Directions</span>
                                            <div className="w-7 h-7 bg-white text-primary rounded-full flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-500">
                                                <ChevronRight size={16} strokeWidth={3} />
                                            </div>
                                        </a>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-white/10">
                                        {/* Address Card */}
                                        <div className="group/card bg-white/10 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 border border-white/10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                                                    <MapPin size={18} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary">Address</span>
                                            </div>
                                            <p className="text-sm text-white/80 font-semibold leading-relaxed">{active.address}</p>
                                        </div>

                                        {/* Contact Card */}
                                        <div className="group/card bg-white/10 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 border border-white/10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                                                    <Phone size={18} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary">Contact</span>
                                            </div>
                                            <a href={`tel:${active.phone}`} className="block text-base text-white font-black tracking-tight hover:text-primary transition-colors duration-200">{active.phone}</a>
                                            <a href={`mailto:${active.email}`} className="block text-xs text-white/50 font-bold mt-1 hover:text-primary transition-colors duration-200">{active.email}</a>
                                        </div>

                                        {/* Hours Card */}
                                        <div className="group/card bg-white/10 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 border border-white/10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                                                    <Clock size={18} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary">Hours</span>
                                            </div>
                                            {active.hours.map((line, i) => (
                                                <p key={i} className={`text-sm font-semibold leading-snug ${i === 0 ? 'text-white/80' : 'text-white/50 text-xs mt-1'}`}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
