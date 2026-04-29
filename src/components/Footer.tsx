import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-on-dark/60 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-accent" />
              <span className="text-lg font-display font-bold text-on-dark">UNOOMA PROPERTIES</span>
            </div>
            <p className="text-sm font-sans leading-relaxed mb-5">
              Property management, consultancy and development across Abuja FCT. Trusted partners in your real estate journey.
            </p>
            <ul className="space-y-2.5 text-sm font-sans">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" /> No. 4, 4th Avenue, Gwarinpa Estate, Abuja FCT</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent flex-shrink-0" /> +234 087 711 8036</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent flex-shrink-0" /> ozoaze@gmail.com</li>
            </ul>
          </div>

          {[
            { title: "Properties", links: [{ label: "All Listings", href: "/properties" }, { label: "For Sale", href: "/properties" }, { label: "For Rent", href: "/properties" }, { label: "New Developments", href: "/properties" }] },
            { title: "Explore", links: [{ label: "Maitama", href: "/properties" }, { label: "Asokoro", href: "/properties" }, { label: "Wuse II", href: "/properties" }, { label: "Gwarinpa", href: "/properties" }] },
            { title: "Company", links: [{ label: "About Us", href: "/about" }, { label: "Why Us", href: "/why-us" }, { label: "Contact", href: "/contact" }] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-sans font-semibold text-on-dark text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm font-sans hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-on-dark/10 pt-8 text-center text-xs font-sans">
          © 2026 UNOOMA PROPERTIES LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
