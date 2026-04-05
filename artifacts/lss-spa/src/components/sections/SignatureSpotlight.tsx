import { motion } from "framer-motion";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";

interface SpotlightItem {
  badge: string;
  headline: string;
  hook: string;
  description: string;
  bestFor: string;
  ctaLabel: string;
  imageUrl: string;
  imageAlt: string;
  flip: boolean;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  spotlight?: { label: string; body: string };
  /** Show image at natural aspect ratio (h-auto) instead of a fixed crop height */
  naturalHeight?: boolean;
  /** Hide the floating "LSS Spa & Wellness" chip so the equipment view is unobstructed */
  hideChip?: boolean;
  /** Optional second image shown stacked above the primary image */
  secondImageUrl?: string;
  secondImageAlt?: string;
  secondImageCaption?: string;
  /** Optional persistent caption bar displayed below the primary (console) image */
  imageCaption?: string;
}

const SPOTLIGHTS: SpotlightItem[] = [
  {
    badge: "Client Favorite",
    headline: "The Diamond Glow™ Experience",
    hook: "More than a facial. A transformation.",
    description:
      "This next-level treatment simultaneously exfoliates, extracts, and infuses the skin with professional-grade serums. It's designed to improve skin health, leaving you with a radiant, lasting glow.",
    bestFor: "Deep cleaning, hydration, and an instant 'red-carpet' finish.",
    ctaLabel: "Experience the Glow",
    imageUrl: `${import.meta.env.BASE_URL}images/diamondglow-console.jpg`,
    imageAlt: "Official Diamond Glow™ console and branded cart inside LSS Spa & Wellness, Menomonee Falls WI — professional-grade 3-in-1 skin resurfacing system",
    flip: false,
    accentColor: "amber",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
    hideChip: true,
    spotlight: {
      label: "More Than a Facial",
      body: "The Diamond Glow™ system is a 3-in-1 advanced skin resurfacing treatment that simultaneously exfoliates, extracts, and infuses skin with professional-grade serums while pores are open and receptive.",
    },
    secondImageUrl: `${import.meta.env.BASE_URL}images/diamondglow-station.jpg`,
    secondImageAlt: "Diamond Glow™ treatment station — full suite context with medical-grade technology, Clarity and Image Skincare product lines at LSS Spa & Wellness, Menomonee Falls WI",
    secondImageCaption: "Your specialized treatment station for advanced dermal infusion, featuring medical-grade technology, Clarity and Image Skincare lines, and a tranquil atmosphere.",
    imageCaption: "Diamond Glow™ dermal infusion console close-up — medical-grade technology at LSS Spa & Wellness, Menomonee Falls WI.",
  },
  {
    badge: "Top Rated",
    headline: "Sculpt & Tone with CryoSkin",
    hook: "Science-backed cold therapy for real results.",
    description:
      "Use the power of sub-zero temperatures to naturally boost collagen production and improve skin elasticity. Perfect for firming sagging skin and reducing the appearance of cellulite or 'turkey neck.'",
    bestFor: "Firming, lifting, and body contouring without the downtime.",
    ctaLabel: "Start Your Transformation",
    imageUrl: `${import.meta.env.BASE_URL}images/spapic1.jpg`,
    imageAlt: "CryoSkin machine at LSS Spa & Wellness, Menomonee Falls WI — professional-grade cryo therapy system for toning, slimming and facial treatments",
    flip: true,
    accentColor: "sky",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
  },
];

function SpotlightCard({ item, index }: { item: SpotlightItem; index: number }) {
  const textCol = (
    <motion.div
      initial={{ opacity: 0, x: item.flip ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      {/* Gold badge */}
      <div className="flex items-center gap-2 mb-5">
        <span
          className={`inline-flex items-center gap-1.5 ${item.badgeBg} ${item.badgeText} text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-amber-200`}
        >
          <Star className="w-3 h-3 fill-current" />
          {item.badge}
        </span>
      </div>

      {/* Hook */}
      <p
        className={`text-sm font-semibold italic mb-2 ${
          item.accentColor === "sky" ? "text-sky-600" : "text-amber-600"
        }`}
      >
        {item.hook}
      </p>

      {/* Headline */}
      <h2 className="text-3xl sm:text-4xl font-display text-foreground leading-tight mb-5">
        {item.headline}
      </h2>

      {/* Description */}
      <p className="text-base text-muted-foreground leading-relaxed mb-6">
        {item.description}
      </p>

      {/* Best For */}
      <div className="flex items-start gap-3 mb-8 p-4 rounded-xl bg-muted/40 border border-border/60">
        <CheckCircle2
          className={`w-5 h-5 mt-0.5 shrink-0 ${
            item.accentColor === "sky" ? "text-sky-500" : "text-amber-500"
          }`}
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
            Best For
          </p>
          <p className="text-sm text-foreground font-medium">{item.bestFor}</p>
        </div>
      </div>

      {/* CTA */}
      <div>
        <a
          href="https://lss-spa-wellness-llc.square.site/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold shadow-lg transition-all duration-200 group ${
            item.accentColor === "sky"
              ? "bg-sky-600 text-white shadow-sky-200/60 hover:bg-sky-700 hover:shadow-sky-300/70"
              : "bg-amber-500 text-white shadow-amber-200/60 hover:bg-amber-600 hover:shadow-amber-300/70"
          }`}
        >
          {item.ctaLabel}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );

  const imageCol = (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
      className="relative"
    >
      {/* Decorative accent blob behind image */}
      <div
        className={`absolute -inset-4 rounded-3xl blur-2xl opacity-30 pointer-events-none ${
          item.accentColor === "sky" ? "bg-sky-200" : "bg-amber-200"
        }`}
      />

      {item.secondImageUrl ? (
        /* ── Two-image stacked layout ── */
        <div className="flex flex-col gap-4">

          {/* Asset 2: context / station photo (top) */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-200/60 group">
            <img
              src={item.secondImageUrl}
              alt={item.secondImageAlt}
              className="w-full h-[220px] sm:h-[260px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Gradient + caption bar */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-8">
              {item.secondImageCaption && (
                <p className="text-white text-[11px] leading-snug font-sans">
                  {item.secondImageCaption}
                </p>
              )}
            </div>
          </div>

          {/* Asset 1: tech / console photo (bottom, featured) */}
          <div className="rounded-2xl overflow-hidden border border-amber-300/70 shadow-xl">
            <div className="relative group">
              <img
                src={item.imageUrl}
                alt={item.imageAlt}
                className="w-full h-[220px] sm:h-[260px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Subtle gradient */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Spotlight caption — slides up on hover */}
              {item.spotlight && (
                <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-sm px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5 font-sans text-amber-300">
                    {item.spotlight.label}
                  </p>
                  <p className="text-white text-xs font-sans leading-relaxed">
                    {item.spotlight.body}
                  </p>
                </div>
              )}

              {/* Featured tech badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 bg-amber-400/90 backdrop-blur-sm text-amber-900 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm">
                  <Star className="w-2.5 h-2.5 fill-current" />
                  Featured Technology
                </span>
              </div>
            </div>

            {/* Persistent caption bar below console photo */}
            {item.imageCaption && (
              <div className="bg-black/80 px-4 py-3">
                <p className="text-white text-[11px] leading-snug font-sans">
                  {item.imageCaption}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ── Single-image layout (all other spotlights) ── */
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 group">
          <img
            src={item.imageUrl}
            alt={item.imageAlt}
            className={`w-full transition-transform duration-500 group-hover:scale-[1.03] ${
              item.naturalHeight
                ? "h-auto block"
                : "h-[420px] sm:h-[480px] object-cover object-center"
            }`}
            loading="lazy"
          />

          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Floating label chip — hidden when hideChip is set */}
          {!item.hideChip && (
            <div className="absolute bottom-5 left-5 group-hover:opacity-0 transition-opacity duration-200">
              <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/60">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                LSS Spa &amp; Wellness
              </span>
            </div>
          )}

          {/* Spotlight caption — slides up from bottom on hover */}
          {item.spotlight && (
            <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-sm px-6 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <p
                className={`text-[10px] font-bold uppercase tracking-widest mb-2 font-sans ${
                  item.accentColor === "sky" ? "text-sky-300" : "text-amber-300"
                }`}
              >
                {item.spotlight.label}
              </p>
              <p className="text-white text-sm font-sans leading-relaxed">
                {item.spotlight.body}
              </p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        index > 0 ? "pt-20 border-t border-border/40" : ""
      }`}
    >
      {item.flip ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </div>
  );
}

export function SignatureSpotlight() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 mb-4"
          >
            ✦ Signature Services Spotlight ✦
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display text-foreground mb-4"
          >
            Our Most Loved Treatments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Expertly performed by Kim Collins, Licensed Esthetician — in Menomonee Falls, WI.
          </motion.p>
        </div>

        {/* Spotlight cards */}
        <div className="space-y-0">
          {SPOTLIGHTS.map((item, i) => (
            <SpotlightCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
