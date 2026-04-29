import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Star, Upload, Loader2 } from "lucide-react";

const empty = {
  id: "", title: "", description: "", location: "", price: 0, price_label: "",
  beds: 0, baths: 0, sqm: 0, type: "sale", category: "house",
  image_url: "", status: "available", featured: false,
};

const STATUS_BADGE: Record<string, string> = {
  available: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  sold: "bg-red-500/15 text-red-700 dark:text-red-300",
  rented: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  draft: "bg-muted text-muted-foreground",
};

const AdminProperties = () => {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();

  const load = async () => {
    const { data } = await supabase.from("properties").select("*").order("created_at", { ascending: false });
    setItems(data || []);
  };
  useEffect(() => { load(); }, []);

  useEffect(() => {
    if (searchParams.get("new") === "1") {
      setEditing({ ...empty });
      searchParams.delete("new");
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "Image too large", description: "Max 5MB", variant: "destructive" });
      return;
    }
    setUploading(true);
    const ext = file.name.split(".").pop() || "jpg";
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await supabase.storage.from("property-images").upload(path, file, { upsert: false });
    if (error) {
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
    } else {
      const { data: pub } = supabase.storage.from("property-images").getPublicUrl(path);
      setEditing((prev: any) => ({ ...prev, image_url: pub.publicUrl }));
      toast({ title: "Image uploaded" });
    }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  };

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
              <span className={`absolute top-2 right-2 text-xs font-sans px-2 py-0.5 rounded-full capitalize ${STATUS_BADGE[p.status] || STATUS_BADGE.draft}`}>{p.status}</span>
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

              {/* Image upload */}
              <div className="space-y-2">
                <label className="text-sm font-sans font-medium">Property image</label>
                {editing.image_url && (
                  <img src={editing.image_url} alt="Preview" className="w-full h-40 object-cover rounded-md border border-border" />
                )}
                <div className="flex gap-2">
                  <input ref={fileRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()} disabled={uploading}>
                    {uploading ? <Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> : <Upload className="w-4 h-4 mr-1.5" />}
                    {uploading ? "Uploading…" : editing.image_url ? "Replace image" : "Upload image"}
                  </Button>
                  {editing.image_url && (
                    <Button type="button" variant="outline" size="sm" onClick={() => setEditing({ ...editing, image_url: "" })}>
                      Remove
                    </Button>
                  )}
                </div>
                <Input placeholder="…or paste image URL" value={editing.image_url || ""} onChange={(e) => setEditing({ ...editing, image_url: e.target.value })} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Location (e.g. Maitama)" value={editing.location} onChange={(e) => setEditing({ ...editing, location: e.target.value })} />
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
                  <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="sold">Sold</SelectItem>
                    <SelectItem value="rented">Rented</SelectItem>
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