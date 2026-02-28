"use client";
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, GraduationCap, Microscope } from 'lucide-react';

export default function FounderSection() {
    return (
        <section className="section-padding bg-accent/30 overflow-hidden relative">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
                    <div className="lg:w-2/5 relative max-w-md mx-auto lg:mx-0 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -30, rotate: -2 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative z-10"
                        >
                            <div className="aspect-[4/5] bg-gradient-to-tr from-accent via-white to-primary/5 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                                {/* Founder Image Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10" />
                                <div className="h-full w-full flex items-center justify-center text-primary/10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-white">
                                    <Users size={140} />
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-secondary to-primary text-white p-6 md:p-8 rounded-[2rem] shadow-2xl border-4 border-white/20 z-20"
                            >
                                <div className="text-4xl md:text-5xl font-extrabold mb-1 drop-shadow-md">17+</div>
                                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/90">Years of<br />Expertise</div>
                            </motion.div>
                        </motion.div>

                        {/* Decoration */}
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary/15 rounded-full blur-3xl -z-10" />
                    </div>

                    <div className="lg:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-5 py-2 mb-6 text-xs sm:text-sm font-bold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 rounded-full">
                                Founder & Chief Surgeon
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dr. Vishal Maniar</span>
                            </h2>
                            <p className="text-xl font-bold text-text-main mb-8 tracking-wide">MBBS, DOMS, DNB (Ophthalmology), FGO</p>

                            <div className="space-y-6 text-text-muted mb-12 text-lg font-medium leading-relaxed">
                                <p>
                                    Dr. Vishal Maniar is a highly distinguished ophthalmic surgeon with a remarkable career spanning over 17 years. His expertise covers Cataract Surgery, LASIK, Glaucoma, Retina, and Paediatric Eye Care.
                                </p>
                                <p>
                                    With a profound commitment to precision, Dr. Maniar has performed more than <strong className="text-primary font-bold">50,000 successful cataract surgeries</strong> and <strong className="text-secondary font-bold">10,000 refractive procedures</strong>.
                                </p>
                                <p>
                                    In 2020, he founded <strong className="text-text-main bg-accent px-2 py-1 rounded">Dhiren Eye Care</strong> to provide advanced, compassionate, and accessible eye care, offering a modern environment where quality and innovation go hand in hand.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">Expertise</h4>
                                        <p className="text-sm text-text-muted font-medium">Consultant Ophthalmic Surgeon</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                                        <Microscope size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-2">Specialization</h4>
                                        <p className="text-sm text-text-muted font-medium">Cataract, LASIK & Glaucoma</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
