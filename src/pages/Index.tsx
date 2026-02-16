import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="categories">
        <CategoriesSection />
      </div>
      <FeaturedProperties />
      <div id="features">
        <FeaturesSection />
      </div>
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
