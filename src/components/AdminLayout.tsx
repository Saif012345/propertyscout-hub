import { ReactNode } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Building2, LayoutDashboard, Inbox, Home, LogOut, Globe } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const items = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/admin/leads", label: "Leads", icon: Inbox },
  { to: "/admin/properties", label: "Properties", icon: Home },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 md:min-h-screen bg-card border-r border-border md:fixed md:left-0 md:top-0 md:bottom-0 flex flex-col">
        <div className="p-6 border-b border-border flex items-center justify-between md:block">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-accent" />
            <span className="font-display font-bold">UNOOMA Admin</span>
          </Link>
        </div>
        <nav className="p-3 flex-1 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
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
        <div className="p-3 border-t border-border space-y-2 hidden md:block">
          <div className="text-xs text-muted-foreground font-sans px-2 truncate">{user?.email}</div>
          <div className="flex items-center gap-2">
            <ThemeToggle className="!border-border !text-foreground" />
            <Link to="/" className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                <Globe className="w-4 h-4 mr-2" /> Site
              </Button>
            </Link>
          </div>
          <Button variant="outline" size="sm" className="w-full" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" /> Sign out
          </Button>
        </div>
      </aside>

      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-full overflow-x-hidden">
        <div className="md:hidden flex items-center justify-end gap-2 mb-4">
          <ThemeToggle className="!border-border !text-foreground" />
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-1.5" /> Sign out
          </Button>
        </div>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;