import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Column 1: About */}
                <div>
                    <Link href="/" className="mb-6 block">
                        <div className="relative w-48 h-12">
                            <Image
                                src="/assets/dhiren logo.png"
                                alt="Dhiren Eye Care Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>
                    <p className="text-text-muted mb-6">
                        Dedicated to providing world-class eye care with precision and compassion. Your vision is our mission.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors border border-gray-100"><Facebook size={20} /></a>
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors border border-gray-100"><Twitter size={20} /></a>
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors border border-gray-100"><Instagram size={20} /></a>
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors border border-gray-100"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="font-bold text-lg mb-6 text-text-main">Quick Links</h4>
                    <ul className="space-y-4 text-text-muted">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/doctors" className="hover:text-primary transition-colors">Our Doctors</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition-colors">Specialties</Link></li>
                        <li><Link href="/appointment" className="hover:text-primary transition-colors">Book Appointment</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h4 className="font-bold text-lg mb-6 text-text-main">Our Services</h4>
                    <ul className="space-y-4 text-text-muted">
                        <li><Link href="/services#cataract" className="hover:text-primary transition-colors">Cataract Surgery</Link></li>
                        <li><Link href="/services#lasik" className="hover:text-primary transition-colors">LASIK Eye Surgery</Link></li>
                        <li><Link href="/services#retina" className="hover:text-primary transition-colors">Retina Care</Link></li>
                        <li><Link href="/services#glaucoma" className="hover:text-primary transition-colors">Glaucoma Treatment</Link></li>
                        <li><Link href="/services#pediatric" className="hover:text-primary transition-colors">Pediatric Ophthalmology</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 className="font-bold text-lg mb-6 text-text-main">Contact Us</h4>
                    <ul className="space-y-4 text-text-muted">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                            <span>123, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} className="text-secondary flex-shrink-0" />
                            <a href="tel:+911234567890" className="hover:text-primary">+91 12345 67890</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="text-secondary flex-shrink-0" />
                            <a href="mailto:info@dhireneyecare.com" className="hover:text-primary">info@dhireneyecare.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
                <p>© {currentYear} Dhiren Eye Care Hospital. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
