"use client";
import { motion } from 'framer-motion';
import { UserCheck, Zap, HeartPulse, ShieldCheck } from 'lucide-react';

const reasons = [
    {
        title: 'Expert Eye Surgeon',
        description: 'Specialist in Cataract, Lasik, Retina, and advanced vision correction surgeries.',
        icon: <UserCheck size={28} />
    },
    {
        title: 'Latest Technology',
        description: 'Equipped with state-of-the-art diagnostic tools like OCT, Perimetry, and YAG Laser.',
        icon: <Zap size={28} />
    },
    {
        title: 'Comprehensive Care',
        description: 'From pediatric eye care to senior citizen vision management – complete eye solutions under one roof.',
        icon: <HeartPulse size={28} />
    },
    {
        title: 'Personalized Approach',
        description: 'Every patient receives customized treatment plans ensuring long-term healthy vision.',
        icon: <ShieldCheck size={28} />
    }
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
                    <div className="lg:w-1/2">
                        <span className="inline-block mb-3 text-sm font-bold tracking-widest uppercase text-secondary">Why Us</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary tracking-tight">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Dhiren Eye Care</span>
                        </h2>
                        <p className="text-text-muted mb-12 text-lg font-medium leading-relaxed">
                            Dedicated to delivering advanced, compassionate, and personalized eye care with a focus on restoring and protecting vision for patients of all ages.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={reason.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="flex gap-5 group"
                                >
                                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-2 text-xl group-hover:text-secondary transition-colors">{reason.title}</h4>
                                        <p className="text-sm text-text-muted leading-relaxed font-medium">{reason.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative w-full lg:max-w-lg mx-auto">
                        {/* Soft Glow */}
                        <div className="absolute inset-0 bg-secondary/20 blur-[80px] rounded-full transform scale-90 -z-10" />

                        <motion.div
                            className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/90"
                            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        >
                            <div className="aspect-[4/5] bg-gradient-to-br from-secondary/10 via-primary/5 to-accent flex flex-col items-center justify-center p-12 text-center backdrop-blur-xl relative">
                                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_20%,rgba(255,255,255,0)_40%)] bg-[length:200%_100%] animate-shimmer" />

                                <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-primary mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform">
                                    <HeartPulse size={48} className="animate-pulse" />
                                </div>
                                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6">Trusted Care</h3>
                                <p className="text-text-main/80 font-medium mb-10 leading-relaxed text-lg">
                                    With over 17+ years of expertise and thousands of successful treatments, we are committed to delivering world-class eye care.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                                    <div className="px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-lg text-sm font-bold text-primary border border-white/50">2500+ Happy Patients</div>
                                    <div className="px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-lg text-sm font-bold text-secondary border border-white/50">100+ Awards</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decoration */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}
