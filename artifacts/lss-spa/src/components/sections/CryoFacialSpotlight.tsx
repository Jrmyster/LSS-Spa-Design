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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-300/50 hover:shadow-xl hover:shadow-amber-300/70 transition-all duration-200 min-h-[52px]"
              style={{ background: "linear-gradient(135deg,#d97706,#ea580c)" }}
            >
              <Snowflake className="w-4 h-4" />
              Schedule Your CryoFacial
            </a>
          </motion.div>
        </div>

        {/* ── CryoFacial Before & After Results ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-3">
              ✓ CryoFacial &amp; CryoToning Results
            </span>
            <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">
              Before &amp; After: Facial Rejuvenation
            </h3>
            <p className="text-sm text-muted-foreground">
              Individual results may vary. Clinical photography — no filters applied.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { src: "images/ba-facial-forehead.jpg",  alt: "CryoToning before and after — forehead wrinkles visibly reduced with skin tightening and contouring",           caption: "CryoToning: Visible skin tightening and contouring." },
              { src: "images/ba-facial-neck.jpg",      alt: "CryoFacial and CryoToning before and after — neck treatment showing visible lifting and tightening",            caption: "CryoToning: Visible skin tightening and contouring." },
              { src: "images/ba-facial-shoulder.jpg",  alt: "CryoToning before and after — shoulder and skin tone showing visible smoothing and contouring results",         caption: "CryoToning: Visible skin tightening and contouring." },
            ].map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden border border-amber-200/70 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${photo.src}`}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm bg-amber-500/90 text-white">
                      ✓ CryoFacial
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pb-3 pt-10">
                    <p className="text-white text-[11px] font-sans leading-snug drop-shadow-sm">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-center text-muted-foreground/70 italic mt-5">
            Disclaimer: Results may vary. Best results are typically achieved through a personalized series of treatments.
          </p>
        </motion.div>

        {/* ── CryoFacial Series Pricing ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="rounded-3xl border border-amber-200 bg-white/80 backdrop-blur-sm p-8 sm:p-10 shadow-lg shadow-amber-100/60">
            <div className="mb-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-3">
                Series Pricing
              </span>
              <h3 className="text-xl sm:text-2xl font-display text-foreground mb-2 leading-snug">
                CryoFacial Packages
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Cryo facial lifts, contours, &amp; hydrates your face. Stimulates a collagen overflow to tighten and lift the face while providing intense hydration. This service helps contour cheekbones, alleviate dark under-eye circles, and combat fine lines and wrinkles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              {/* Series of 5 */}
              <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/60 px-5 py-4 flex flex-col gap-1 relative overflow-hidden shadow-sm">
                <span className="absolute top-3 right-3 text-[9px] font-extrabold uppercase tracking-wider bg-amber-500 text-white px-2 py-0.5 rounded-full">
                  Popular
                </span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700">Series of 5</p>
                <p className="text-3xl font-black text-amber-700 leading-none">$1,000</p>
                <p className="text-xs text-amber-600 font-semibold">+1 session FREE — save $200!</p>
              </div>

              {/* Series of 10 */}
              <div className="rounded-2xl border-2 border-orange-400 bg-orange-50/60 px-5 py-4 flex flex-col gap-1 relative overflow-hidden shadow-sm">
                <span className="absolute top-3 right-3 text-[9px] font-extrabold uppercase tracking-wider bg-orange-600 text-white px-2 py-0.5 rounded-full">
                  Best Value
                </span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-orange-700">Series of 10</p>
                <p className="text-3xl font-black text-orange-700 leading-none">$1,900</p>
                <p className="text-xs text-orange-600 font-semibold">+1 session FREE — save $300!</p>
              </div>
            </div>

            <a
              href="https://lss-spa-wellness-llc.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-300/50 hover:shadow-xl transition-all duration-200 min-h-[52px]"
              style={{ background: "linear-gradient(135deg,#d97706,#ea580c)" }}
            >
              <Snowflake className="w-4 h-4" />
              Book Your CryoFacial Series
            </a>
          </div>
        </motion.div>

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
