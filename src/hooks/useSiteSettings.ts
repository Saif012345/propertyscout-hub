import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type SiteSettings = {
  phone: string;
  email: string;
  address: string;
  facebook_url: string;
  instagram_url: string;
  twitter_url: string;
  linkedin_url: string;
  whatsapp_url: string;
};

const DEFAULTS: SiteSettings = {
  phone: "+234 087 711 8036",
  email: "ozoaze@gmail.com",
  address: "No. 4, 4th Avenue, Gwarinpa Estate, Abuja FCT",
  facebook_url: "",
  instagram_url: "",
  twitter_url: "",
  linkedin_url: "",
  whatsapp_url: "",
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("site_settings")
      .select("*")
      .eq("id", 1)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setSettings({
            phone: data.phone ?? DEFAULTS.phone,
            email: data.email ?? DEFAULTS.email,
            address: data.address ?? DEFAULTS.address,
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

  return { settings, loading };
};