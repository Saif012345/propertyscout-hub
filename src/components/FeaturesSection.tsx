import { Search, CreditCard, BarChart3, MapPin, MessageSquare, Shield } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Property Search",
    description: "Advanced filters by location, price, type, and amenities for buyers and renters.",
  },
  {
    icon: MapPin,
    title: "Virtual Tours & Maps",
    description: "360° property walkthroughs and Google Maps integration for every listing.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Accept deposits and rent via Paystack & Flutterwave with full transaction tracking.",
  },
  {
    icon: MessageSquare,
    title: "Lead Management CRM",
    description: "Track prospects, automate follow-ups via email and WhatsApp, close deals faster.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights on occupancy, revenue, leads, and marketing performance.",
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description: "Build trust with verified properties, agent ratings, and transparent reviews.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-sans text-sm font-semibold tracking-widest uppercase">
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="text-gradient-gold">Succeed</span>
          </h2>
          <p className="text-primary-foreground/60 font-sans text-lg">
            A complete technology suite designed for the Abuja real estate market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-8 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/30 transition-colors">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/60 font-sans text-sm leading-relaxed">
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
