"use client";
import SEO from "@/components/layout/SEO";
import { motion } from 'framer-motion';
import { Calendar, Phone, Award, GraduationCap, MapPin } from 'lucide-react';
import Link from 'next/link';

const doctors = [
    {
        name: "Dr. Dhiren Sharma",
        title: "Chief Medical Director",
        qualification: "MBBS, MS, FRCS (Edinburgh)",
        specialization: "Cataract & Refractive (LASIK) Surgeon",
        experience: "25+ Years",
        image: null,
        bio: "Pioneer in micro-incision cataract surgery and advanced LASIK procedures in South India."
    },
    {
        name: "Dr. Ananya Iyer",
        title: "Senior Consultant",
        qualification: "MBBS, MS, DNB",
        specialization: "Vitreoretinal Surgeon",
        experience: "15+ Years",
        image: null,
        bio: "Expert in complex retinal detachments and diabetic retinopathy management."
    },
    {
        name: "Dr. Karthik Raja",
        title: "Consultant",
        qualification: "MBBS, DO, MS",
        specialization: "Glaucoma Specialist",
        experience: "12+ Years",
        image: null,
        bio: "Specializes in early detection and advanced surgical management of refractory glaucoma."
    },
    {
        name: "Dr. Meera Vasudevan",
        title: "Junior Consultant",
        qualification: "MBBS, MS",
        specialization: "Pediatric Ophthalmology & Strabismus",
        experience: "8+ Years",
        image: null,
        bio: "Dedicated to providing gentle and effective eye care for children and correcting squint issues."
    }
];

export default function DoctorsPage() {
    return (
        <>
            <SEO title="Our Doctors" description="Meet our team of world-class ophthalmologists and eye specialists at Dhiren Eye Care Hospital, Chennai." />

            {/* Header */}
            <section className="bg-accent/50 py-16">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Expert Doctors</h1>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Our team consists of fellowship-trained specialists dedicated to providing the highest standard of clinical excellence.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {doctors.map((doctor, index) => (
                            <motion.div
                                key={doctor.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col"
                            >
                                {/* Photo Placeholder */}
                                <div className="aspect-[3/4] bg-gray-50 flex items-center justify-center relative group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary/20">
                                        <Award size={48} />
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-center">
                                        <span className="bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">View Full Profile</span>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-primary mb-1">{doctor.name}</h3>
                                    <p className="text-secondary text-sm font-bold mb-4">{doctor.title}</p>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex gap-2 text-sm text-text-muted">
                                            <GraduationCap size={16} className="text-secondary flex-shrink-0" />
                                            <span>{doctor.qualification}</span>
                                        </div>
                                        <div className="flex gap-2 text-sm text-text-muted">
                                            <Award size={16} className="text-secondary flex-shrink-0" />
                                            <span>{doctor.experience} Experience</span>
                                        </div>
                                        <div className="flex gap-2 text-sm text-primary font-semibold">
                                            <span className="bg-primary/5 px-2 py-0.5 rounded">{doctor.specialization}</span>
                                        </div>
                                    </div>

                                    <Link href="/appointment" className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-2.5">
                                        <Calendar size={16} />
                                        Book Consultation
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reassurance Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold text-primary mb-4">Choosing the right specialist is the first step to better vision.</h2>
                            <p className="text-text-muted">
                                Our doctors participate in international ophthalmology conferences and clinical research to bring you the latest treatments and techniques.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-end">
                            <a href="tel:+911234567890" className="btn-secondary flex items-center gap-2">
                                <Phone size={20} />
                                Speak with a Consultant
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
