import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutUsPage from "@/components/about us/AboutUs";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <AboutUsPage />
      </main>
      <Footer />
    </>
  );
}