import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Snowflake, Sparkles, PlusCircle, FileText } from "lucide-react";
import { Link } from "wouter";

const CRYOSKIN_SERVICES = [
  { name: "CryoSlimming", description: "Permanently destroy fat cells & slim targeted areas", price: null },
  { name: "CryoToning", description: "Tighten skin, reduce cellulite & tone muscles", price: null },
  { name: "CryoFacial", description: "Lift, tighten & brighten your face — takes years off", price: null },
];

const FACIAL_SERVICES = [
  { name: "Classic Facial", description: "Includes signature mask & aroma therapy", price: "$80" },
  { name: "Hydra Facial", description: "Infuses with beneficial comfort & hydration", price: "$100" },
  { name: "Cryo Facial With Coupler", description: "Lifts, Tones, Brightens & Firms — addresses signs of aging", price: "$200" },
  { name: "Cryo Facial Upgrade", description: "Cryo facial upgrade to any Signature Facial. Brightens, tones & firms. Takes years off your skin.", price: "$175" },
  { name: "Cryo Facial 10 Min Add On", description: "Lifts, brightens & tones. Instantly refreshes for your special event", price: "$80" },
  { name: "Cryo Shape or Tone", description: "Lose inches or tighten & tone your body", price: "$350" },
];

interface AddonService { name: string; description: string; price: string; total: string; }
const ADDON_SERVICES: AddonService[] = [
  { name: "Diamond Glow™", description: "Classic facial with DG upgrade. Exfoliates, infuses & extracts.", price: "$130", total: "$210" },
  { name: "LED Light Therapy", description: "Addresses aging, hyperpigmentation, acne & sensitive skin.", price: "$50", total: "$130" },
  { name: "NuFACE® Micro Current", description: "Lifts & firms.", price: "$20", total: "$100" },
  { name: "NuFACE® Fix", description: "Targets smaller areas like eyes & mouth.", price: "$20", total: "$100" },
  { name: "Pro Pen", description: "Intense resurfacing. Addresses aging & acne scars.", price: "$100", total: "$180" },
  { name: "Cold Hammer", description: "Soothes & calms.", price: "$30", total: "$110" },
  { name: "Chemical Peel", description: "Intense exfoliation — ideal for sun-damaged skin, acne & fine lines.", price: "$50", total: "$130" },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            From revolutionary CryoSkin treatments to corrective facials, 
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
                  alt="CryoSkin Therapy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-sky-50 to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Snowflake className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-foreground">CryoSkin / Cryo Therapy</h3>
                    <p className="text-secondary text-sm font-semibold uppercase tracking-wide">Our Specialty</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  CryoSkin uses cold temperatures to permanently destroy fat cells, improve skin tone, and reduce the appearance of cellulite — with NO downtime, surgery, or discomfort. A safe & effective way to help your body respond when diet and exercise aren't enough.
                </p>

                {/* Equipment photo + service list side-by-side */}
                <div className="flex gap-5 items-start mb-4">
                  {/* spapic1: CryoSkin 3.0 machine + thermal gel — with spotlight tooltip */}
                  <div className="shrink-0 w-28 sm:w-32 group/cryo relative">
                    <div className="relative rounded-lg overflow-hidden shadow-md" style={{ aspectRatio: "3 / 4" }}>
                      <img
                        src={`${import.meta.env.BASE_URL}images/spapic1.jpg`}
                        alt="CryoSkin 3.0 machine handpiece and Artemis Thermal Gel used during treatment"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      {/* ⓘ info badge — always visible */}
                      <span className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-black/60 text-white text-[10px] font-bold flex items-center justify-center select-none cursor-default shadow-sm">
                        ⓘ
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground text-center mt-1.5 leading-snug font-sans">
                      CryoSkin 3.0 &amp; Thermal Gel
                    </p>

                    {/* Spotlight tooltip — slides in above on hover */}
                    <div
                      className="
                        pointer-events-none absolute z-30
                        bottom-full left-0 mb-2
                        w-64 rounded-xl shadow-2xl
                        bg-black/85 backdrop-blur-sm
                        px-4 py-3
                        opacity-0 translate-y-1
                        group-hover/cryo:opacity-100 group-hover/cryo:translate-y-0
                        transition-all duration-200
                      "
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest text-sky-300 mb-1.5 font-sans">
                        The Industry Standard
                      </p>
                      <p className="text-white text-[11px] font-sans leading-relaxed">
                        Our CryoSkin 3.0 device uses precise sub-zero temperatures to destroy fat cells and tighten skin. It is the leading non-invasive alternative to traditional body contouring.
                      </p>
                    </div>
                  </div>

                  {/* Service list */}
                  <ul className="flex-1 space-y-3">
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
                </div>

                <p className="text-xs text-muted-foreground italic">Pricing varies by area & package. Contact us for a free consultation.</p>
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
                  loading="lazy"
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
                  loading="lazy"
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
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm">{item.name}</p>
                        <p className="text-muted-foreground text-xs">{item.description}</p>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <p className="text-primary font-bold text-sm">+{item.price}</p>
                        <p className="text-muted-foreground text-[10px]">Total: {item.total}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[11px] text-muted-foreground italic border-t border-border/30 pt-3">
                  * Total cost includes the addition to a Classic Facial.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        {/* Download Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold border-2 border-amber-400 text-amber-700 bg-white hover:bg-amber-50 transition-colors shadow-sm"
          >
            <FileText className="w-4 h-4" />
            📄 Download Full Service &amp; Price Menu
          </Link>
          <p className="text-xs text-muted-foreground mt-3">
            View all services, pricing &amp; Grand Opening packages — printable PDF format
          </p>
        </motion.div>

        {/* Product showcase banner — badge masked by overflow crop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14"
        >
          {/*
            Container height is intentionally set to ~84% of the image's aspect ratio.
            object-position: center top anchors the visible area to the top of the photo,
            so the bottom edge (including the "LSS Spa & Wellness" badge) is hidden
            by the overflow: hidden clip without any hard cutout.
            The gradient overlay softens the bottom edge for a finished look.
          */}
          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-lg"
            style={{ height: "clamp(220px, 42vw, 520px)" }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/image_8.png`}
              alt="Mender skincare product collection — body oils, serums and healing balms arranged with natural stones and botanicals"
              className="absolute inset-0 w-full h-full object-cover object-[center_top]"
              loading="lazy"
            />
            {/* Gradient overlay — fades bottom edge to white, masking the badge zone */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "28%",
                background: "linear-gradient(to top, white 0%, rgba(255,255,255,0.6) 60%, transparent 100%)",
              }}
            />
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3 italic">
            Featured skincare: Mender Body Oil, Healing Balm &amp; more — available at LSS Spa &amp; Wellness
          </p>
        </motion.div>
      </div>
    </section>
  );
}
