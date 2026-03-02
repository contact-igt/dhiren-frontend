"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: 'Cataract Treatment',
        description: 'Advanced sutureless cataract surgery with premium IOL options for crystal clear vision.',
        image: '/assets/services/cataract.png',
        href: '/services#cataract',
    },
    {
        title: 'LASIK Treatment',
        description: 'Get rid of glasses forever with our high-precision laser vision correction technology.',
        image: '/assets/services/lasik.png',
        href: '/services#lasik',
    },
    {
        title: 'Pediatric Eye Care',
        description: 'Myopia control, lazy eye treatment, and strabismus correction for children.',
        image: '/assets/services/pediatric.png',
        href: '/services#pediatric',
    },
    {
        title: 'Retina Treatment',
        description: 'Expert care for diabetic retinopathy, macular degeneration, and retinal detachment.',
        image: '/assets/services/retina.png',
        href: '/services#retina',
    },
    {
        title: 'Glaucoma Care',
        description: 'Screening, monitoring eye pressure, laser therapy, and surgery to protect your vision.',
        image: '/assets/services/glaucoma.png',
        href: '/services#glaucoma',
    },
    {
        title: 'Cornea Treatment',
        description: 'Specialized diagnostic and surgical solutions for various corneal conditions and disorders.',
        image: '/assets/services/cornea.png',
        href: '/services#cornea',
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20">
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
                                <div className="relative h-[270px] w-full">
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
                                        <div className="bg-white rounded-t-2xl p-6  relative translate-y-2 transition-transform duration-300">
                                            {/* Arrow badge — primary pink */}
                                            <div className="absolute -top-6 right-5 w-12 h-12 rounded-4xl bg-primary flex items-center justify-center shadow-lg z-10 group-hover:bg-secondary group-hover:rotate-12 transition-all duration-300">
                                                <ArrowUpRight size={22} className="text-white" />
                                            </div>

                                            {/* Service details */}
                                            <h3 className="text-lg font-bold !text-primary mt-0.5 mb-4 pr-8">
                                                {service.title}
                                            </h3>
                                            <p className="text-[13.3px] text-text-muted line-clamp-2 leading-6 opacity-90">
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
