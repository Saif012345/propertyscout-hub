import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Building2, Target, Eye, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  { icon: Target, title: "Our Mission", body: "To deliver trusted, transparent and innovative real estate solutions that empower property owners, investors and tenants across Abuja and beyond." },
  { icon: Eye, title: "Our Vision", body: "To be the most respected property company in the FCT — known for integrity, professionalism and lasting client relationships." },
  { icon: Heart, title: "Our Values", body: "Integrity, excellence, accountability and a deep commitment to community-led development across Nigeria." },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-28 pb-20 bg-gradient-navy text-on-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="Abuja skyline" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-accent font-sans text-sm font-semibold tracking-widest uppercase">About Us</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6 max-w-3xl">
            Building Abuja's Future, <span className="text-gradient-gold">One Property at a Time</span>
          </h1>
          <p className="text-on-dark/70 font-sans text-lg max-w-2xl">
            UNOOMA Properties Ltd is a full-service real estate company headquartered in 
            Gwarinpa Estate, Abuja FCT, providing property management, consultancy and 
            development services to discerning clients across Nigeria.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background" ref={ref}>
        <div className="container mx-auto px-6">
          <div className={`grid lg:grid-cols-2 gap-16 items-center mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <span className="text-accent font-sans text-sm font-semibold tracking-widest uppercase">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                A trusted name in <span className="text-gradient-gold">Abuja real estate</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p>Founded with a clear purpose — to bring professionalism, transparency and quality to the Nigerian real estate market — UNOOMA Properties Ltd has grown into a trusted partner for property owners, tenants and investors throughout the FCT.</p>
                <p>From managing residential portfolios in Gwarinpa, Maitama and Asokoro, to advising clients on commercial acquisitions and overseeing development projects, our team combines local expertise with global standards of service.</p>
                <p>We believe real estate is more than transactions — it's about long-term relationships, secure investments and the homes and spaces where lives unfold.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-2xl blur-2xl" />
              <img src={heroBg} alt="UNOOMA Properties team and projects in Abuja" className="relative rounded-2xl shadow-2xl w-full h-[480px] object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`glass-card rounded-xl p-8 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-sans text-sm font-semibold tracking-widest uppercase">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              Three pillars of our <span className="text-gradient-gold">real estate practice</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Property Management", body: "We manage residential and commercial portfolios — handling tenants, maintenance, rent collection and reporting on your behalf." },
              { title: "Property Consultancy", body: "Strategic advice on acquisitions, valuations, investment decisions and market positioning across the FCT." },
              { title: "Property Development", body: "From land sourcing to project delivery — we develop quality residential and mixed-use properties in prime Abuja locations." },
            ].map((s) => (
              <div key={s.title} className="bg-card rounded-xl p-8 border border-border">
                <Building2 className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;