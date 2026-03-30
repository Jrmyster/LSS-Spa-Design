import { motion } from "framer-motion";
import { BadgeCheck, Heart, Sparkle, Store, ExternalLink } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Meet Your Esthetician
          </span>
        </motion.div>

        {/* Two-column layout: photo left, text right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">

          {/* Left — Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center shrink-0"
          >
            {/* Circular photo with gold border */}
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl shadow-primary/20">
                <img
                  src={`${import.meta.env.BASE_URL}images/kim-collins.jpg`}
                  alt="A warm, professional portrait of Kim Collins, founder of LSS Spa and Wellness."
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-primary/30 pointer-events-none" />
            </div>

            {/* Caption */}
            <p className="mt-5 text-center font-display text-base text-foreground leading-snug">
              Kim Collins
            </p>
            <p className="text-xs text-muted-foreground text-center mt-1 tracking-wide">
              Licensed Esthetician &amp; Founder
            </p>
          </motion.div>

          {/* Right — Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-2">
              Meet Kim Collins
            </h2>
            <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-8">
              Licensed Esthetician &amp; Owner
            </p>

            <div className="space-y-5 text-lg text-muted-foreground mb-10">
              <p>
                Skincare &amp; corrective work is my passion. I specialize in Cryo Therapy — the results are amazing.
              </p>
              <p>
                Whatever your concern is — to lose inches or tighten &amp; tone — my Cryoskin treatments deliver. My Facial treatments can correct, lift, brighten, tone &amp; take years off your appearance.
              </p>
              <p>
                At LSS Spa &amp; Wellness, every client receives personalized care in a warm, welcoming environment. Your transformation is my mission.
              </p>
            </div>

            {/* Credential badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl shadow-sm border border-border/30">
                <BadgeCheck className="w-8 h-8 text-primary" />
                <span className="font-semibold text-foreground text-sm text-center">Licensed &amp; Certified</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl shadow-sm border border-border/30">
                <Sparkle className="w-8 h-8 text-secondary" />
                <span className="font-semibold text-foreground text-sm text-center">Corrective Focus</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl shadow-sm border border-border/30">
                <Heart className="w-8 h-8 text-accent" />
                <span className="font-semibold text-foreground text-sm text-center">Client Centered</span>
              </div>
            </div>

            {/* Peace Yoga clinician badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex justify-center md:justify-start mb-10"
            >
              <a
                href="https://peaceyogastudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 hover:border-emerald-400 transition-colors rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm group"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                  <span className="text-white text-[9px] font-bold leading-none">PY</span>
                </span>
                Find Kim on the Peace Yoga Clinician Team
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>

            {/* Community involvement */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50/60 p-6 flex gap-5 items-start text-left"
            >
              {/* Badge icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-amber-200 shadow-sm flex items-center justify-center">
                <Store className="w-6 h-6 text-primary" />
              </div>

              <div>
                <p className="font-semibold text-foreground text-sm mb-2 flex items-center gap-1.5">
                  <span className="text-base">🏡</span> Proud Local Business Member
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  We believe in the power of local. As active members of the{" "}
                  <a
                    href="https://www.facebook.com/search/top?q=Menomonee+Falls+Downtown+Business+Club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-secondary underline underline-offset-2 hover:text-secondary/80 transition-colors"
                  >
                    Menomonee Falls Downtown Business Club
                  </a>
                  , we work alongside our fellow business owners to keep our downtown district beautiful, welcoming, and thriving. We are honored to serve our neighbors and contribute to the local charm that makes our town special.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "Dedicated to supporting our local community and the vibrant spirit of downtown Menomonee Falls."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
