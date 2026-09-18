import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";
import CarrierLogoOverride from "@/components/CarrierLogoOverride";

export default function ForestersPage() {
  return (
    <>
      <CarrierLogoOverride 
        logoSrc="/company/foresters.png" 
        carrierName="Foresters" 
        theme="purple"
        hideColorSwitcher={true}
      />
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <AboutSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
