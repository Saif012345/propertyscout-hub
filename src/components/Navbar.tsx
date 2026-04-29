import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { LayoutDashboard } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "About", to: "/about" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAdmin } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/80 backdrop-blur-lg border-b border-on-dark/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="UNOOMA Properties" className="w-8 h-8 object-contain" width={32} height={32} />
          <span className="text-xl font-display font-bold text-on-dark tracking-tight">
            UNOOMA<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-sans transition-colors ${isActive ? "text-accent" : "text-on-dark/70 hover:text-accent"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
          {isAdmin && (
            <Link to="/admin" className="text-sm text-accent hover:text-accent/80 inline-flex items-center gap-1">
              <LayoutDashboard className="w-4 h-4" /> Admin
            </Link>
          )}
          <Link to="/properties">
            <Button variant="gold" size="sm">
              Browse Properties
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="text-on-dark" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy-dark/95 backdrop-blur-lg border-t border-on-dark/10 px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-sans transition-colors ${isActive ? "text-accent" : "text-on-dark/70 hover:text-accent"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/properties" onClick={() => setOpen(false)}>
            <Button variant="gold" size="sm" className="w-full">
              Browse Properties
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
