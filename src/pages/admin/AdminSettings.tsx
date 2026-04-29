import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save, Loader2 } from "lucide-react";

const AdminSettings = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    phone: "",
    email: "",
    address: "",
    facebook_url: "",
    instagram_url: "",
    twitter_url: "",
    linkedin_url: "",
    whatsapp_url: "",
  });

  useEffect(() => {
    supabase.from("site_settings").select("*").eq("id", 1).maybeSingle().then(({ data }) => {
      if (data) {
        setForm({
          phone: data.phone ?? "",
          email: data.email ?? "",
          address: data.address ?? "",
          facebook_url: data.facebook_url ?? "",
          instagram_url: data.instagram_url ?? "",
          twitter_url: data.twitter_url ?? "",
          linkedin_url: data.linkedin_url ?? "",
          whatsapp_url: data.whatsapp_url ?? "",
        });
      }
      setLoading(false);
    });
  }, []);

  const save = async () => {
    setSaving(true);
    const { error } = await supabase.from("site_settings").update(form).eq("id", 1);
    setSaving(false);
    if (error) toast({ title: "Save failed", description: error.message, variant: "destructive" });
    else toast({ title: "Settings saved", description: "Site updated everywhere." });
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <AdminLayout>
      <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">Settings</h1>
      <p className="text-muted-foreground font-sans text-sm mb-8">
        Edit contact info and social media — changes appear instantly across the site.
      </p>

      {loading ? (
        <div className="flex items-center gap-2 text-muted-foreground"><Loader2 className="w-4 h-4 animate-spin" /> Loading…</div>
      ) : (
        <div className="max-w-2xl space-y-6">
          <section className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h2 className="font-display font-semibold text-foreground">Contact information</h2>
            <div>
              <label className="text-sm font-sans font-medium block mb-1.5">Phone</label>
              <Input value={form.phone} onChange={set("phone")} placeholder="+234 ..." />
            </div>
            <div>
              <label className="text-sm font-sans font-medium block mb-1.5">Email</label>
              <Input type="email" value={form.email} onChange={set("email")} />
            </div>
            <div>
              <label className="text-sm font-sans font-medium block mb-1.5">Address</label>
              <Textarea value={form.address} onChange={set("address")} rows={2} />
            </div>
          </section>

          <section className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h2 className="font-display font-semibold text-foreground">Social media</h2>
            <p className="text-xs text-muted-foreground font-sans -mt-2">Leave blank to hide an icon.</p>
            {([
              ["facebook_url", "Facebook URL"],
              ["instagram_url", "Instagram URL"],
              ["twitter_url", "Twitter / X URL"],
              ["linkedin_url", "LinkedIn URL"],
              ["whatsapp_url", "WhatsApp link (https://wa.me/...)"],
            ] as const).map(([key, label]) => (
              <div key={key}>
                <label className="text-sm font-sans font-medium block mb-1.5">{label}</label>
                <Input value={form[key]} onChange={set(key)} placeholder="https://" />
              </div>
            ))}
          </section>

          <Button variant="gold" onClick={save} disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> : <Save className="w-4 h-4 mr-1.5" />}
            {saving ? "Saving…" : "Save changes"}
          </Button>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminSettings;