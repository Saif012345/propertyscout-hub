import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const Footer = () => {
  const { settings } = useSiteSettings();
  const socials = [
    { url: settings.facebook_url, Icon: Facebook, label: "Facebook" },
    { url: settings.instagram_url, Icon: Instagram, label: "Instagram" },
    { url: settings.twitter_url, Icon: Twitter, label: "Twitter" },
    { url: settings.linkedin_url, Icon: Linkedin, label: "LinkedIn" },
    { url: settings.whatsapp_url, Icon: MessageCircle, label: "WhatsApp" },
  ].filter((s) => s.url && s.url.trim().length > 0);

  return (
    <footer className="bg-navy-dark text-on-dark/60 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="UNOOMA Properties logo" className="w-7 h-7 object-contain" width={28} height={28} loading="lazy" />
              <span className="text-lg font-display font-bold text-on-dark">UNOOMA PROPERTIES</span>
            </div>
            <p className="text-sm font-sans leading-relaxed mb-5">
              Property management, real estate consulting, buying & selling, and property development across Abuja and Nigeria.
            </p>
            <ul className="space-y-2.5 text-sm font-sans">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" /> {settings.address}</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent flex-shrink-0" /> <a href={`tel:${settings.phone.replace(/\s+/g, "")}`} className="hover:text-accent">{settings.phone}</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent flex-shrink-0" /> <a href={`mailto:${settings.email}`} className="hover:text-accent">{settings.email}</a></li>
            </ul>
            {socials.length > 0 && (
              <div className="flex items-center gap-3 mt-5">
                {socials.map(({ url, Icon, label }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                     className="w-9 h-9 rounded-full border border-on-dark/15 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
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
