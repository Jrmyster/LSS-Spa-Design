import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ResultCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  caption: string;
  bullets: string[];
  ctaLabel: string;
  /** padding-bottom % to use as a height-constrained image container (hides bottom artifact) */
  imagePaddingBottom?: number;
  /** Optional text strip rendered below the clipped image on a parchment background */
  captionStrip?: string;
}

const CARDS: ResultCard[] = [
  {
    id: 1,
    title: "Cryo-Toning",
    subtitle: "Neck Results",
    image: "images/cryotoning.png",
    imageAlt: "Before and after Cryo-Toning neck treatment showing lifted, firmer skin",
    caption: "Before / Now",
    bullets: [
      "Firm and Lift Sagging Neck Skin",
      "Reduce the Appearance of 'Turkey Neck'",
      "Smoother, Younger-Looking Profile",
    ],
    ctaLabel: "Book a Neck Toning Consultation",
  },
  {
    id: 2,
    title: "Cryo-Facial",
    subtitle: "Skin Texture & Fine Lines",
    image: "images/cryofacial.png",
    imageAlt: "CryoFacial before and after — crow's feet, skin tone, and fine lines visibly improved after 1 treatment",
    caption: "Before / After 2 Treatments",
    bullets: [
      "Boosts Collagen for a firmer, lifted look",
      "Smooths Crow's Feet & Fine Lines",
      "Reduces Weak Tone — visible after 1 session",
    ],
    ctaLabel: "Schedule Your Cryo-Facial",
    // 295×711px image — clip bottom ~20% to remove page-indicator artifact
    // padding-bottom: top 80% of image = 711*0.80/295*100 ≈ 193%
    imagePaddingBottom: 193,
    captionStrip: "Visible Skin Clarity · After Just 2 Treatments",
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
              Real Results, Real People. See what CryoSkin can do for you.
            </motion.p>
          </div>
        )}

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card, i) => (
            <ResultCard key={card.id} card={card} index={i} />
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/cryoskin-results"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-bold text-sm bg-foreground text-white hover:bg-foreground/85 transition-colors shadow-md"
          >
            View All Cryoskin Results
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://lss-spa-wellness-llc.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-bold text-sm border-2 border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors"
          >
            Book Your Transformation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
