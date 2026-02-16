import { Building, Home, Hotel, Landmark } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    icon: Home,
    title: "Residential Homes",
    description: "Find luxury apartments, duplexes, bungalows, and terraced houses across Abuja's finest neighborhoods.",
    features: ["Apartments", "Duplexes", "Terraces"],
  },
  {
    icon: Building,
    title: "New Developments",
    description: "Explore off-plan and newly built properties from top developers. Reserve your unit with online deposits.",
    features: ["Off-Plan", "New Builds", "Estate Living"],
  },
  {
    icon: Landmark,
    title: "Commercial Spaces",
    description: "Office spaces, retail shops, and warehouses in prime commercial districts across the FCT.",
    features: ["Offices", "Retail", "Warehouses"],
  },
  {
    icon: Hotel,
    title: "Short-Stay Rentals",
    description: "Fully furnished apartments and vacation homes for business trips, tourism, and short stays.",
    features: ["Furnished", "Serviced", "Vacation Homes"],
  },
];

const CategoriesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-gold font-sans text-sm font-semibold tracking-widest uppercase">
            Browse by Category
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            What Are You <span className="text-gradient-gold">Looking For?</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg">
            From luxury homes to commercial spaces, find exactly what you need in Abuja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className={`glass-card rounded-lg p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <cat.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {cat.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.features.map((feature) => (
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

export default CategoriesSection;
