import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Star } from "lucide-react";

const empty = {
  id: "", title: "", description: "", location: "", price: 0, price_label: "",
  beds: 0, baths: 0, sqm: 0, type: "sale", category: "house",
  image_url: "", status: "published", featured: false,
};

const AdminProperties = () => {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const { toast } = useToast();

  const load = async () => {
    const { data } = await supabase.from("properties").select("*").order("created_at", { ascending: false });
    setItems(data || []);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editing.title || !editing.location || !editing.price_label) {
      toast({ title: "Title, location and price label are required", variant: "destructive" });
      return;
    }
    const payload = { ...editing };
    let res;
    if (payload.id) {
      const { id, ...rest } = payload;
      res = await supabase.from("properties").update(rest).eq("id", id);
    } else {
      const { id, ...rest } = payload;
      res = await supabase.from("properties").insert(rest);
    }
    if (res.error) toast({ title: "Save failed", description: res.error.message, variant: "destructive" });
    else { toast({ title: "Saved" }); setEditing(null); load(); }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this property?")) return;
    await supabase.from("properties").delete().eq("id", id);
    load();
  };

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">Properties</h1>
          <p className="text-muted-foreground font-sans text-sm">Manage all listings on the site.</p>
        </div>
        <Button variant="gold" onClick={() => setEditing({ ...empty })}>
          <Plus className="w-4 h-4 mr-1.5" /> New property
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((p) => (
          <div key={p.id} className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="h-40 bg-muted relative">
              {p.image_url && <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />}
              {p.featured && <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1"><Star className="w-3 h-3" /> Featured</span>}
            </div>
            <div className="p-4">
              <div className="text-xs text-muted-foreground font-sans uppercase">{p.type} · {p.category}</div>
              <h3 className="font-display font-semibold text-foreground mt-1 truncate">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-sans truncate">{p.location}</p>
              <p className="text-accent font-display font-bold mt-1">{p.price_label}</p>
              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm" className="flex-1" onClick={() => setEditing(p)}>
                  <Pencil className="w-3.5 h-3.5 mr-1" /> Edit
                </Button>
                <Button variant="outline" size="sm" onClick={() => remove(p.id)}>
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="text-sm text-muted-foreground font-sans col-span-full text-center py-12">No properties yet. Click "New property" to add one.</p>}
      </div>

      <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing?.id ? "Edit property" : "New property"}</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-3">
              <Input placeholder="Title" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
              <Textarea placeholder="Description" value={editing.description || ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Location (e.g. Maitama)" value={editing.location} onChange={(e) => setEditing({ ...editing, location: e.target.value })} />
                <Input placeholder="Image URL" value={editing.image_url || ""} onChange={(e) => setEditing({ ...editing, image_url: e.target.value })} />
                <Input type="number" placeholder="Price (number)" value={editing.price} onChange={(e) => setEditing({ ...editing, price: Number(e.target.value) })} />
                <Input placeholder="Price label (₦185,000,000)" value={editing.price_label} onChange={(e) => setEditing({ ...editing, price_label: e.target.value })} />
                <Input type="number" placeholder="Beds" value={editing.beds} onChange={(e) => setEditing({ ...editing, beds: Number(e.target.value) })} />
                <Input type="number" placeholder="Baths" value={editing.baths} onChange={(e) => setEditing({ ...editing, baths: Number(e.target.value) })} />
                <Input type="number" placeholder="Size (sqm)" value={editing.sqm} onChange={(e) => setEditing({ ...editing, sqm: Number(e.target.value) })} />
                <Select value={editing.type} onValueChange={(v) => setEditing({ ...editing, type: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sale">For Sale</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={editing.category} onValueChange={(v) => setEditing({ ...editing, category: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={editing.status} onValueChange={(v) => setEditing({ ...editing, status: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between bg-muted px-3 py-2 rounded-md">
                <span className="text-sm font-sans">Featured on homepage</span>
                <Switch checked={editing.featured} onCheckedChange={(v) => setEditing({ ...editing, featured: v })} />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
                <Button variant="gold" onClick={save}>Save</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminProperties;