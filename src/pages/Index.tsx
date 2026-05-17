import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { brandSchemas } from "@/lib/seoSchemas";
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
      <Seo
        title="UNOOMA Properties Ltd | Real Estate, Management & Consultancy in Abuja"
        description="UNOOMA Properties Ltd — your trusted real estate partner in Abuja. Property management, consultancy, buying, selling and development across the FCT, Nigeria."
        path="/"
        jsonLd={brandSchemas}
      />
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
