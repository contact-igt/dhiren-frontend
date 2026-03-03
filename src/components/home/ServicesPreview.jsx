"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: 'Cataract Treatment',
        description: 'Advanced, safe, and painless cataract removal surgery with premium intraocular lens (IOL) implants to help you regain crystal-clear vision.',
        image: '/assets/services/cataract.png',
        href: '/services#cataract',
    },
    {
        title: 'Glaucoma Treatment',
        description: 'Comprehensive screening and management for this progressive disease that damages the optic nerve and can lead to irreversible vision loss.',
        image: '/assets/services/glaucoma.png',
        href: '/services#glaucoma',
    },
    {
        title: 'LASIK Treatment',
        description: 'Safe and effective laser vision correction surgery designed to reduce or eliminate the need for glasses and contact lenses.',
        image: '/assets/services/lasik.png',
        href: '/services#lasik',
    },
    {
        title: 'Retina Treatment',
        description: 'Expert care for retinal detachment, diabetic retinopathy, and other conditions affecting the light-sensitive layer at the back of the eye.',
        image: '/assets/services/retina.png',
        href: '/services#retina',
    },
    {
        title: 'Squint Treatment',
        description: 'Correction for eye misalignment (Strabismus) to prevent double vision, lazy eye, and improve social confidence.',
        image: '/assets/services/pediatric.png',
        href: '/services#squint',
    },
    {
        title: 'Oculoplasty Treatment',
        description: 'Specialized plastic and reconstructive surgery for conditions affecting the eyelids, tear ducts, and surrounding facial structures.',
        image: '/assets/services/cornea.png',
        href: '/services#oculoplasty',
    },
];

export default function ServicesPreview() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">

                {/* ── Section Header ── */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    {/* Badge — primary accent */}
                    <span className="inline-flex items-center gap-2 mb-3 text-sm font-bold tracking-widest uppercase text-primary justify-center">
                        <span className="w-4 h-[3px] bg-primary rounded-full inline-block" />
                        Our Services
                        <span className="w-4 h-[3px] bg-primary rounded-full inline-block" />
                    </span>
                    {/* Heading — primary pink */}
                    <h2 className="text-4xl md:text-[2.8rem] font-extrabold !text-primary leading-tight tracking-tight">
                        Comprehensive Eye Care &amp;
                        <span className="block !text-text-main">Optometry</span>
                    </h2>
                </div>

                {/* ── Services Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 gap-y-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                        >
                            <Link
                                href={service.href}
                                className="group flex flex-col rounded-3xl overflow-visible transition-all duration-300"
                            >
                                {/* ── Card Container ── */}
                                <div className="relative h-[300px] w-full">
                                    {/* Image & Gradient Wrapper — provides rounding and clip */}
                                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                        {/* Service Image */}
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* ── Gradient Overlay ── */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* ── Bottom Content Overlay — can overflow outside the image wrapper ── */}
                                    <div className="absolute -bottom-8 left-6 right-6 z-20">
                                        <div className="bg-white rounded-t-2xl p-7 relative translate-y-2 transition-transform duration-300">
                                            {/* Arrow badge — primary pink */}
                                            <div className="absolute -top-6 right-4 w-14 h-14 rounded-4xl bg-primary flex items-center justify-center shadow-lg z-10 group-hover:bg-secondary group-hover:rotate-12 transition-all duration-300">
                                                <ArrowUpRight size={24} className="text-white" />
                                            </div>

                                            {/* Service details */}
                                            <h3 className="text-lg font-bold !text-primary mb-4 pr-8">
                                                {service.title}
                                            </h3>
                                            <p className="text-[13.5px] text-text-muted line-clamp-2 leading-6 opacity-90">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* ── View All CTA — primary pink ── */}
                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                    >
                        View All Services
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
