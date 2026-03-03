"use client";
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
    const whatsappNumber = "+911234567890";
    const message = "Hello, I would like to book an appointment for an eye checkup.";

    const handleClick = () => {
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group animate-bounce hover:animate-none"
            title="Chat with us on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </button>
    );
}
