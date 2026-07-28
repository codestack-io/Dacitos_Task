import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import AboutSection from "@/components/sections/about/AboutSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <AboutSection />
    </main>
  );
}