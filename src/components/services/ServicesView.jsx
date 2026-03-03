"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services = [
    {
        id: 'cataract',
        title: 'Cataract Treatment',
        description: 'Advanced, safe, and painless cataract removal surgery with premium intraocular lens (IOL) implants to help you regain crystal-clear vision.',
        longDescription: 'Our cataract department is equipped with latest phacoemulsification systems and premium foldable lenses. We offer micro-incision cataract surgery (MICS) for faster recovery and better visual outcomes.',
        features: ['Micro-incision Surgery', 'Premium IOL Implants', 'Painless Procedure', 'Quick Recovery'],
        image: '/assets/services/cataract.png',
    },
    {
        id: 'glaucoma',
        title: 'Glaucoma Management',
        description: 'Comprehensive screening and management for this progressive disease that damages the optic nerve and can lead to irreversible vision loss.',
        longDescription: 'Glaucoma is often asymptomatic in early stages. We provide advanced diagnostics including Perimetry, OCT, and Applanation Tonometry for early detection and specialized medical/surgical management.',
        features: ['Advanced OCT Imaging', 'Visual Field Testing', 'Medical Management', 'Surgical Filtering'],
        image: '/assets/services/glaucoma.png',
    },
    {
        id: 'lasik',
        title: 'LASIK & Refractive',
        description: 'Safe and effective laser vision correction surgery designed to reduce or eliminate the need for glasses and contact lenses.',
        longDescription: 'Say goodbye to glasses with our advanced refractive surgeries. We offer personalized evaluations to determine the best procedure for your eyes, from standard LASIK to advanced blade-free options.',
        features: ['Blade-free LASIK', 'Personalized Evaluation', 'High Precision', 'Life-changing Results'],
        image: '/assets/services/lasik.png',
    },
    {
        id: 'retina',
        title: 'Retina Care',
        description: 'Expert care for retinal detachment, diabetic retinopathy, and other conditions affecting the light-sensitive layer at the back of the eye.',
        longDescription: 'Our retina specialists handle complex cases of diabetic retinopathy, age-related macular degeneration (AMD), and retinal detachments using state-of-the-art diagnostic and surgical tools.',
        features: ['Diabetic Eye Care', 'Retinal Laser', 'Intravitreal Injections', 'Vitreoretinal Surgery'],
        image: '/assets/services/retina.png',
    },
    {
        id: 'pediatric',
        title: 'Pediatric Ophthalmology',
        description: 'Correction for eye misalignment (Squint) and eye care for children to prevent lazy eye and other developmental vision issues.',
        longDescription: 'Children deserve special care. We specialize in diagnosing and treating pediatric eye disorders, including squint (strabismus), lazy eye (amblyopia), and childhood cataracts in a child-friendly environment.',
        features: ['Squint Correction', 'Amblyopia Therapy', 'Child-friendly Clinic', 'Cataract Management'],
        image: '/assets/services/pediatric.png',
    },
    {
        id: 'cornea',
        title: 'Cornea Treatment',
        description: 'Specialized care for conditions affecting the cornea, including infections, dystrophies, and keratoconus management.',
        longDescription: 'The cornea is the eye\'s outermost layer. We provide expert diagnosis and treatment for corneal ulcers, keratitis, and specialized management for Keratoconus including C3R and contact lens fitting.',
        features: ['Keratoconus Management', 'C3R Treatment', 'Corneal Ulcer Care', 'Pterygium Surgery'],
        image: '/assets/services/cornea.png',
    }
];

export default function ServicesView() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-accent/50 py-16 md:py-24">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
                    >
                        Our Eye Care Services
                    </motion.h1>
                    <p className="text-lg text-text-muted max-w-3xl mx-auto">
                        Delivering world-class clinical excellence across all ophthalmic specialties with cutting-edge technology and compassionate care.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="flex flex-col gap-24">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Service Image */}
                                <motion.div
                                    className="lg:w-1/2 w-full"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60"></div>
                                    </div>
                                </motion.div>

                                {/* Service Content */}
                                <motion.div
                                    className="lg:w-1/2 w-full"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">{service.title}</h2>
                                    <p className="text-lg text-text-main font-semibold mb-4 leading-relaxed">{service.description}</p>
                                    <p className="text-text-muted mb-8 leading-relaxed">{service.longDescription}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-3">
                                                <CheckCircle2 size={20} className="text-secondary flex-shrink-0" />
                                                <span className="font-bold text-sm text-text-main">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="/appointment"
                                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        Book Consultation
                                        <ArrowUpRight size={18} />
                                    </a>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px] -z-0" />
                <div className="container-custom relative z-10 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Need Immediate Assistance?</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        Our specialists are available for emergency eye care and routine consultations. Book your spot today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="tel:+917715069185" className="bg-white text-primary font-black px-10 py-4 rounded-full text-lg shadow-xl hover:bg-gray-50 transition-all">
                            Call: +91 77150 69185
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
