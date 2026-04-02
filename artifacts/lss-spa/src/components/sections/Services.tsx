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
          <Card
            className="overflow-hidden shadow-[0_8px_40px_rgba(30,90,140,0.13)] border border-[#b8ccd8]"
            style={{ background: "#f4f7f9" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left column — real-life equipment photo (spapic1) with spotlight tooltip */}
              <div className="group/cryo relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/spapic1.jpg`}
                  alt="CryoSkin 3.0 machine at LSS Spa &amp; Wellness Menomonee Falls, WI — handpiece and Artemis Thermal Gel"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/cryo:scale-[1.03]"
                />

                {/* ⓘ info badge — always visible */}
                <span className="absolute top-3 right-3 w-6 h-6 rounded-full bg-black/60 text-white text-[11px] font-bold flex items-center justify-center select-none cursor-default shadow-sm">
                  ⓘ
                </span>

                {/* Crisp white inset border + icy glow over the image */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_2px_rgba(255,255,255,0.85),inset_0_0_24px_rgba(186,224,255,0.18)]" />

                {/* Subtle bottom gradient — visible in idle state */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                {/* Spotlight caption — slides up from bottom on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-sm px-6 py-5 translate-y-full group-hover/cryo:translate-y-0 transition-transform duration-300 ease-out">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-sky-300 mb-1.5 font-sans">
                    The Industry Standard
                  </p>
                  <p className="text-white text-sm font-sans leading-relaxed">
                    Our CryoSkin 3.0 device uses precise sub-zero temperatures to destroy fat cells and tighten skin — the leading non-invasive alternative to traditional body contouring.
                  </p>
                  <p className="text-sky-200/60 text-[10px] font-sans mt-2 uppercase tracking-widest">
                    CryoSkin 3.0 &amp; Artemis Thermal Gel
                  </p>
                </div>
              </div>

              {/* Right column — text content, service bullets, no thumbnail */}
              <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-[#eaf3f8] to-[#f4f7f9]">
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

                {/* Service list — clean, uninterrupted */}
                <ul className="space-y-4 mb-6">
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
                  alt="Corrective facial skincare treatments at LSS Spa &amp; Wellness, Menomonee Falls WI"
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
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/spapic8.jpg`} 
                  alt="Official Diamond Glow™ machine console on cart at LSS Spa &amp; Wellness, Menomonee Falls WI — medical-grade exfoliation, extraction and serum infusion technology"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Diamond Glow™ badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300">
                    <Sparkles className="w-3 h-3" />
                    Official Diamond Glow™ Technology — Now Available!
                  </span>
                </div>
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

        {/* Professional Products — two-column card: photo left, expert copy right, CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14"
        >
          <Card className="overflow-hidden border-border/50 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: actual product shelf photo */}
              <div className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/spapic7.jpg`}
                  alt="Clarity and Image Skincare professional product display shelf at LSS Spa &amp; Wellness, Menomonee Falls WI — serums, moisturizers and clinical-grade skincare lined up beneath decorative wall art"
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Right: heading, description, CTA */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-foreground">Professional Products</h3>
                    <p className="text-primary text-sm font-semibold uppercase tracking-wide">Clinical Grade Skincare</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Great results don't end when you leave the treatment room. That's why we carry
                  clinician-vetted brands like <strong className="text-foreground">Image Skincare</strong> and{" "}
                  <strong className="text-foreground">Clarity</strong> — professional-grade formulas designed
                  to protect and prolong your results at home. Proper post-care isn't optional; it's the
                  difference between a good treatment and a lasting transformation.
                </p>

                <div className="mt-5 text-center lg:text-left">
                  <a
                    href="https://lss-spa-wellness-llc.square.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase bg-primary text-primary-foreground shadow-md hover:brightness-105 transition-all duration-200"
                  >
                    Experience Clinical Care
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
