import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ResultCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  caption: string;
  description?: string;
  bullets: string[];
  ctaLabel: string;
  /** padding-bottom % to use as a height-constrained image container (hides bottom artifact) */
  imagePaddingBottom?: number;
  /** Optional text strip rendered below the clipped image on a parchment background */
  captionStrip?: string;
  /** Optional inline result photo shown between bullet list and CTA button */
  inlineImage?: { src: string; alt: string; caption: string };
}

const CARDS: ResultCard[] = [
  {
    id: 1,
    title: "CryoToning",
    subtitle: "Forehead Wrinkle Correction — Clinical Results",
    image: "images/cryotherapy-forehead.jpg",
    imageAlt: "CryoToning before and after — forehead wrinkles visibly reduced and skin smoother at LSS Spa & Wellness, Menomonee Falls WI",
    caption: "Before / After",
    description:
      "Focuses on firming the face and smoothing fine lines. By increasing micro-circulation and collagen production, CryoToning visibly reduces forehead wrinkles and restores a youthful, lifted contour.",
    captionStrip: "CryoToning forehead results — before and after showing visibly smoother, wrinkle-reduced skin.",
    bullets: [
      "Visibly Reduce Forehead Wrinkles",
      "Restore Youthful Forehead Contour",
      "Smoother, Firmer-Looking Skin",
    ],
    ctaLabel: "Book a Forehead Toning Session",
    inlineImage: {
      src: "images/shoulder-tone.jpg",
      alt: "CryoToning before and after — shoulder and arm skin tightening showing visible toning results after 1 treatment",
      caption: "Toning and Skin Tightening — Visible Results After 1 Treatment",
    },
  },
  {
    id: 2,
    title: "Cryo-Facial",
    subtitle: "Neck Sagging and Lifting — Clinical Results",
    image: "images/cryotoning-full.jpg",
    imageAlt: "CryoFacial and neck treatment before and after — neck visibly lifted and tightened at LSS Spa & Wellness, Menomonee Falls WI",
    caption: "Before / After",
    bullets: [
      "Firm and Lift Sagging Neck Skin",
      "Reduce the Appearance of 'Turkey Neck'",
      "Smoother, Younger-Looking Profile",
    ],
    ctaLabel: "Schedule Your Cryo-Facial",
    captionStrip: "CryoFacial neck results — before and after showing visibly firmer, lifted skin.",
  },
  {
    id: 3,
    title: "Cryo-Smooth",
    subtitle: "Forehead Results",
    image: "images/cryoforehead.png",
    imageAlt: "Before and after Cryo-Smooth forehead treatment showing visibly reduced wrinkles after 1 treatment",
    caption: "Before / After 1 Treatment",
    bullets: [
      "Visibly Smoother Skin in Minutes",
      "Relax and Reduce Forehead Wrinkles",
      "Restore Youthful Forehead Contour",
    ],
    ctaLabel: "Book a Forehead Smoothing",
  },
];

function ResultCard({ card, index }: { card: ResultCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="flex flex-col rounded-3xl overflow-hidden border border-amber-200/70 bg-white shadow-lg shadow-amber-100/60 hover:shadow-xl hover:shadow-amber-200/70 transition-shadow duration-300"
    >
      {/* Photo — constrained height clips bottom artifact when imagePaddingBottom is set */}
      {card.imagePaddingBottom ? (
        <div
          className="relative w-full overflow-hidden bg-amber-50"
          style={{ height: 0, paddingBottom: `${card.imagePaddingBottom}%` }}
        >
          <img
            src={`${import.meta.env.BASE_URL}${card.image}`}
            alt={card.imageAlt}
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ imageRendering: "crisp-edges" }}
          />
          {/* Caption badge */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm">
            {card.caption}
          </div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden bg-amber-50">
          <img
            src={`${import.meta.env.BASE_URL}${card.image}`}
            alt={card.imageAlt}
            className="w-full object-cover object-top"
            style={{ imageRendering: "crisp-edges" }}
          />
          {/* Caption badge */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm">
            {card.caption}
          </div>
        </div>
      )}

      {/* Parchment caption strip — replaces text removed by crop */}
      {card.captionStrip && (
        <div className="flex items-center justify-center gap-2 bg-[#f3e4c0] border-t border-amber-200 px-4 py-2.5">
          <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
          <p className="text-xs font-bold text-amber-900 text-center tracking-wide">
            {card.captionStrip}
          </p>
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">
            {card.title}
          </p>
          <h3 className="text-xl font-display text-foreground leading-snug">
            {card.subtitle}
          </h3>
        </div>

        {/* Bullet benefits */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {card.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              <span className="text-sm text-muted-foreground leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        {/* Inline result photo (above CTA) */}
        {card.inlineImage && (
          <div className="mb-5 rounded-xl overflow-hidden border border-amber-200/70 shadow-sm">
            <img
              src={`${import.meta.env.BASE_URL}${card.inlineImage.src}`}
              alt={card.inlineImage.alt}
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="bg-[#f3e4c0] border-t border-amber-200 px-3 py-2 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <p className="text-[10px] font-bold text-amber-900 uppercase tracking-wider text-center">
                {card.inlineImage.caption}
              </p>
            </div>
          </div>
        )}

        {/* CTA */}
        <a
          href="https://lss-spa-wellness-llc.square.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full rounded-xl py-3 px-4 text-sm font-bold border-2 border-amber-400 text-amber-700 bg-amber-50 hover:bg-amber-400 hover:text-white hover:border-amber-400 transition-all duration-200 group"
        >
          {card.ctaLabel}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

function FeaturedResultCard({ card, index }: { card: ResultCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="flex flex-col md:flex-row rounded-3xl border border-amber-200/70 bg-white shadow-lg shadow-amber-100/60 hover:shadow-xl hover:shadow-amber-200/70 transition-shadow duration-300 overflow-hidden"
    >
      {/* ── Mobile image: full natural height, no constraints ── */}
      <div className="md:hidden relative bg-amber-50">
        <img
          src={`${import.meta.env.BASE_URL}${card.image}`}
          alt={card.imageAlt}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxHeight: "none",
          }}
          loading="lazy"
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm">
          {card.caption}
        </div>
      </div>

      {/* ── Desktop image: 2/5 column, natural height ── */}
      <div className="hidden md:block relative md:w-2/5 bg-amber-50 shrink-0">
        <img
          src={`${import.meta.env.BASE_URL}${card.image}`}
          alt={card.imageAlt}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxHeight: "none",
          }}
          loading="lazy"
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm">
          {card.caption}
        </div>
      </div>

      {/* Right: content */}
      <div className="flex flex-col flex-1 p-6 md:p-10 justify-center">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">
          {card.title}
        </p>
        <h3 className="text-2xl md:text-3xl font-display text-foreground leading-snug mb-4">
          {card.subtitle}
        </h3>

        {card.description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {card.description}
          </p>
        )}

        {/* Pro-Tip — expert insight note */}
        <p className="text-[11px] italic leading-relaxed mb-5" style={{ color: "#b8922a" }}>
          <span className="font-bold not-italic">Pro-Tip:</span>{" "}
          While results can often be seen after one visit, a series of 3–5 sessions is typically
          recommended to achieve maximum lifting and smoothing effects.
        </p>

        {card.captionStrip && (
          <div className="flex items-center gap-2.5 bg-[#f3e4c0] border border-amber-200 rounded-xl px-4 py-3 mb-5">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
            <p className="text-xs font-bold text-amber-900 tracking-wide italic">
              {card.captionStrip}
            </p>
          </div>
        )}

        <ul className="space-y-2.5 mb-6">
          {card.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              <span className="text-sm text-muted-foreground leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://lss-spa-wellness-llc.square.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl py-3 px-6 text-sm font-bold border-2 border-amber-400 text-amber-700 bg-amber-50 hover:bg-amber-400 hover:text-white transition-all duration-200 min-h-[48px] group"
        >
          {card.ctaLabel}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

interface CryoskinShowcaseProps {
  /** If true, shows the full header with badge; set false when embedded in a standalone page */
  showHeader?: boolean;
}

export function CryoskinShowcase({ showHeader = true }: CryoskinShowcaseProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-amber-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4"
            >
              Our Results Showcase
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-display text-foreground mb-3"
            >
              Transformation Gallery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-display italic text-amber-600 mb-3"
            >
              Glow. Lift. Sculpt.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground"
            >
              Industry-leading technology delivering visible, transformative outcomes.
            </motion.p>
          </div>
        )}

        {/* Featured Cryo-Toning card — full width, horizontal layout */}
        <div className="mb-6 lg:mb-8">
          <FeaturedResultCard card={CARDS[0]} index={0} />
        </div>

        {/* Remaining cards — Cryo-Facial & Cryo-Smooth side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CARDS.slice(1).map((card, i) => (
            <ResultCard key={card.id} card={card} index={i + 1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://lss-spa-wellness-llc.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-bold text-sm border-2 border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors shadow-sm"
          >
            Book Your Transformation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
