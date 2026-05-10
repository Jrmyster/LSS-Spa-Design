import { motion } from "framer-motion";
import { Heart, CalendarCheck, Flower2 } from "lucide-react";

const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";

export function SpringSaleHero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Soft pink watercolor background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50/60 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-20 w-80 h-80 bg-pink-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card wrapper */}
        <div className="rounded-3xl border-2 border-rose-200 bg-white/75 backdrop-blur-sm shadow-xl shadow-rose-100/60 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-0">

            {/* ── LEFT: Text content ── */}
            <div className="flex-1 px-8 py-10 sm:px-12 text-center lg:text-left">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-rose-300"
              >
                <Flower2 className="w-3.5 h-3.5" />
                Limited Time — May Only
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight mb-3"
                style={{ color: "#4a3728" }}
              >
                Mother's Day Special
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="text-lg sm:text-xl text-rose-800/80 font-medium mb-6 leading-snug"
              >
                Book a May Facial for your Mom
              </motion.p>

              {/* $20 OFF callout chip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.26 }}
                className="inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 mb-3 shadow-lg"
                style={{ background: "linear-gradient(135deg, #c0392b, #e74c6c)" }}
              >
                <Heart className="w-5 h-5 text-white/80 shrink-0 fill-white/60" />
                <div className="text-left leading-tight">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-100">
                    Mother's Day Gift
                  </p>
                  <p className="text-lg font-black text-white">
                    $20 OFF · May Facials
                  </p>
                </div>
              </motion.div>

              {/* Disclaimer */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.32 }}
                className="text-xs text-rose-600/80 italic mb-7 text-center lg:text-left"
              >
                (New clients receive $20 off in May)
              </motion.p>

              {/* Primary CTA — bold deep red/pink */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.38 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
              >
                <div className="relative w-full sm:w-auto">
                  <span className="absolute inset-0 rounded-full opacity-30 animate-ping pointer-events-none"
                    style={{ backgroundColor: "#e74c6c" }} />
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full px-10 py-4 text-base font-extrabold text-white shadow-xl transition-all duration-200 z-10 min-h-[52px] tracking-wide"
                    style={{
                      background: "linear-gradient(135deg, #c0392b, #e74c6c)",
                      boxShadow: "0 8px 24px rgba(192,57,43,0.40)",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.filter = "brightness(1.08)")}
                    onMouseLeave={e => (e.currentTarget.style.filter = "")}
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Get $20 OFF — Book Now
                  </a>
                </div>
              </motion.div>

              {/* Fine print */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.48 }}
                className="text-xs text-muted-foreground italic mt-4 text-center lg:text-left"
              >
                Valid for facial services · May 2026 · Cannot be combined with other offers
              </motion.p>
            </div>

            {/* ── RIGHT: Mother's Day promo image ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full lg:w-[44%] shrink-0 relative"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/mothers-day-promo.png`}
                alt="Mother's Day Special — $20 OFF May Facials at LSS Spa & Wellness, Menomonee Falls WI. Book a facial gift for your mom this Mother's Day."
                className="w-full object-cover lg:rounded-r-3xl lg:rounded-l-none rounded-b-3xl lg:rounded-b-none"
                style={{ imageRendering: "crisp-edges" }}
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
