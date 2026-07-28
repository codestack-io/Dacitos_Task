import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import AboutSection from "@/components/sections/about/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SiteBackground from "@/components/common/SiteBackground";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <>
      <SiteBackground />

      <main className="relative z-10">
        <Navbar />

        <Hero />

        <TrustedCompanies />

        <AboutSection />

        <ServicesSection />
        <CallToAction />
        <Footer/>
      </main>
    </>
  );
}