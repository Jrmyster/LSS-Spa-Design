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
    imageUrl: `${import.meta.env.BASE_URL}images/spapic6.jpg`,
    imageAlt: "Diamond Glow™ infusion machine inside the LSS Spa treatment room",
    flip: false,
    accentColor: "amber",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
  },
  {
    badge: "Top Rated",
    headline: "Sculpt & Tone with CryoSkin",
    hook: "Science-backed cold therapy for real results.",
    description:
      "Use the power of sub-zero temperatures to naturally boost collagen production and improve skin elasticity. Perfect for firming sagging skin and reducing the appearance of cellulite or 'turkey neck.'",
    bestFor: "Firming, lifting, and body contouring without the downtime.",
    ctaLabel: "Start Your Transformation",
    imageUrl:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=900&q=90&auto=format&fit=crop",
    imageAlt: "CryoSkin toning and sculpting treatment session",
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

      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60">
        <img
          src={item.imageUrl}
          alt={item.imageAlt}
          className="w-full h-[420px] sm:h-[480px] object-cover object-center"
          loading="lazy"
        />

        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Floating label chip */}
        <div className="absolute bottom-5 left-5">
          <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/60">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            LSS Spa &amp; Wellness
          </span>
        </div>
      </div>
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
