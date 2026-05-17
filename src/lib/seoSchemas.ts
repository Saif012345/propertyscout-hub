const SITE = "https://unooma.lovable.app";

const baseAddress = {
  "@type": "PostalAddress",
  streetAddress: "No. 4, 4th Avenue, Gwarinpa Estate",
  addressLocality: "Abuja",
  addressRegion: "FCT",
  addressCountry: "NG",
};

const baseContact = {
  "@type": "ContactPoint",
  telephone: "+234-807-718-036",
  email: "info@unoomaproperties.com",
  contactType: "customer service",
  areaServed: "NG",
  availableLanguage: ["en"],
};

const sameAs: string[] = [];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE}#localbusiness`,
  name: "UNOOMA Properties Ltd",
  image: `${SITE}/logo.png`,
  url: SITE,
  telephone: "+234-807-718-036",
  email: "info@unoomaproperties.com",
  address: baseAddress,
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "15:00",
    },
  ],
  areaServed: { "@type": "Place", name: "Abuja, Nigeria" },
  sameAs,
};

export const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE}#realestateagent`,
  name: "UNOOMA Properties Ltd",
  description:
    "Abuja-based real estate company offering property management, consulting, buying, selling and development services across Nigeria.",
  image: `${SITE}/logo.png`,
  logo: `${SITE}/logo.png`,
  url: SITE,
  telephone: "+234-807-718-036",
  email: "info@unoomaproperties.com",
  address: baseAddress,
  contactPoint: baseContact,
  areaServed: [
    { "@type": "Place", name: "Abuja" },
    { "@type": "Country", name: "Nigeria" },
  ],
  knowsAbout: [
    "Property Management",
    "Real Estate Consulting",
    "Property Buying and Selling",
    "Property Development",
  ],
  sameAs,
};

export const brandSchemas = [localBusinessSchema, realEstateAgentSchema];
