import { Building2 } from "lucide-react";

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
              Abuja's premier real estate technology platform, connecting property 
              professionals with modern solutions.
            </p>
          </div>

          {[
            { title: "Platform", links: ["Property Search", "Virtual Tours", "Lead CRM", "Analytics"] },
            { title: "Partners", links: ["Realtors", "Developers", "Estate Managers", "Vacation Rentals"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-sans font-semibold text-primary-foreground text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-sans hover:text-gold transition-colors">
                      {link}
                    </a>
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
