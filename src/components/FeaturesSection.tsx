import { Search, CreditCard, BarChart3, MapPin, MessageSquare, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Search,
    title: "Smart Property Search",
    description: "Advanced filters by location, price, type, and amenities to find your ideal property fast.",
  },
  {
    icon: MapPin,
    title: "Virtual Tours & Maps",
    description: "360° property walkthroughs and interactive maps so you can explore before visiting.",
  },
  {
    icon: CreditCard,
    title: "Secure Online Payments",
    description: "Pay deposits and rent securely via Paystack & Flutterwave with full transaction tracking.",
  },
  {
    icon: MessageSquare,
    title: "Direct Agent Chat",
    description: "Connect instantly with verified agents via in-app messaging and WhatsApp integration.",
  },
  {
    icon: BarChart3,
    title: "Market Insights",
    description: "Real-time data on property values, neighborhood trends, and investment opportunities.",
  },
  {
    icon: Shield,
    title: "Verified Listings Only",
    description: "Every property is verified by our team. Transparent pricing, honest reviews, no surprises.",
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-navy text-on-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-gold font-sans text-sm font-semibold tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="text-gradient-gold">Find Home</span>
          </h2>
          <p className="text-on-dark/60 font-sans text-lg">
            A complete property platform built for Abuja's real estate market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-8 rounded-lg border border-on-dark/10 bg-on-dark/5 hover:bg-on-dark/10 transition-all duration-500 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/30 transition-colors">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-on-dark/60 font-sans text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
