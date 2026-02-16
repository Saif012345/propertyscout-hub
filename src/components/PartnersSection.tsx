import { Building, Home, Hotel, Landmark } from "lucide-react";

const partners = [
  {
    icon: Home,
    title: "Realtors & Agents",
    description: "Professional listing portals, lead management CRM, and automated follow-ups to close more deals.",
    features: ["Property Listings", "Lead Tracking", "Booking System"],
  },
  {
    icon: Building,
    title: "Property Developers",
    description: "Showcase projects with galleries, floor plans, and accept deposits online with payment integration.",
    features: ["Project Showcase", "Online Deposits", "Progress Dashboards"],
  },
  {
    icon: Landmark,
    title: "Estate Management",
    description: "Tenant portals for rent payments, maintenance requests, and automated billing systems.",
    features: ["Tenant Portal", "Maintenance Tracking", "Auto Billing"],
  },
  {
    icon: Hotel,
    title: "Vacation Rentals",
    description: "Real-time booking systems, calendar sync with Airbnb, and review management for short-stays.",
    features: ["Booking Engine", "Calendar Sync", "Reviews System"],
  },
];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-sans text-sm font-semibold tracking-widest uppercase">
            Who We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Built for Every <span className="text-gradient-gold">Partner</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg">
            Tailored solutions for every segment of Abuja's real estate market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.title}
              className="glass-card rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <partner.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {partner.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                {partner.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {partner.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-sans font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
