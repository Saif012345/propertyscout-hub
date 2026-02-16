import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/80 backdrop-blur-lg border-b border-primary-foreground/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Building2 className="w-6 h-6 text-gold" />
          <span className="text-xl font-display font-bold text-primary-foreground">
            AbujaRealty
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/listings" className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors">
            Properties
          </Link>
          <a href="/#categories" className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors">
            Categories
          </a>
          <a href="/#features" className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors">
            Why Us
          </a>
          <a href="/#contact" className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors">
            Contact
          </a>
          <Link to="/listings">
            <Button variant="gold" size="sm">
              Browse Listings
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-dark/95 backdrop-blur-lg border-t border-primary-foreground/10 px-6 py-6 space-y-4">
          <Link to="/listings" className="block text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors" onClick={() => setOpen(false)}>
            Properties
          </Link>
          <a href="/#categories" className="block text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors" onClick={() => setOpen(false)}>
            Categories
          </a>
          <a href="/#features" className="block text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors" onClick={() => setOpen(false)}>
            Why Us
          </a>
          <a href="/#contact" className="block text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors" onClick={() => setOpen(false)}>
            Contact
          </a>
          <Link to="/listings" onClick={() => setOpen(false)}>
            <Button variant="gold" size="sm" className="w-full">
              Browse Listings
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
