import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Luxury real estate in Abuja" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-navy opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-navy-dark/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Building2 className="w-5 h-5 text-accent" />
            <span className="text-accent font-sans text-sm font-semibold tracking-widest uppercase">
              UNOOMA Properties — Abuja FCT
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Property Made{" "}
            <span className="text-gradient-gold">Effortless</span>{" "}
            in Abuja
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 font-sans leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            UNOOMA Properties Ltd offers expert property management, consultancy, and 
            development services across the FCT. Find, lease, or develop with confidence.
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

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            {[
              { value: "500+", label: "Properties Managed" },
              { value: "1,200+", label: "Satisfied Clients" },
              { value: "15+", label: "Years in Abuja" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-primary-foreground/50 font-sans mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
