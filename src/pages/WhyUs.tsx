import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import { ShieldCheck, Award, Users, Clock, TrendingUp, HandshakeIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: ShieldCheck, title: "Integrity", body: "We uphold honesty, accountability and professionalism in every transaction we handle." },
  { icon: Award, title: "Excellence", body: "Committed to delivering high-quality services and exceptional client experiences across every project." },
  { icon: Users, title: "Customer Satisfaction", body: "Our clients remain at the centre of everything we do — tailored advice, dedicated consultants." },
  { icon: Clock, title: "Reliable & Responsive", body: "Quick response times, efficient processes and transparent communication on every engagement." },
  { icon: TrendingUp, title: "Market Expertise", body: "Strong knowledge of Abuja's real estate market and Nigeria's wider property sector for smart decisions." },
  { icon: HandshakeIcon, title: "Innovation", body: "We embrace modern solutions and creative strategies in real estate service delivery and development." },
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
      <Seo
        title="Why Choose UNOOMA Properties Ltd | Trusted Real Estate Experts in Abuja"
        description="Integrity, market expertise and reliable service — discover why clients across Abuja and Nigeria choose UNOOMA Properties Ltd for real estate management, consultancy and development."
        path="/why-us"
      />
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-navy text-on-dark">
        <div className="container mx-auto px-6">
          <span className="text-accent font-sans text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6 max-w-3xl">
            The <span className="text-gradient-gold">UNOOMA</span> difference
          </h1>
          <p className="text-on-dark/70 font-sans text-lg max-w-2xl">
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

      <section className="py-20 bg-gradient-navy text-on-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">{s.value}</div>
                <div className="text-sm font-sans text-on-dark/60 uppercase tracking-wider">{s.label}</div>
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