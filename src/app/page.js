import Hero from "@/app/home/components/Hero";
import ServicesPreview from "@/app/home/components/ServicesPreview";
import WhyChooseUs from "@/app/home/components/WhyChooseUs";
import FounderSection from "@/app/home/components/FounderSection";
import Testimonials from "@/app/home/components/Testimonials";
import MapSection from "@/app/home/components/MapSection";
import BlogSection from "@/app/home/components/BlogSection";
import CTABanner from "@/app/home/components/CTABanner";
import GallerySection from "@/app/home/components/GallerySection";
import ReadyCTA from "@/app/home/components/ReadyCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FounderSection />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />

      <CTABanner />

      <MapSection />

      <GallerySection />

      <BlogSection />

      <ReadyCTA />
    </>
  );
}
