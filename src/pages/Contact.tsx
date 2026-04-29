import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-navy text-on-dark">
        <div className="container mx-auto px-6">
          <span className="text-accent font-sans text-sm font-semibold tracking-widest uppercase">Contact Us</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6 max-w-3xl">
            Let's talk about your <span className="text-gradient-gold">property needs</span>
          </h1>
          <p className="text-on-dark/70 font-sans text-lg max-w-2xl">
            Reach out to UNOOMA Properties Ltd — our team in Gwarinpa is ready to help 
            with management, consultancy or development enquiries.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: MapPin, title: "Office", lines: ["No. 4, 4th Avenue", "Gwarinpa Estate", "Abuja FCT, Nigeria"] },
              { icon: Phone, title: "Phone", lines: ["+234 087 711 8036", "Mon – Sat"] },
              { icon: Mail, title: "Email", lines: ["ozoaze@gmail.com", "We reply within 24h"] },
              { icon: Clock, title: "Hours", lines: ["Mon – Fri: 9am – 6pm", "Sat: 10am – 3pm"] },
            ].map((item) => (
              <div key={item.title} className="text-center md:text-left">
                <div className="inline-flex w-12 h-12 rounded-lg bg-accent/10 items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h3>
                {item.lines.map((l) => (
                  <p key={l} className="text-sm font-sans text-muted-foreground leading-relaxed">{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg max-w-6xl mx-auto h-[400px]">
            <iframe
              title="UNOOMA Properties office location"
              src="https://www.google.com/maps?q=Gwarinpa+Estate+Abuja+Nigeria&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;