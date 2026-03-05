import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FounderSection from "@/components/home/FounderSection";
import Testimonials from "@/components/home/Testimonials";
import MapSection from "@/components/home/MapSection";
import BlogSection from "@/components/home/BlogSection";
import CTABanner from "@/components/home/CTABanner";
import GallerySection from "@/components/home/GallerySection";
import ReadyCTA from "@/components/home/ReadyCTA";

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
