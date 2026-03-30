import { motion } from "framer-motion";
import { CheckCircle2, Snowflake, Info } from "lucide-react";

const WHY_LOVE = [
  "Boosts Collagen for a firmer, lifted look",
  "Deep Intense Hydration for glowing skin",
  "Helps Contour cheekbones",
  "Reduces Dark under-eye circles",
  "Smooths Fine Lines & wrinkles",
];

const CONCERN_LABELS = [
  { label: "Crow's Feet",  top: "22%", left: "4%",   side: "left" },
  { label: "Weak Tone",    top: "48%", left: "4%",   side: "left" },
  { label: "Fine Lines",   top: "72%", left: "4%",   side: "left" },
];

export function CryoFacialSpotlight() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Warm amber/orange gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/60 to-yellow-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Snowflake className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Featured Treatment
            </span>
          </motion.div>

          {/* Warm gradient tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-lg font-display italic mb-2"
            style={{ background: "linear-gradient(90deg,#d97706,#ea580c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Glow. Lift. Sculpt.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display leading-tight mb-4"
            style={{ background: "linear-gradient(90deg,#b45309,#ea580c,#d97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            CryoFacial: What It Does<br className="hidden sm:block" /> for Your Skin
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Visible improvement in skin texture and fine lines — often after just one session.
          </motion.p>
        </div>

        {/* ── Two-column: annotated photo + benefits ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">

          {/* Annotated before/after image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glow blob behind card */}
            <div className="absolute -inset-4 bg-orange-200/30 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200 shadow-2xl shadow-amber-200/50">
              <img
                src={`${import.meta.env.BASE_URL}images/cryofacial.png`}
                alt="CryoFacial before and after — showing improvement in crow's feet, skin tone, and fine lines"
                className="w-full object-cover"
                style={{ imageRendering: "crisp-edges" }}
              />

              {/* Concern labels — left-side annotation badges */}
              {CONCERN_LABELS.map((c) => (
                <div
                  key={c.label}
                  className="absolute flex items-center gap-1.5"
                  style={{ top: c.top, left: c.left }}
                >
                  <span className="bg-amber-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md">
                    {c.label}
                  </span>
                  {/* Arrow line */}
                  <div className="w-4 h-px bg-amber-400/80" />
                </div>
              ))}

              {/* Caption bar at bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-4">
                <p className="text-white text-xs font-semibold leading-snug text-center drop-shadow">
                  CryoFacial: Visible improvement in skin texture and fine lines after just one session.
                </p>
              </div>

              {/* Before / After label chips */}
              <div className="absolute top-3 left-3">
                <span className="bg-black/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Before
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-amber-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  After 1 Treatment
                </span>
              </div>
            </div>
          </motion.div>

          {/* Why Clients Love CryoFacial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-200 mb-5">
              ✦ Why Clients Love CryoFacial
            </div>

            <h3 className="text-2xl sm:text-3xl font-display text-foreground mb-6 leading-snug">
              Five Reasons to Book<br />Your First Session
            </h3>

            <ul className="space-y-4 mb-8">
              {WHY_LOVE.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-base text-foreground font-medium leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://lss-spa-wellness-llc.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-300/50 hover:shadow-xl hover:shadow-amber-300/70 transition-all duration-200"
              style={{ background: "linear-gradient(135deg,#d97706,#ea580c)" }}
            >
              <Snowflake className="w-4 h-4" />
              Schedule Your CryoFacial
            </a>
          </motion.div>
        </div>

        {/* ── What is CryoSkin? educational block ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-amber-200 bg-white/80 backdrop-blur-sm p-8 sm:p-10 shadow-lg shadow-amber-100/60"
        >
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ background: "linear-gradient(135deg,#d97706,#ea580c)" }}
            >
              <Info className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
                What is CryoSkin?
              </p>
              <h3 className="text-xl sm:text-2xl font-display text-foreground mb-3 leading-snug">
                French Technology. Real Results.
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                A <strong className="text-foreground">non-invasive, suction-free French technology</strong> that uses
                sub-zero temperatures to tighten and tone skin while improving overall complexion.
                Unlike other cold therapies, CryoSkin's intelligent temperature cycling means no
                freezer burns, no bruising, and zero downtime — just a refreshed, firmer you.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["No Surgery","No Downtime","No Suction","FDA-Safe Cold Therapy","French Innovation"].map((tag) => (
                  <span key={tag} className="text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
