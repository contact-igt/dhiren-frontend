"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, Menu, X, Phone } from 'lucide-react';

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
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-48 h-12 md:w-64 md:h-16">
                        <Image
                            src="/assets/dhiren logo.png"
                            alt="Dhiren Eye Care Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-semibold hover:text-secondary transition-colors ${isScrolled ? 'text-text-main' : 'text-text-main hover:text-primary'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/appointment" className="btn-primary flex items-center gap-2 text-sm">
                        <Calendar size={18} />
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100 flex flex-col p-6 gap-4 animate-fade-in">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-semibold text-text-main"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/appointment"
                        className="btn-primary w-full"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Book Appointment
                    </Link>
                    <a href="tel:+911234567890" className="flex items-center justify-center gap-2 text-primary font-bold">
                        <Phone size={20} />
                        Call Now: +91 12345 67890
                    </a>
                </div>
            )}
        </nav>
    );
}
