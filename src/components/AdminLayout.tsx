import { ReactNode, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Inbox, Home, LogOut, Globe, Plus, Settings, Menu, X } from "lucide-react";

const items = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/admin/properties", label: "Properties", icon: Home },
  { to: "/admin/properties?new=1", label: "Add Property", icon: Plus },
  { to: "/admin/leads", label: "Messages", icon: Inbox },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  const Sidebar = (
    <aside className="w-64 h-full bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display font-bold text-accent tracking-tight">UNOOMA<span>.</span></span>
          <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-accent uppercase mt-0.5">Properties Admin</span>
        </Link>
        <button className="md:hidden text-foreground" onClick={() => setOpen(false)} aria-label="Close menu">
          <X className="w-5 h-5" />
        </button>
      </div>
      <nav className="p-3 flex-1 flex flex-col gap-1 overflow-y-auto">
        {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-sans whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-muted"
                }`
              }
            >
              <it.icon className="w-4 h-4" />
              {it.label}
            </NavLink>
          ))}
        </nav>
      <div className="p-3 border-t border-border space-y-2">
          <div className="text-xs text-muted-foreground font-sans px-2 truncate">{user?.email}</div>
          <Link to="/" className="block">
            <Button variant="outline" size="sm" className="w-full">
              <Globe className="w-4 h-4 mr-2" /> Site
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="w-full" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" /> Sign out
          </Button>
        </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile topbar */}
      <div className="md:hidden sticky top-0 z-30 bg-card border-b border-border flex items-center justify-between px-4 h-14">
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="text-foreground">
          <Menu className="w-5 h-5" />
        </button>
        <Link to="/admin" className="flex flex-col leading-none items-center">
          <span className="font-display font-bold text-accent text-sm tracking-tight">UNOOMA<span>.</span></span>
          <span className="text-[9px] font-sans font-semibold tracking-[0.25em] text-accent uppercase">Admin</span>
        </Link>
        <Button variant="outline" size="sm" onClick={handleSignOut}>
          <LogOut className="w-4 h-4" />
        </Button>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:block fixed left-0 top-0 bottom-0 z-30">
        {Sidebar}
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative z-10 h-full">{Sidebar}</div>
        </div>
      )}

      <main className="md:ml-64 p-4 md:p-8 max-w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;