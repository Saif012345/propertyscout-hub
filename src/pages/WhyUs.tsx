import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import { ShieldCheck, Award, Users, Clock, TrendingUp, HandshakeIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: ShieldCheck, title: "Verified & Licensed", body: "A fully registered Nigerian real estate firm with verified property records and transparent documentation on every transaction." },
  { icon: Award, title: "Local Expertise", body: "Deep knowledge of Abuja's neighborhoods — from Gwarinpa to Maitama — ensures you get the right property at the right price." },
  { icon: Users, title: "Client-First Approach", body: "Every client gets a dedicated consultant. We listen, advise and tailor solutions to your goals — not a sales script." },
  { icon: Clock, title: "Fast & Reliable", body: "Quick response times, efficient processes and clear communication keep your property dealings on track." },
  { icon: TrendingUp, title: "Investment Insight", body: "We don't just sell properties — we help you grow wealth with data-backed market and rental yield analysis." },
  { icon: HandshakeIcon, title: "Long-Term Partnership", body: "From your first rental to your tenth investment property — we're with you for the whole journey." },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Properties Managed" },
  { value: "98%", label: "Client Retention" },
  { value: "24h", label: "Response Time" },
];

const WhyUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <span className="text-accent font-sans text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6 max-w-3xl">
            The <span className="text-gradient-gold">UNOOMA</span> difference
          </h1>
          <p className="text-primary-foreground/70 font-sans text-lg max-w-2xl">
            We combine integrity, market expertise and modern service standards to give 
            you a real estate experience built on trust.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={`p-8 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <r.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{r.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">{s.value}</div>
                <div className="text-sm font-sans text-primary-foreground/60 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default WhyUs;