import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FounderSection from "@/components/home/FounderSection";
import Testimonials from "@/components/home/Testimonials";
import MapSection from "@/components/home/MapSection";
import { Phone, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <FounderSection />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />

      {/* Emergency Section */}
      <section className="py-24 bg-accent/50 overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary/80 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-white shadow-2xl relative overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
            {/* Background design */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-[80px] opacity-70" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="md:w-2/3 relative z-10">
              {/* <span className="inline-block px-5 py-2 mb-6 text-xs sm:text-sm font-bold tracking-widest uppercase bg-danger text-white rounded-full animate-pulse shadow-lg shadow-danger/30">
                Emergency Eye Care
              </span> */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight !text-white">Need an Eye Specialist?</h2>
              <p className="text-xl opacity-90 max-w-xl font-medium leading-relaxed">
                Dhiren Eye Care provides quick and effective treatment for urgent eye problems, ensuring you receive the right care without delay.
              </p>
            </div>

            <div className="md:w-1/3 flex flex-col items-center md:items-end gap-6 relative z-10">
              <p className="text-sm font-bold uppercase tracking-widest opacity-80 text-center md:text-right">For Emergency Appointments</p>
              <a href="tel:+917715069185" className="flex items-center gap-5 text-3xl md:text-3xl font-extrabold hover:scale-105 transition-all duration-300 drop-shadow-lg group">
                <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <Phone fill="currentColor" size={28} />
                </div>
                +91 77150 69185
              </a>
            </div>
          </div>
        </div>
      </section>

      <MapSection />

      <section className="py-16 bg-white">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8 text-primary border-t border-gray-100 pt-16">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Ready to see the world clearly?</h2>
            <p className="text-text-muted">Book your comprehensive eye examination today.</p>
          </div>
          <div className="flex gap-4">
            <a href="tel:+917715069185" className="btn-primary px-8 !py-4 text-lg !flex items-center gap-4 group">
              Call Now
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-primary transition-all duration-300">
                <Phone size={18} fill="currentColor" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
