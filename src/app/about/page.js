import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award, Users, Building2 } from 'lucide-react';

export const metadata = {
    title: "About Us | Dhiren Eye Care Hospital",
    description: "Learn about Dhiren Eye Care’s mission, vision, and the expert team behind our world-class eye care services in Chennai.",
};

export default function AboutPage() {
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
                        About Dhiren Eye Care
                    </motion.h1>
                    <p className="text-lg text-text-muted max-w-3xl mx-auto">
                        A tradition of excellence in ophthalmology, serving the people of Chennai with advanced technology and heartfelt compassion for over two decades.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section-padding bg-white">
                <div className="container-custom flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 text-primary">Our Legacy of Vision</h2>
                        <p className="text-text-muted mb-6">
                            Founded in 2004 by Dr. Dhiren Sharma, our hospital began with a simple mission: to make high-quality eye care accessible to everyone. What started as a small clinic has grown into a premier tertiary eye care center equipped with the world's most advanced diagnostic and surgical facilities.
                        </p>
                        <p className="text-text-muted mb-8">
                            We believe that every patient deserves personalized attention. Our team of expert surgeons and compassionate staff work together to ensure that you receive the best possible treatment tailored to your specific needs.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-4 border-secondary pl-4">
                                <div className="text-3xl font-bold text-primary">20+</div>
                                <div className="text-sm text-text-muted">Years of Excellence</div>
                            </div>
                            <div className="border-l-4 border-secondary pl-4">
                                <div className="text-3xl font-bold text-primary">500k+</div>
                                <div className="text-sm text-text-muted">Consultations</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl overflow-hidden relative group">
                            {/* Design placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                            <Building2 size={80} className="text-primary/20" />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl">
                                <p className="text-primary font-bold text-sm">Main Campus - Teynampet, Chennai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                            <p className="text-text-muted leading-relaxed">
                                To be the most trusted and preferred center for eye care excellence, recognized globally for clinical outcomes, patient safety, and compassionate service.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                            <p className="text-text-muted leading-relaxed">
                                To provide world-class, affordable eye care services through high clinical standards, ethical practices, and continuous innovation in ophthalmology.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder Profile */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="bg-primary rounded-3xl overflow-hidden flex flex-col lg:flex-row text-white">
                        <div className="lg:w-2/5 bg-accent/20 flex items-center justify-center p-12">
                            {/* Founder image placeholder */}
                            <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-xl border-8 border-primary/20">
                                <Users size={80} className="text-primary/20" />
                            </div>
                        </div>
                        <div className="lg:w-3/5 p-12 lg:p-16">
                            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider uppercase bg-white/20 rounded-full">Chief Medical Director</span>
                            <h2 className="text-4xl font-bold mb-4">Dr. Dhiren Sharma</h2>
                            <p className="text-white/80 mb-6 text-lg italic">
                                "Eyes are the windows to the soul, and our mission is to keep those windows clear and bright for everyone in our community."
                            </p>
                            <p className="mb-8 leading-relaxed opacity-90">
                                Dr. Dhiren Sharma is a world-renowned Cataract and LASIK surgeon with over 25 years of experience. He has been awarded the 'Best Ophthalmologist in South India' thrice and has pioneered several micro-incision surgical techniques.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <div className="flex items-center gap-3">
                                    <Award className="text-secondary" />
                                    <span className="font-bold">MBBS, MS, FRCS</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-secondary" />
                                    <span className="font-bold">NABH Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure */}
            <section className="section-padding bg-gray-50 text-center">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">World-Class Infrastructure</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6">
                            <div className="text-primary font-bold text-4xl mb-4">5</div>
                            <p className="font-bold uppercase tracking-widest text-xs text-text-muted mb-2">Modular OTs</p>
                            <p className="text-sm text-text-muted">Zero-infection surgical environments</p>
                        </div>
                        <div className="p-6">
                            <div className="text-primary font-bold text-4xl mb-4">12</div>
                            <p className="font-bold uppercase tracking-widest text-xs text-text-muted mb-2">Consultation Rooms</p>
                            <p className="text-sm text-text-muted">Private and comfortable patient cubicles</p>
                        </div>
                        <div className="p-6">
                            <div className="text-primary font-bold text-4xl mb-4">100%</div>
                            <p className="font-bold uppercase tracking-widest text-xs text-text-muted mb-2">Digitized</p>
                            <p className="text-sm text-text-muted">Advanced Electronic Medical Records</p>
                        </div>
                        <div className="p-6">
                            <div className="text-primary font-bold text-4xl mb-4">24/7</div>
                            <p className="font-bold uppercase tracking-widest text-xs text-text-muted mb-2">Emergency</p>
                            <p className="text-sm text-text-muted">Round-the-clock eye trauma care</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
