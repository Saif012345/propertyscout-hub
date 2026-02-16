import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="partners">
        <PartnersSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
