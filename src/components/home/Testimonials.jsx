"use client";
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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
    },
    {
        name: 'Anitha Raj',
        location: 'Chennai',
        text: 'I had a very positive experience at Dhiren Eye Care. The staff is professional, and Dr. Maniar is very patient in answering all queries.',
        rating: 5
    },
    {
        name: 'Vikram Seth',
        location: 'Chennai',
        text: 'The diagnostic facilities are top-notch. I felt very comfortable throughout my consultation and would definitely recommend this hospital.',
        rating: 5
    },
    {
        name: 'Priya Mani',
        location: 'Chennai',
        text: 'Excellent pre and post-operative care. The results of my treatment exceeded expectations. Truly a center of excellence for eye care.',
        rating: 5
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsToShow(3);
            else if (window.innerWidth >= 768) setItemsToShow(2);
            else setItemsToShow(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - itemsToShow);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="section-padding bg-accent/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] -z-10" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block mb-3 text-sm font-bold tracking-widest uppercase text-secondary">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary tracking-tight">What Our Patients Say</h2>
                    <p className="text-lg text-text-muted font-medium">
                        Real stories from patients who entrusted their vision to Dhiren Eye Care Hospital.
                    </p>
                </div>

                <div className="relative group">
                    <div className="overflow-hidden px-4 -mx-4">
                        <motion.div
                            className="flex gap-8 xl:gap-10"
                            animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0"
                                    style={{ width: `calc((100% - ${(itemsToShow - 1) * 2}rem) / ${itemsToShow})` }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                                        className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col relative overflow-hidden group h-full"
                                    >
                                        <div className="text-secondary mb-8 relative z-10">
                                            <Quote size={40} fill="currentColor" className="drop-shadow-sm" />
                                        </div>

                                        <p className="text-base text-text-main/90 font-medium italic mb-10 flex-grow relative z-10 leading-relaxed">
                                            "{testimonial.text}"
                                        </p>

                                        <div className="relative z-10 border-t border-gray-100 pt-6">
                                            <div className="flex text-warning mb-3 gap-1 drop-shadow-sm">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <svg key={i} className="w-[18px] h-[18px] fill-[#FFB800]" viewBox="0 0 24 24">
                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <h4 className="font-bold text-primary text-lg tracking-tight">{testimonial.name}</h4>
                                            <p className="text-xs text-text-muted font-bold uppercase tracking-wider mt-1">{testimonial.location}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 z-20 group/btn md:flex hidden"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} className="group-hover/btn:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 z-20 group/btn md:flex hidden"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {[...Array(maxIndex + 1)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-10 bg-primary' : 'w-2.5 bg-primary/20 hover:bg-primary/40'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
