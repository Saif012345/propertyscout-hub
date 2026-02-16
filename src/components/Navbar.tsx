import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Partners", "Features", "Pricing", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/80 backdrop-blur-lg border-b border-primary-foreground/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="w-6 h-6 text-gold" />
          <span className="text-xl font-display font-bold text-primary-foreground">
            AbujaRealty
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors"
            >
              {link}
            </a>
          ))}
          <Button variant="gold" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-dark/95 backdrop-blur-lg border-t border-primary-foreground/10 px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button variant="gold" size="sm" className="w-full">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
