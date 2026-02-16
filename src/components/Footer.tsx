import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground/60 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-gold" />
              <span className="text-lg font-display font-bold text-primary-foreground">AbujaRealty</span>
            </div>
            <p className="text-sm font-sans leading-relaxed">
              Abuja's leading online real estate platform. Find, rent, or buy 
              your dream property with confidence.
            </p>
          </div>

          {[
            { title: "Properties", links: [{ label: "All Listings", href: "/listings" }, { label: "For Sale", href: "/listings" }, { label: "For Rent", href: "/listings" }, { label: "New Developments", href: "/listings" }] },
            { title: "Explore", links: [{ label: "Maitama", href: "#" }, { label: "Asokoro", href: "#" }, { label: "Wuse II", href: "#" }, { label: "Gwarinpa", href: "#" }] },
            { title: "Company", links: [{ label: "About Us", href: "#" }, { label: "Careers", href: "#" }, { label: "Blog", href: "#" }, { label: "Contact", href: "#contact" }] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-sans font-semibold text-primary-foreground text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm font-sans hover:text-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs font-sans">
          © 2026 AbujaRealty. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
