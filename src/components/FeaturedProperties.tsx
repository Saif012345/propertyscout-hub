import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const featuredProperties = [
  {
    image: property1,
    title: "Luxury 4-Bedroom Penthouse",
    location: "Maitama, Abuja",
    price: "₦185,000,000",
    beds: 4,
    baths: 5,
    sqm: 320,
    tag: "For Sale",
  },
  {
    image: property2,
    title: "Modern 5-Bedroom Duplex",
    location: "Asokoro, Abuja",
    price: "₦120,000,000",
    beds: 5,
    baths: 6,
    sqm: 450,
    tag: "For Sale",
  },
  {
    image: property3,
    title: "Rooftop Penthouse Suite",
    location: "Wuse II, Abuja",
    price: "₦2,500,000/yr",
    beds: 3,
    baths: 3,
    sqm: 200,
    tag: "For Rent",
  },
];

const FeaturedProperties = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <span className="text-gold font-sans text-sm font-semibold tracking-widest uppercase">
              Featured Listings
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4">
              Handpicked <span className="text-gradient-gold">Properties</span>
            </h2>
          </div>
          <Link to="/listings">
            <Button variant="outline" size="lg">
              View All Listings
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <div
              key={property.title}
              className={`group rounded-xl overflow-hidden bg-card shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-gold text-accent-foreground text-xs font-sans font-bold px-3 py-1 rounded-full">
                    {property.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-2xl font-display font-bold text-gold mb-1">{property.price}</div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{property.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm font-sans mb-4">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>
                <div className="flex items-center gap-4 text-sm font-sans text-muted-foreground border-t border-border pt-4">
                  <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.beds} Beds</span>
                  <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.baths} Baths</span>
                  <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {property.sqm} sqm</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
