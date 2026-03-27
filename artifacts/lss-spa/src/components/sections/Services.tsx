import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Snowflake, Sparkles, PlusCircle } from "lucide-react";

const CRYOSKIN_SERVICES = [
  { name: "CryoSlimming", description: "Permanently destroy fat cells & slim targeted areas", price: null },
  { name: "CryoToning", description: "Tighten skin, reduce cellulite & tone muscles", price: null },
  { name: "CryoFacial", description: "Lift, tighten & brighten your face — takes years off", price: null },
];

const FACIAL_SERVICES = [
  { name: "Classic Facial", description: "Signature skincare & micro-brushing", price: "$85" },
  { name: "Hydra Facial", description: "Infused with beneficial skincare serums", price: "$100" },
  { name: "Cryo Facial With Couple", description: "Lift, Tone, Brighten & Firm — addresses all signs of aging", price: "$125" },
  { name: "Cryo Facial Upgrade", description: "Add Cryo tightening & firming to a Classic Facial", price: "$47.50" },
  { name: "Cryo Facial 30-Min Add-On", description: "Add a Cryo session to Classic Facial for extra rejuvenation", price: "$85" },
  { name: "Cold Hammer", description: "Added to any Classic Facial treatment", price: "$30" },
];

const ADDON_SERVICES = [
  { name: "Diamond Glow", description: "Signature exfoliation & serum infusion treatment", price: "$100" },
  { name: "LED Light Therapy", description: "Targets aging, acne & redness — add to Classic Facial", price: "$30" },
  { name: "Nano Micro-Current", description: "Lift & firm with micro-current technology", price: "$30" },
  { name: "Chemical Peel", description: "Resurface & renew for smoother, brighter skin", price: "$40" },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            From revolutionary Cryoskin treatments to corrective facials, 
            we offer comprehensive solutions for your unique wellness journey.
          </p>
        </div>

        {/* Cryoskin Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="overflow-hidden border-border/50 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-72 lg:h-auto overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/service-cryo.png`} 
                  alt="Cryoskin Therapy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-sky-50 to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Snowflake className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-foreground">Cryoskin / Cryo Therapy</h3>
                    <p className="text-secondary text-sm font-semibold uppercase tracking-wide">Our Specialty</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Cryoskin uses cold temperatures to permanently destroy fat cells, improve skin tone, and reduce the appearance of cellulite — with NO downtime, surgery, or discomfort. A safe & effective way to help your body respond when diet and exercise aren't enough.
                </p>
                <ul className="space-y-3">
                  {CRYOSKIN_SERVICES.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0"></div>
                      <div>
                        <span className="font-semibold text-foreground">{item.name}</span>
                        <span className="text-muted-foreground text-sm"> — {item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground italic">Pricing varies by area & package. Contact us for a free consultation.</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Facials + Add-Ons side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Facials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-border/50 shadow-lg overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/service-facial.png`} 
                  alt="Facial Treatments"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display">Facial Treatments</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">Corrective • Lifting • Brightening</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {FACIAL_SERVICES.map((item, i) => (
                    <li key={i} className="flex items-start justify-between gap-2 py-1.5 border-b border-border/30 last:border-0">
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.name}</p>
                        <p className="text-muted-foreground text-xs">{item.description}</p>
                      </div>
                      {item.price && (
                        <span className="text-primary font-bold text-sm shrink-0">{item.price}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Add-Ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-border/50 shadow-lg overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/service-addons.png`} 
                  alt="Treatment Add-Ons"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <PlusCircle className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-display">Treatment Add-Ons</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">Enhance any service for amplified results</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {ADDON_SERVICES.map((item, i) => (
                    <li key={i} className="flex items-start justify-between gap-2 py-1.5 border-b border-border/30 last:border-0">
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.name}</p>
                        <p className="text-muted-foreground text-xs">{item.description}</p>
                      </div>
                      {item.price && (
                        <span className="text-primary font-bold text-sm shrink-0">+{item.price}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground italic">Add-on prices are in addition to the base service price.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
