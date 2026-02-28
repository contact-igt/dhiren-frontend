"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Zap, Activity, ShieldCheck, Baby } from 'lucide-react';

const services = [
    {
        title: 'Cataract Treatment',
        description: 'Advanced sutureless cataract surgery with premium IOL options for crystal clear vision.',
        icon: <Eye size={32} />,
        href: '/services#cataract',
        color: 'bg-primary/10 text-primary'
    },
    {
        title: 'Lasik Treatment',
        description: 'Get rid of glasses forever with our high-precision laser vision correction technology.',
        icon: <Zap size={32} />,
        href: '/services#lasik',
        color: 'bg-secondary/10 text-secondary'
    },
    {
        title: 'Retina Treatment',
        description: 'Expert care for diabetic retinopathy, macular degeneration, and retinal detachment.',
        icon: <Activity size={32} />,
        href: '/services#retina',
        color: 'bg-success/10 text-success'
    },
    {
        title: 'Glaucoma Treatment',
        description: 'Early detection and effective management to protect your optic nerve and prevent vision loss.',
        icon: <ShieldCheck size={32} />,
        href: '/services#glaucoma',
        color: 'bg-danger/10 text-danger'
    },
    {
        title: 'Pediatric Eye Care',
        description: 'Specialized eye care for children to ensure healthy visual development from a young age.',
        icon: <Baby size={32} />,
        href: '/services#pediatric',
        color: 'bg-warning/10 text-warning'
    },
    {
        title: 'Cornea Treatment',
        description: 'Specialized diagnostic and surgical solutions for various corneal conditions.',
        icon: <Activity size={32} />,
        href: '/services#cornea',
        color: 'bg-secondary/10 text-secondary'
    }
];

export default function ServicesPreview() {
    return (
        <section className="section-padding relative overflow-hidden bg-accent/30">
            {/* Decorative elements */}
            <div className="absolute top-40 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-block mb-3 text-sm font-bold tracking-widest uppercase text-secondary">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary tracking-tight">Advanced Care & Services</h2>
                    <p className="text-lg text-text-muted font-medium">
                        A Global Leader in Eye Care. We provide advanced medical and surgical solutions utilizing state-of-the-art diagnostic and therapeutic modalities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-secondary/30 group flex flex-col"
                        >
                            <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{service.title}</h3>
                            <p className="text-base text-text-muted mb-8 flex-grow leading-relaxed">
                                {service.description}
                            </p>
                            <Link href={service.href} className="mt-auto inline-flex items-center text-primary font-bold gap-2 group-hover:text-secondary group-hover:gap-3 transition-all">
                                Learn More <span className="p-1 rounded-full bg-accent group-hover:bg-secondary/10 transition-colors">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
