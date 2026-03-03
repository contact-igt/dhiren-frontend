import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';

export default function ReadyCTA() {
    return (
        <section className="py-18 bg-white">
            <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8 text-primary ">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">Ready to see the world clearly?</h2>
                    <p className="text-text-muted">Book your comprehensive eye examination today.</p>
                </div>
                <div className="flex gap-4 flex-wrap">
                    <a href="tel:+917715069185" className="btn-primary px-8 !py-4 text-lg !flex items-center gap-4 group">
                        Call Now
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-primary transition-all duration-300">
                            <Phone size={18} fill="currentColor" />
                        </div>
                    </a>
                    <Link href="/appointment" className="inline-flex items-center gap-3 bg-primary text-white font-black px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-lg">
                        Book Appointment
                        <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center">
                            <ChevronRight size={18} strokeWidth={3} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
