import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "₦50,000",
    period: "/month",
    description: "For individual agents getting started online",
    features: [
      "Property listing portal",
      "Up to 20 listings",
      "Lead capture forms",
      "Basic analytics",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₦100,000",
    period: "/month",
    description: "For growing agencies and developers",
    features: [
      "Unlimited listings",
      "CRM & lead management",
      "Online booking system",
      "Payment integration",
      "Advanced analytics",
      "WhatsApp automation",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large developers and estate companies",
    features: [
      "Everything in Professional",
      "Tenant management portal",
      "Maintenance tracking",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Revenue share options",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-sans text-sm font-semibold tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Partnership <span className="text-gradient-gold">Plans</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg">
            Flexible plans that grow with your business. Start small, scale big.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 transition-all duration-300 animate-fade-in-up ${
                plan.highlighted
                  ? "bg-gradient-navy text-primary-foreground shadow-2xl scale-105 border-2 border-gold"
                  : "glass-card hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.highlighted && (
                <div className="text-xs font-sans font-bold tracking-widest uppercase text-gold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-4xl font-display font-bold ${plan.highlighted ? "text-gold" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-sans ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm font-sans mb-8 ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-sans">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-gold" : "text-gold"}`} />
                    <span className={plan.highlighted ? "text-primary-foreground/80" : "text-foreground/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "gold" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
