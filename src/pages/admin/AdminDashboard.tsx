import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Inbox, Home, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ leads: 0, newLeads: 0, properties: 0, featured: 0 });
  const [recent, setRecent] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const [{ count: leads }, { count: newLeads }, { count: properties }, { count: featured }, { data: r }] = await Promise.all([
        supabase.from("leads").select("*", { count: "exact", head: true }),
        supabase.from("leads").select("*", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("properties").select("*", { count: "exact", head: true }),
        supabase.from("properties").select("*", { count: "exact", head: true }).eq("featured", true),
        supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(5),
      ]);
      setStats({ leads: leads || 0, newLeads: newLeads || 0, properties: properties || 0, featured: featured || 0 });
      setRecent(r || []);
    })();
  }, []);

  const cards = [
    { label: "Total Leads", value: stats.leads, icon: Inbox, color: "text-accent" },
    { label: "New Leads", value: stats.newLeads, icon: Clock, color: "text-orange-500" },
    { label: "Properties", value: stats.properties, icon: Home, color: "text-accent" },
    { label: "Featured", value: stats.featured, icon: Star, color: "text-yellow-500" },
  ];

  return (
    <AdminLayout>
      <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">Dashboard</h1>
      <p className="text-muted-foreground font-sans text-sm mb-8">Overview of your real estate platform.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {cards.map((c) => (
          <div key={c.label} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <c.icon className={`w-5 h-5 ${c.color}`} />
            </div>
            <div className="text-3xl font-display font-bold text-foreground">{c.value}</div>
            <div className="text-xs font-sans text-muted-foreground mt-1">{c.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-semibold text-foreground">Recent leads</h2>
          <Link to="/admin/leads" className="text-sm text-accent hover:underline">View all →</Link>
        </div>
        {recent.length === 0 ? (
          <p className="text-sm text-muted-foreground font-sans">No leads yet.</p>
        ) : (
          <div className="divide-y divide-border">
            {recent.map((l) => (
              <div key={l.id} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="min-w-0">
                  <div className="font-sans font-medium text-foreground truncate">{l.name} <span className="text-muted-foreground font-normal">· {l.email}</span></div>
                  <div className="text-xs text-muted-foreground font-sans truncate">{l.message}</div>
                </div>
                <span className={`text-xs font-sans px-2 py-1 rounded-full self-start sm:self-center ${
                  l.status === "new" ? "bg-orange-500/15 text-orange-600 dark:text-orange-300" :
                  l.status === "contacted" ? "bg-blue-500/15 text-blue-600 dark:text-blue-300" :
                  "bg-green-500/15 text-green-600 dark:text-green-300"
                }`}>{l.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;