"use client";
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Suresh Kumar',
        location: 'Chennai',
        text: 'Dr. Vishal Maniar is an excellent surgeon. My cataract surgery was seamless and the recovery was very fast. Highly recommend Dhiren Eye Care.',
        rating: 5
    },
    {
        name: 'Meenakshi Iyer',
        location: 'Chennai',
        text: 'The hospitality and care at Dhiren Eye Care are unmatched. The diagnosis was precise, and the treatment plan was clearly explained.',
        rating: 5
    },
    {
        name: 'Rahul Sharma',
        location: 'Chennai',
        text: 'Best place for eye care in Chennai. The latest technology and the expert guidance of Dr. Maniar made my LASIK experience wonderful.',
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-accent/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block mb-3 text-sm font-bold tracking-widest uppercase text-secondary">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary tracking-tight">What Our Patients Say</h2>
                    <p className="text-lg text-text-muted font-medium">
                        Real stories from patients who entrusted their vision to Dhiren Eye Care Hospital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                            className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col relative overflow-hidden group"
                        >
                            {/* Giant faded quote for depth */}
                            <div className="absolute -top-4 -right-4 text-accent/50 transform rotate-12 group-hover:scale-110 transition-transform duration-500 z-0">
                                <Quote size={160} fill="currentColor" />
                            </div>

                            <div className="text-secondary mb-8 relative z-10">
                                <Quote size={40} fill="currentColor" className="drop-shadow-sm" />
                            </div>

                            <p className="text-base text-text-main/90 font-medium italic mb-10 flex-grow relative z-10 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            <div className="relative z-10 border-t border-gray-100 pt-6">
                                <div className="flex text-warning mb-3 gap-1 drop-shadow-sm">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <h4 className="font-bold text-primary text-lg tracking-tight">{testimonial.name}</h4>
                                <p className="text-xs text-text-muted font-bold uppercase tracking-wider mt-1">{testimonial.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
