"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

export default function AppointmentForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center bg-white p-12 rounded-3xl shadow-xl border border-gray-100 max-w-md w-full"
                >
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                        <CheckCircle size={48} />
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Request Received!</h2>
                    <p className="text-text-muted mb-8 text-lg">
                        Our patient coordinator will call you shortly to confirm your preferred time slot.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="btn-primary w-full"
                    >
                        Schedule Another Appointment
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">
                    {/* Form */}
                    <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2 flex items-center gap-2">
                                        <User size={16} /> Full Name*
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2 flex items-center gap-2">
                                        <Phone size={16} /> Phone Number*
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-primary mb-2 flex items-center gap-2">
                                    <Mail size={16} /> Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2 flex items-center gap-2">
                                        <Calendar size={16} /> Preferred Date*
                                    </label>
                                    <input
                                        required
                                        type="date"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2 flex items-center gap-2">
                                        <Clock size={16} /> Preferred Time*
                                    </label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207L10%2012L15%207%22%20stroke%3D%22%234A5568%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px_20px] bg-[right_1rem_center] bg-no-repeat"
                                    >
                                        <option value="">Select Time Slot</option>
                                        <option value="morning">Morning (9 AM - 12 PM)</option>
                                        <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                                        <option value="evening">Evening (5 PM - 8 PM)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-primary mb-2 flex items-center gap-2">
                                    <FileText size={16} /> Service Required*
                                </label>
                                <select
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207L10%2012L15%207%22%20stroke%3D%22%234A5568%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px_20px] bg-[right_1rem_center] bg-no-repeat"
                                >
                                    <option value="">Select Service</option>
                                    <option value="cataract">Cataract Consultation</option>
                                    <option value="lasik">LASIK Screening</option>
                                    <option value="retina">Retina Checkup</option>
                                    <option value="glaucoma">Glaucoma Screening</option>
                                    <option value="pediatric">Pediatric Eye Exam</option>
                                    <option value="general">General Eye Checkup</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full text-lg py-4 shadow-lg shadow-primary/20"
                            >
                                Confirm Appointment
                            </button>
                        </form>
                    </div>

                    {/* Why Book */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-accent/40 p-8 rounded-3xl border border-accent">
                            <h3 className="text-xl font-bold text-primary mb-6">Why Book Online?</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={18} />
                                    <span className="text-sm text-text-muted font-medium">Priority queue at the hospital</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={18} />
                                    <span className="text-sm text-text-muted font-medium">SMS confirmation and reminders</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={18} />
                                    <span className="text-sm text-text-muted font-medium">Pre-consultation guidance call</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={18} />
                                    <span className="text-sm text-text-muted font-medium">Zero online booking charges</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="font-bold text-primary mb-4">Emergency Support</h3>
                            <p className="text-sm text-text-muted mb-6">If you are experiencing sudden vision loss or eye trauma, please call our emergency line immediately.</p>
                            <a href="tel:+911234567890" className="flex items-center gap-3 text-secondary font-bold text-lg">
                                <Phone size={24} /> +91 12345 67890
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
