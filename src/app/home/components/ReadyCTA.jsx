import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight } from 'lucide-react';

export default function ReadyCTA() {
    return (
        <section className="py-24 relative overflow-hidden group">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/home/home.png"
                    alt="Ready to see the world clearly"
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter leading-tight drop-shadow-lg">
                        Ready to see the world <span className="text-primary italic">clearly</span>?
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-lg drop-shadow-md">
                        Our specialized doctors are here for your vision care. Book your comprehensive eye examination today.
                    </p>
                </div>

                <div className="flex gap-4 flex-wrap">
                    <a href="tel:+917715069185" className="px-8 py-4 bg-white text-primary font-black rounded-full shadow-2xl transition-all duration-300 hover:scale-105 text-lg flex items-center gap-4 group/btn">
                        Call Now
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white transition-all duration-300 group-hover/btn:rotate-12">
                            <Phone size={18} fill="currentColor" />
                        </div>
                    </a>
                    <Link href="/appointment" className="inline-flex items-center gap-4 bg-primary text-white font-black px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 text-lg">
                        Book Appointment
                        <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center">
                            <ChevronRight size={20} strokeWidth={3} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
