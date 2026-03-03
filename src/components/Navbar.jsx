"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, Menu, X, Phone, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Doctors', href: '/doctors' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100 py-0'}`}>
            <div className="container-custom flex justify-between items-center h-[85px]">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <div className="relative w-40 h-18 md:w-52 md:h-19">
                        <Image
                            src="/assets/dhiren logo.png"
                            alt="Dhiren Eye Care Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav Links - Centered */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-[15px] font-semibold text-text-main hover:text-primary transition-colors group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-primary rounded-full transition-all duration-300 group-hover:w-[60%]" />
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="tel:+917715069185"
                        className="flex items-center gap-2 text-[14px] font-semibold text-text-main hover:text-primary transition-colors"
                    >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Phone size={15} className="text-primary" />
                        </div>
                        <span className="hidden lg:block">+91 77150 69185</span>
                    </a>
                    <Link
                        href="/appointment"
                        className="flex items-center justify-center gap-2 bg-primary text-white text-[14px] font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
                    >
                        <Calendar size={16} className='mb-0.5' />
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100 flex flex-col p-6 gap-2 animate-fade-in">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[16px] font-semibold text-text-main hover:text-primary py-2.5 border-b border-gray-50 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-3">
                        <Link
                            href="/appointment"
                            className="btn-primary !py-3 w-full text-center !flex items-center justify-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Calendar size={18} className='mb-0.5' />
                            Book Appointment
                        </Link>
                        <a
                            href="tel:+917715069185"
                            className="!py-3 flex items-center justify-center gap-2 text-primary font-bold py-2.5 rounded-full border-2 border-primary/20 bg-primary/5"
                        >
                            <Phone size={18} />
                            Call Now: +91 77150 69185
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
