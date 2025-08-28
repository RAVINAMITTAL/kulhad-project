import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShopSection from "@/components/ShopSection";
import BulkOrderSection from "@/components/BulkOrderSection";
import WastePortalSection from "@/components/WastePortalSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ShopSection />
        <BulkOrderSection />
        <WastePortalSection />
        <AboutSection />
        <ImpactSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
