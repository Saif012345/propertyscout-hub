import { useState, useMemo } from "react";
import { MapPin, Bed, Bath, Maximize, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const allProperties = [
  {
    id: 1,
    image: property1,
    title: "Luxury 4-Bedroom Penthouse",
    location: "Maitama",
    price: 185000000,
    priceLabel: "₦185,000,000",
    beds: 4,
    baths: 5,
    sqm: 320,
    type: "sale",
    category: "apartment",
  },
  {
    id: 2,
    image: property2,
    title: "Modern 5-Bedroom Duplex",
    location: "Asokoro",
    price: 120000000,
    priceLabel: "₦120,000,000",
    beds: 5,
    baths: 6,
    sqm: 450,
    type: "sale",
    category: "house",
  },
  {
    id: 3,
    image: property3,
    title: "Rooftop Penthouse Suite",
    location: "Wuse II",
    price: 2500000,
    priceLabel: "₦2,500,000/yr",
    beds: 3,
    baths: 3,
    sqm: 200,
    type: "rent",
    category: "apartment",
  },
  {
    id: 4,
    image: property4,
    title: "Premium Office Complex",
    location: "Central Business District",
    price: 500000000,
    priceLabel: "₦500,000,000",
    beds: 0,
    baths: 8,
    sqm: 2500,
    type: "sale",
    category: "commercial",
  },
  {
    id: 5,
    image: property5,
    title: "Mediterranean Villa Estate",
    location: "Gwarinpa",
    price: 95000000,
    priceLabel: "₦95,000,000",
    beds: 6,
    baths: 7,
    sqm: 600,
    type: "sale",
    category: "house",
  },
  {
    id: 6,
    image: property6,
    title: "Furnished Studio Apartment",
    location: "Jabi",
    price: 1200000,
    priceLabel: "₦1,200,000/yr",
    beds: 1,
    baths: 1,
    sqm: 45,
    type: "rent",
    category: "apartment",
  },
  {
    id: 7,
    image: property1,
    title: "Executive 3-Bed Flat",
    location: "Maitama",
    price: 4500000,
    priceLabel: "₦4,500,000/yr",
    beds: 3,
    baths: 4,
    sqm: 180,
    type: "rent",
    category: "apartment",
  },
  {
    id: 8,
    image: property2,
    title: "4-Bedroom Semi-Detached",
    location: "Asokoro",
    price: 75000000,
    priceLabel: "₦75,000,000",
    beds: 4,
    baths: 5,
    sqm: 350,
    type: "sale",
    category: "house",
  },
  {
    id: 9,
    image: property5,
    title: "5-Bedroom Detached Villa",
    location: "Gwarinpa",
    price: 55000000,
    priceLabel: "₦55,000,000",
    beds: 5,
    baths: 5,
    sqm: 400,
    type: "sale",
    category: "house",
  },
];

const Listings = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const filtered = useMemo(() => {
    return allProperties.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === "all" || p.type === typeFilter;
      const matchCategory = categoryFilter === "all" || p.category === categoryFilter;
      const matchLocation = locationFilter === "all" || p.location === locationFilter;
      return matchSearch && matchType && matchCategory && matchLocation;
    });
  }, [search, typeFilter, categoryFilter, locationFilter]);

  const locations = [...new Set(allProperties.map((p) => p.location))];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-navy text-primary-foreground pt-28 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
            Property <span className="text-gradient-gold">Listings</span>
          </h1>
          <p className="text-primary-foreground/60 font-sans text-lg">
            Browse {allProperties.length} properties across Abuja
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sale">For Sale</SelectItem>
                <SelectItem value="rent">For Rent</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="apartment">Apartments</SelectItem>
                <SelectItem value="house">Houses</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-sans text-muted-foreground flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Showing {filtered.length} of {allProperties.length} properties
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl font-display font-semibold text-foreground mb-2">No properties found</p>
            <p className="text-muted-foreground font-sans">Try adjusting your filters or search query.</p>
            <Button variant="outline" className="mt-6" onClick={() => { setSearch(""); setTypeFilter("all"); setCategoryFilter("all"); setLocationFilter("all"); }}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property) => (
              <div
                key={property.id}
                className="group rounded-xl overflow-hidden bg-card shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-gold text-accent-foreground text-xs font-sans font-bold px-3 py-1 rounded-full">
                      {property.type === "sale" ? "For Sale" : "For Rent"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-sans font-medium px-3 py-1 rounded-full capitalize">
                      {property.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-display font-bold text-gold mb-1">{property.priceLabel}</div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{property.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm font-sans mb-4">
                    <MapPin className="w-4 h-4" />
                    {property.location}, Abuja
                  </div>
                  <div className="flex items-center gap-4 text-sm font-sans text-muted-foreground border-t border-border pt-4">
                    {property.beds > 0 && (
                      <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.beds} Beds</span>
                    )}
                    <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.baths} Baths</span>
                    <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {property.sqm} sqm</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
