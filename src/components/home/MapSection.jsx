"use client";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function MapSection() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-bold mb-6 text-primary">Visit Our Hospital</h2>
                        <p className="text-text-muted mb-8">
                            We are located in the heart of Chennai, easily accessible by public and private transport.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Address</h4>
                                    <p className="text-text-muted text-sm">123, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Phone</h4>
                                    <p className="text-text-muted text-sm">+91 12345 67890</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Email</h4>
                                    <p className="text-text-muted text-sm">info@dhireneyecare.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Opening Hours</h4>
                                    <p className="text-text-muted text-sm">Mon - Sat: 9:00 AM - 8:00 PM<br />Sun: 10:00 AM - 1:00 PM (Emergency only)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="lg:w-2/3 h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6872545801265!2d80.245452314822!3d13.045084990807886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526645ae499a8b%3A0x6a0c0e251147a599!2sAnna%20Salai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
