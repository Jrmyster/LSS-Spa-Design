import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Snowflake, Sparkles, PlusCircle, FileText } from "lucide-react";
import { Link } from "wouter";
import { RfFAQ } from "@/components/sections/RfFAQ";

const CRYOSKIN_SERVICES = [
  { name: "CryoSlimming", description: "Permanently destroy fat cells & slim targeted areas", price: null },
  { name: "CryoToning", description: "Tighten skin, reduce cellulite & tone skin", price: null },
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

        {/* ── Multi-Polar RF with Red LED — Body ── */}
        <motion.div
          id="rf-treatments"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8"
        >
          <Card className="border-border/50 shadow-lg overflow-hidden">
            <CardHeader className="pb-3 bg-gradient-to-r from-sky-50/60 to-violet-50/40 border-b border-border/30">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl font-display leading-snug">
                    Multi-Polar RF with Red LED{" "}
                    <span className="text-base font-sans font-semibold text-muted-foreground">(For Body)</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-0.5">Skin Rejuvenation · Tightening · Toning · Collagen Enhancement</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-5">
              {/* Main description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Reverse the signs of aging at the cellular level. For skin rejuvenation, tightening, lifting, toning &amp; collagen enhancement and more.
              </p>

              {/* Bullet points */}
              <ul className="space-y-3.5 mb-7">
                {[
                  {
                    feature: "Skin Tightening & Lifting",
                    detail: "Multi-polar RF uses gentle heat to stimulate fibroblasts, which increases collagen and elastin production, resulting in firmer, lifted skin.",
                  },
                  {
                    feature: "Enhanced Collagen Production",
                    detail: "Red LED light penetrates the dermis to enhance collagen and elastin production, boosting skin density.",
                  },
                  {
                    feature: "Skin Rejuvenation & Tone",
                    detail: "Improves overall appearance and enhances circulation for a revitalized, youthful appearance.",
                  },
                ].map((item) => (
                  <li key={item.feature} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                    <p className="text-sm leading-snug text-foreground">
                      <strong className="font-semibold text-foreground">{item.feature}:</strong>{" "}
                      <span className="text-muted-foreground">{item.detail}</span>
                    </p>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="border-t border-border/40 pt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Pricing</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                  {/* Single session */}
                  <div className="rounded-xl border border-border/50 bg-white px-4 py-3.5 flex flex-col gap-0.5 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Single Session</p>
                    <p className="text-2xl font-black text-primary leading-none">$350</p>
                  </div>

                  {/* Series of 5 */}
                  <div className="rounded-xl border-2 border-sky-300 bg-sky-50/60 px-4 py-3.5 flex flex-col gap-0.5 shadow-sm relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-[9px] font-extrabold uppercase tracking-wider bg-sky-500 text-white px-2 py-0.5 rounded-full">
                      Best Value
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-sky-700">Series of 5</p>
                    <p className="text-2xl font-black text-sky-700 leading-none">$1,500</p>
                    <p className="text-[11px] text-sky-600 font-semibold">+1 session FREE — save $600!</p>
                  </div>

                  {/* Series of 10 */}
                  <div className="rounded-xl border-2 border-violet-300 bg-violet-50/60 px-4 py-3.5 flex flex-col gap-0.5 shadow-sm relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-[9px] font-extrabold uppercase tracking-wider bg-violet-500 text-white px-2 py-0.5 rounded-full">
                      Max Savings
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-violet-700">Series of 10</p>
                    <p className="text-2xl font-black text-violet-700 leading-none">$2,950</p>
                    <p className="text-[11px] text-violet-600 font-semibold">+1 session FREE — save $900!</p>
                  </div>
                </div>

                {/* Book Now CTA */}
                <a
                  href="https://lss-spa-wellness-llc.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold bg-sky-600 text-white shadow-md hover:bg-sky-700 transition-colors min-h-[48px]"
                >
                  Book Now
                </a>
              </div>
            </CardContent>
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
        {/* ── Facial Enhancements & Add-Ons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <Card className="border-border/50 shadow-md overflow-hidden">
            <CardHeader className="pb-2 bg-gradient-to-r from-rose-50/50 to-pink-50/30 border-b border-border/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                  <PlusCircle className="w-4 h-4 text-rose-500" />
                </div>
                <div>
                  <CardTitle className="text-lg font-display leading-snug">Facial Enhancements &amp; Add-Ons</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">Standalone enhancements available with your service</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "Chemical Peel", price: "$65" },
                  { name: "Nu Face", price: "$30" },
                  { name: "Cold Hammer", price: "$50" },
                  { name: "PRP Pen", price: "$120" },
                ].map((item) => (
                  <div key={item.name} className="rounded-xl border border-border/50 bg-white px-3 py-3 flex flex-col gap-0.5 shadow-sm text-center">
                    <p className="text-xs font-semibold text-foreground leading-snug">{item.name}</p>
                    <p className="text-lg font-black text-primary leading-none">{item.price}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ── Multi-Polar RF with Red LED — Featured Service Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8"
        >
          <Card className="border-border/50 shadow-lg overflow-hidden">
            <CardHeader className="pb-3 bg-gradient-to-r from-violet-50/60 to-rose-50/40 border-b border-border/30">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl font-display leading-snug">
                    Multi-Polar RF with Red LED{" "}
                    <span className="text-base font-sans font-semibold text-muted-foreground">(For Face)</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-0.5">Skin Rejuvenation · Tightening · Collagen Enhancement</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-5">
              {/* Main description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                For skin rejuvenation, tightening, lifting, fine line and wrinkle removal, collagen enhancement and more.
              </p>

              {/* Option 1 — Instant Lift pitch */}
              <div className="mb-6 rounded-xl bg-violet-50/70 border border-violet-100 overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-0">
                  {/* RF wand image */}
                  <div className="sm:w-44 shrink-0">
                    <img
                      src={`${import.meta.env.BASE_URL}images/multi-polar-rf-wand.jpg`}
                      alt="Close-up of a Multi-polar RF machine and glowing red LED wand used for skin treatments."
                      className="w-full h-48 sm:h-full object-cover object-center"
                    />
                  </div>
                  {/* Text */}
                  <div className="px-5 py-4">
                    <p className="text-sm font-bold text-foreground mb-2 leading-snug">
                      The Non-Surgical Facelift: Multi-Polar RF Skin Tightening with Red LED Light Therapy.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Experience the future of firming. Our Multi-Polar Radio Frequency treatment is a non-invasive way to tighten sagging skin and smooth fine lines with zero downtime. By gently heating the deeper layers of your skin, we stimulate your body's natural collagen production, leaving you with a lifted, youthful glow. Perfect for the face, jawline, and neck. While Red LED light stimulates cellular repair in the epidermis, resulting in improved texture, firmness, and reduced wrinkles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Benefits subheading + bullet points */}
              <p className="text-sm font-bold text-foreground mb-3">Key Benefits &amp; Functions:</p>
              <ul className="space-y-3.5 mb-7">
                {[
                  {
                    feature: "Skin Tightening & Lifting",
                    detail: "Multi-polar RF uses gentle heat to stimulate fibroblasts, which increases collagen and elastin production, resulting in firmer, lifted skin.",
                  },
                  {
                    feature: "Wrinkle Reduction",
                    detail: "The combination of technologies fills in, reduces, and smooths out fine lines.",
                  },
                  {
                    feature: "Enhanced Collagen Production",
                    detail: "Red LED light penetrates the dermis to enhance collagen and elastin production, boosting skin density.",
                  },
                  {
                    feature: "Skin Rejuvenation & Tone",
                    detail: "Improves overall complexion and enhances circulation for a revitalized, youthful appearance.",
                  },
                ].map((item) => (
                  <li key={item.feature} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0" />
                    <p className="text-sm leading-snug text-foreground">
                      <strong className="font-semibold text-foreground">{item.feature}:</strong>{" "}
                      <span className="text-muted-foreground">{item.detail}</span>
                    </p>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="border-t border-border/40 pt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">Pricing</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Single session */}
                  <div className="rounded-xl border border-border/50 bg-white px-4 py-3.5 flex flex-col gap-0.5 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Single Session</p>
                    <p className="text-2xl font-black text-primary leading-none">$200</p>
                  </div>

                  {/* Facial upgrade */}
                  <div className="rounded-xl border border-border/50 bg-white px-4 py-3.5 flex flex-col gap-0.5 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Upgrade to a Facial</p>
                    <p className="text-2xl font-black text-primary leading-none">$175</p>
                    <p className="text-[11px] text-muted-foreground">Total: $255 with facial</p>
                  </div>

                  {/* Series of 5 */}
                  <div className="rounded-xl border-2 border-violet-300 bg-violet-50/60 px-4 py-3.5 flex flex-col gap-0.5 shadow-sm relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-[9px] font-extrabold uppercase tracking-wider bg-violet-500 text-white px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-violet-700">Series of 5</p>
                    <p className="text-2xl font-black text-violet-700 leading-none">$1,000</p>
                    <p className="text-[11px] text-violet-600 font-semibold">
                      +1 session FREE — save $200!
                    </p>
                  </div>

                  {/* Series of 10 */}
                  <div className="rounded-xl border-2 border-violet-400 bg-violet-100/60 px-4 py-3.5 flex flex-col gap-0.5 shadow-sm relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-[9px] font-extrabold uppercase tracking-wider bg-violet-700 text-white px-2 py-0.5 rounded-full">
                      Best Value
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-violet-800">Series of 10</p>
                    <p className="text-2xl font-black text-violet-800 leading-none">$1,900</p>
                    <p className="text-[11px] text-violet-700 font-semibold">+1 session FREE — save $300!</p>
                  </div>
                </div>
              </div>

              {/* RF FAQ accordion */}
              <RfFAQ />

              {/* Professional Products callout */}
              <div className="mt-7 rounded-xl border border-violet-100 bg-violet-50/40 overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center gap-5 px-5 py-5">
                  <img
                    src={`${import.meta.env.BASE_URL}images/clarity-rx-lip-treatment.jpg`}
                    alt="Clarity Rx Daily Dose of Water Lip Treatment and branded canvas spa bag."
                    className="w-full sm:w-40 h-40 object-cover object-center rounded-xl shrink-0 shadow-sm"
                  />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-violet-500 mb-1">Professional Products</p>
                    <p className="text-sm font-bold text-foreground mb-1.5 leading-snug">ClarityRx — Plant-Based. Results-Driven.</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We use and recommend ClarityRx professional skincare to complement your treatment. Their Daily Dose of Water Lip Treatment conditions and hydrates, keeping skin nourished and comfortable after your session.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

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
            {/* 3-col on lg: product shelf | clinical station | text
                2-col on sm: both photos side-by-side, text full-width below
                1-col on mobile: photos then text stacked */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

              {/* Photo 1 — expert-curated product shelf (restored) */}
              <div className="relative h-64 sm:h-72 lg:h-auto lg:min-h-[300px] overflow-hidden group">
                <img
                  src={`${import.meta.env.BASE_URL}images/spapic7.jpg`}
                  alt="Clarity and Image Skincare professional product display shelf at LSS Spa &amp; Wellness — serums, moisturizers and clinical-grade skincare beneath decorative wall art"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-3 pt-8">
                  <p className="text-white text-[11px] font-semibold tracking-wide font-sans drop-shadow-sm">
                    Expert-Curated Skincare Lines
                  </p>
                </div>
              </div>

              {/* Photo 2 — clinical treatment station */}
              <div className="relative h-64 sm:h-72 lg:h-auto lg:min-h-[300px] overflow-hidden group">
                <img
                  src={`${import.meta.env.BASE_URL}images/spapic10.jpg`}
                  alt="LSS Spa &amp; Wellness clinical treatment station — Diamond Glow™ console, CryoSkin technology, Clarity and Image Skincare product shelf, and white cabinetry in Menomonee Falls WI"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-3 pt-8">
                  <p className="text-white text-[11px] font-semibold tracking-wide font-sans drop-shadow-sm">
                    Clinical Treatment Station
                  </p>
                </div>
              </div>

              {/* Text column — spans full width on sm, single col on lg */}
              <div className="p-8 flex flex-col justify-center sm:col-span-2 lg:col-span-1">
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
                  Discover our specialized treatment environment, featuring the advanced{" "}
                  <strong className="text-foreground">Diamond Glow™</strong> console (which simultaneously exfoliates, infuses, and extracts), localized{" "}
                  <strong className="text-foreground">CryoSkin</strong> technology, and an expert-curated
                  selection of <strong className="text-foreground">Clarity</strong> and{" "}
                  <strong className="text-foreground">Image Skincare</strong> lines for definitive,
                  results-driven skin correction.
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

        {/* Image Skincare product line highlights */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5 text-center">
            Featured Image Skincare Lines
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Daily Prevention */}
            <div className="group rounded-2xl overflow-hidden border border-border/50 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/skincare-dailyprevention.jpg`}
                  alt="Image Skincare Daily Prevention SPF products displayed at LSS Spa &amp; Wellness — broad-spectrum UV protection line"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4 border-t border-border/30">
                <p className="text-sm font-semibold text-foreground font-sans">Daily Prevention™</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">
                  Advanced hydrating sun protection.
                </p>
              </div>
            </div>

            {/* Vital C */}
            <div className="group rounded-2xl overflow-hidden border border-border/50 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/skincare-vitalc.jpg`}
                  alt="Image Skincare Vital C product line displayed at LSS Spa &amp; Wellness — high-potency Vitamin C brightening and hydration collection"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4 border-t border-border/30">
                <p className="text-sm font-semibold text-foreground font-sans">Vital C™</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">
                  High-potency Vitamin C for skin brightening and hydration.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
