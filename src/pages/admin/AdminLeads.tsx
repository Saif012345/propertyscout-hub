import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Building, Trash2, Eye } from "lucide-react";

const STATUSES = ["new", "contacted", "closed"];

const AdminLeads = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState<any | null>(null);
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  const load = async () => {
    const q = supabase.from("leads").select("*").order("created_at", { ascending: false });
    const { data } = filter === "all" ? await q : await q.eq("status", filter);
    setLeads(data || []);
  };

  useEffect(() => { load(); }, [filter]);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) toast({ title: "Update failed", description: error.message, variant: "destructive" });
    else { toast({ title: "Status updated" }); load(); }
  };

  const saveNotes = async () => {
    if (!active) return;
    const { error } = await supabase.from("leads").update({ admin_notes: notes }).eq("id", active.id);
    if (error) toast({ title: "Save failed", description: error.message, variant: "destructive" });
    else { toast({ title: "Notes saved" }); setActive(null); load(); }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this lead?")) return;
    await supabase.from("leads").delete().eq("id", id);
    load();
  };

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">Leads</h1>
          <p className="text-muted-foreground font-sans text-sm">Follow up on enquiries from the site.</p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-44"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {leads.length === 0 ? (
          <p className="p-8 text-center text-sm text-muted-foreground font-sans">No leads found.</p>
        ) : (
          <div className="divide-y divide-border">
            {leads.map((l) => (
              <div key={l.id} className="p-4 md:p-5 flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-display font-semibold text-foreground">{l.name}</span>
                    <span className="text-xs font-sans px-2 py-0.5 rounded-full bg-muted text-muted-foreground capitalize">{l.source}</span>
                    {l.property_title && <span className="text-xs font-sans text-accent truncate">→ {l.property_title}</span>}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-sans text-muted-foreground mb-2">
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {l.email}</span>
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {l.phone}</span>
                    {l.company && <span className="flex items-center gap-1"><Building className="w-3 h-3" /> {l.company}</span>}
                  </div>
                  <p className="text-sm font-sans text-foreground/80 line-clamp-2">{l.message}</p>
                  <div className="text-xs text-muted-foreground font-sans mt-1">{new Date(l.created_at).toLocaleString()}</div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Select value={l.status} onValueChange={(v) => updateStatus(l.id, v)}>
                    <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" onClick={() => { setActive(l); setNotes(l.admin_notes || ""); }}>
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => remove(l.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>{active?.name}</DialogTitle></DialogHeader>
          {active && (
            <div className="space-y-4">
              <div className="text-sm font-sans space-y-1">
                <div><b>Email:</b> {active.email}</div>
                <div><b>Phone:</b> {active.phone}</div>
                {active.company && <div><b>Company:</b> {active.company}</div>}
                <div><b>Source:</b> {active.source}{active.property_title && ` · ${active.property_title}`}</div>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Message</div>
                <p className="text-sm bg-muted p-3 rounded font-sans whitespace-pre-wrap">{active.message}</p>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Admin notes</div>
                <Textarea rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Follow-up details, next actions..." />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setActive(null)}>Cancel</Button>
                <Button variant="gold" onClick={saveNotes}>Save notes</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminLeads;