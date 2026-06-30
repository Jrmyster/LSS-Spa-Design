import { motion } from "framer-motion";
import { CalendarCheck, Zap, Star, Clock, AlertCircle } from "lucide-react";

const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";

const HOW_IT_WORKS = [
  {
    title: "The Process",
    body: "A licensed provider uses a device (often a motorized, pen-like tool) to repeatedly puncture the top layers of the skin with tiny needles.",
  },
  {
    title: "The Healing",
    body: "These micro-injuries stimulate dermal remodeling. As your skin heals, it ramps up the production of structural proteins (collagen and elastin), resulting in firmer, smoother skin.",
  },
  {
    title: "Product Absorption",
    body: "The micro-channels created by the needles allow active skincare ingredients (like hyaluronic acid or serums) to penetrate much deeper into the skin.",
  },
];

const BENEFITS = [
  "Reduces the appearance of fine lines and wrinkles",
  "Diminishes acne scars and surgical scars",
  "Improves enlarged pores and uneven skin tone or texture",
  "Softens stretch marks",
];

const WHAT_TO_EXPECT = [
  {
    title: "The Session",
    body: "A topical numbing cream is typically applied 30–45 minutes prior to the procedure to ensure comfort. A session usually takes 30 to 60 minutes.",
  },
  {
    title: "Results",
    body: "Results are not immediate, as collagen production takes time. Patients typically see optimal results 4 to 6 weeks after their session.",
  },
  {
    title: "Downtime & Side Effects",
    body: "Immediately after the procedure, your skin will look and feel like you have a moderate sunburn. Redness, swelling, and mild sensitivity generally resolve within 24 to 48 hours.",
  },
];

export function MicroneedlingSpotlight() {
  return (
    <section id="microneedling" className="relative py-20 overflow-hidden bg-gradient-to-b from-rose-50/40 via-white to-white">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-rose-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-pink-50/60 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px bg-border/40" />
          <div className="flex items-center gap-2 shrink-0 bg-rose-50 border border-rose-200 rounded-full px-4 py-1.5">
            <Zap className="w-3.5 h-3.5 text-rose-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Now Offering</span>
          </div>
          <div className="flex-1 h-px bg-border/40" />
        </motion.div>

        {/* Hero row: image + intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-border/30"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/microneedling.jpg`}
              alt="Gloved hand performing microneedling on a client's forehead"
              style={{ maxWidth: "100%", height: "auto" }}
              className="w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="flex items-baseline gap-4 mb-4">
              <h2 className="text-4xl md:text-5xl font-display text-foreground leading-tight">Microneedling</h2>
              <span className="text-2xl font-black text-primary">$375</span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Microneedling is a minimally invasive cosmetic procedure that uses fine needles to create controlled micro-injuries in the skin. This process triggers the body's natural healing response, boosting collagen and elastin production to smooth out wrinkles, reduce acne scars, and improve overall texture.
            </p>
          </motion.div>
        </div>

        {/* Detail grid: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* HOW IT WORKS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.0 }}
            className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-violet-600" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wide">⚙️ How It Works</h3>
            </div>
            <div className="space-y-4">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.title}>
                  <p className="font-semibold text-sm text-foreground mb-0.5">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BENEFITS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wide">✨ Benefits</h3>
            </div>
            <ul className="space-y-2.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-0.5 shrink-0">✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* WHAT TO EXPECT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-sky-600" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wide">⏰ What to Expect</h3>
            </div>
            <div className="space-y-4">
              {WHAT_TO_EXPECT.map((item) => (
                <div key={item.title}>
                  <p className="font-semibold text-sm text-foreground mb-0.5">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Important considerations banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-start gap-4 rounded-2xl bg-amber-50 border border-amber-200 px-6 py-5 mb-10"
        >
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
            <AlertCircle className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <p className="font-bold text-sm text-amber-900 mb-1">💡 Important Considerations</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              A series of <strong>3 to 6 treatments</strong>, spaced <strong>4 to 6 weeks apart</strong>, is recommended to achieve the best results.
            </p>
          </div>
        </motion.div>

        {/* Book Now CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-center"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-secondary text-white font-extrabold text-base px-10 py-4 rounded-full shadow-xl hover:bg-secondary/90 transition-colors min-h-[52px] tracking-wide"
          >
            <CalendarCheck className="w-5 h-5" />
            Book Microneedling — $375
          </a>
          <p className="text-xs text-muted-foreground mt-3 italic">Performed by Kim Collins, Licensed Esthetician · Menomonee Falls, WI</p>
        </motion.div>

      </div>
    </section>
  );
}
