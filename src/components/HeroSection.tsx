import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Luxury real estate in Abuja" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/30 to-navy-dark/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Building2 className="w-5 h-5 text-accent" />
            <span className="text-accent font-sans text-sm font-semibold tracking-widest uppercase">
              UNOOMA Properties — Abuja FCT
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-on-dark leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Your Trusted Real Estate{" "}
            <span className="text-gradient-gold">Partner</span>{" "}
            in Abuja
          </h1>

          <p className="text-lg md:text-xl text-on-dark/70 font-sans leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Unooma Properties Ltd delivers professional property management, real estate
            consulting, buying & selling, and property development — reliable, transparent
            solutions for individuals, families, businesses and investors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Link to="/properties">
              <Button variant="gold" size="lg" className="group">
                <Search className="mr-2 w-4 h-4" />
                Browse Properties
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline-hero" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 border-t border-on-dark/10 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            {[
              { value: "500+", label: "Properties Managed" },
              { value: "1,200+", label: "Satisfied Clients" },
              { value: "15+", label: "Years in Abuja" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-accent">{stat.value}</div>
                <div className="text-xs sm:text-sm text-on-dark/60 font-sans mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
