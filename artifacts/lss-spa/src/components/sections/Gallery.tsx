import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

interface ResultCard {
  id: number;
  label: string;
  concern: string;
  sessions: string;
  description: string;
  disclaimer: string;
}

const CARDS: ResultCard[] = [
  {
    id: 1,
    label: "Male · Skin Type V",
    concern: "Texture on Forehead & Cheek",
    sessions: "1 Treatment",
    description:
      "Results following 1 DiamondGlow® treatment with SKINMEDICA® HA² Hydra Collagen Pro-Infusion Serum with Vegan Collagen and a curated SkinMedica® skincare regimen.",
    disclaimer: "24 hours post-treatment · Unretouched parallel-polarized lighting photos.",
  },
  {
    id: 2,
    label: "Female · Skin Type II",
    concern: "Texture, Fine Lines & Overall Glow",
    sessions: "3 Treatments",
    description:
      "Results following 3 DiamondGlow® treatments with SKINMEDICA® HA² Hydra Collagen Pro-Infusion Serum with Vegan Collagen administered 2 weeks apart and a curated SkinMedica® skincare regimen.",
    disclaimer: "Treatments spaced 2 weeks apart · Unretouched standard lighting photos.",
  },
  {
    id: 3,
    label: "Female · Skin Type III",
    concern: "Brighter & Smoother Skin",
    sessions: "1 Treatment",
    description:
      "Results following 1 DiamondGlow® treatment with SKINMEDICA® TNS® Advanced+ Pro-Infusion Serum and a curated SkinMedica® skincare regimen.",
    disclaimer: "15 minutes post-treatment · Unretouched parallel-polarized lighting photos.",
  },
  {
    id: 4,
    label: "Female · Skin Type II",
    concern: "Visible Hyperpigmentation",
    sessions: "3 Treatments",
    description:
      "Results following 3 DiamondGlow® treatments with SKINMEDICA® Even & Correct Advanced Brightening Pro-Infusion Serum administered 2 weeks apart and a curated SkinMedica® skincare regimen.",
    disclaimer: "Treatments spaced 2 weeks apart · Unretouched standard lighting photos.",
  },
  {
    id: 5,
    label: "Female · Skin Type III",
    concern: "Congested Skin & Visible Redness",
    sessions: "2 Treatments",
    description:
      "Results following 2 DiamondGlow® treatments with SKINMEDICA® Pore Purifying Pro-Infusion Serum administered 2 weeks apart and a curated SkinMedica® skincare regimen.",
    disclaimer: "Treatments spaced 2 weeks apart · Unretouched standard lighting photos.",
  },
  {
    id: 6,
    label: "Female · Skin Type II",
    concern: "Forehead Lines",
    sessions: "5 Treatments",
    description:
      "Results following 5 DiamondGlow® treatments with SKINMEDICA® TNS® Advanced+ Pro-Infusion Serum administered 2 weeks apart and a curated SkinMedica® skincare regimen.",
    disclaimer: "Treatments spaced 2 weeks apart · Unretouched parallel-polarized lighting photos.",
  },
];

function DiamondGlowCard({ card, index }: { card: ResultCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="flex flex-col rounded-2xl overflow-hidden border-2 border-amber-200 bg-white shadow-md hover:shadow-lg hover:border-amber-400 transition-all duration-300"
    >
      {/* Gold header stripe */}
      <div className="bg-gradient-to-r from-amber-400 to-yellow-300 px-5 py-3 flex items-center justify-between gap-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-900">
          DiamondGlow®
        </span>
        <span className="text-[10px] font-bold bg-white/70 text-amber-800 px-2 py-0.5 rounded-full uppercase tracking-wide">
          {card.sessions}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Skin type tag */}
        <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full mb-3 w-fit">
          {card.label}
        </span>

        {/* Concern */}
        <h3 className="text-base font-display text-foreground leading-snug mb-3">
          {card.concern}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
          {card.description}
        </p>

        {/* Disclaimer */}
        <p className="text-[10px] text-muted-foreground/70 italic leading-snug border-t border-border/40 pt-3">
          {card.disclaimer} Individual results may vary.
        </p>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4 bg-primary/10 px-4 py-1.5 rounded-full"
          >
            Real Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display text-foreground mb-4"
          >
            See the Glow: Real Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Clinical before &amp; after results from DiamondGlow® treatments — real clients,
            real transformations, long-lasting glow.
          </motion.p>
        </div>

        {/* Featured composite before/after photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-3xl overflow-hidden border-2 border-amber-200 shadow-xl shadow-amber-100/50"
        >
          {/* Composite label bar */}
          <div className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="flex items-center gap-2">
              <span className="text-amber-900 font-bold text-sm">DiamondGlow® Results Showcase</span>
              <span className="text-[10px] bg-white/70 text-amber-800 font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">6 Clinical Cases</span>
            </div>
            <span className="text-[10px] text-amber-800 font-semibold">
              Unretouched clinical photography · Individual results may vary
            </span>
          </div>

          <div className="relative bg-stone-900">
            <img
              src={`${BASE}images/diamondglow-results.jpg`}
              alt="DiamondGlow clinical before and after results showing improvement in texture, fine lines, hyperpigmentation, redness, and forehead lines across six patients"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* 6 result cards */}
        <div className="mb-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8"
          >
            Treatment Details — Case by Case
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARDS.map((card, i) => (
              <DiamondGlowCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the DiamondGlow difference?{" "}
            <a
              href="https://lss-spa-wellness-llc.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-semibold underline underline-offset-2 hover:text-secondary/80"
            >
              Book your treatment today
            </a>{" "}
            or{" "}
            <a
              href="tel:+18339245620"
              className="text-secondary underline underline-offset-2 hover:text-secondary/80"
            >
              call (833) 924-5620
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
