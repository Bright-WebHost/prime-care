"use client";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/Navbar";
import { useSmoothText } from "@/hooks/useSmoothText";
export default function HomePage() {
   useSmoothText();
  return (
    <main className="bg-white">
      <Navbar/>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
