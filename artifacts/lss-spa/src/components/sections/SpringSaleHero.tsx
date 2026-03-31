import { motion } from "framer-motion";
import { Sparkles, Scissors, Printer } from "lucide-react";

const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";

export function SpringSaleHero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-sky-50 to-yellow-50 pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-green-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-green-200/70 text-green-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-green-300"
            >
              🍀 March Special
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display text-foreground leading-tight mb-5"
            >
              March Madness:<br />
              <span className="text-green-700">Save a Pot 'o Gold!</span>
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0"
            >
              Take{" "}
              <span className="font-bold text-foreground">20% OFF all in-stock skincare products</span>{" "}
              throughout the month of March. Now is the perfect time to stock up on your daily essentials!
            </motion.p>

            {/* Coupon code callout */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-flex flex-col sm:flex-row items-center gap-3 border-2 border-dashed border-emerald-400 rounded-2xl px-6 py-4 bg-white/70 backdrop-blur mb-7 shadow-sm max-w-xs mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-600 shrink-0">
                <Scissors className="w-3 h-3" />
                Digital Coupon
              </div>
              <div className="w-px h-4 bg-emerald-200 hidden sm:block" />
              <div className="bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-1.5">
                <span className="font-mono font-extrabold text-xl text-emerald-700 tracking-[0.18em]">MARCH20</span>
              </div>
              <a
                href="/menu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-800 underline underline-offset-2 transition-colors shrink-0"
              >
                <Printer className="w-3 h-3" />
                Print
              </a>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-5"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-bold bg-green-600 text-white shadow-lg shadow-green-300/50 hover:bg-green-700 hover:shadow-xl hover:shadow-green-300/60 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4" />
                Book Now &amp; Claim Your Discount
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs text-muted-foreground italic text-center lg:text-left"
            >
              Valid March 2026 · In-stock retail products only · Cannot be combined with other offers
            </motion.p>
          </div>

          {/* ── RIGHT: Image + badge ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 relative max-w-md lg:max-w-none w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-200/50 border-2 border-green-200/60 bg-gradient-to-br from-sky-100 to-yellow-50">
              <img
                src={`${import.meta.env.BASE_URL}images/march-madness.png`}
                alt="March Madness — Save a Pot 'o Gold! 20% OFF Skincare Products at LSS Spa & Wellness"
                className="w-full object-cover"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>

            {/* 20% OFF starburst badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-center drop-shadow-xl z-20"
              style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.18))" }}
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <path
                  d="M50 2 L58 30 L85 18 L72 44 L98 50 L72 56 L85 82 L58 70 L50 98 L42 70 L15 82 L28 56 L2 50 L28 44 L15 18 L42 30 Z"
                  fill="#ef4444"
                />
              </svg>
              <span className="relative z-10 text-white font-black text-2xl sm:text-3xl leading-none">20%</span>
              <span className="relative z-10 text-white font-black text-xs sm:text-sm uppercase tracking-wide leading-none mt-0.5">OFF</span>
            </motion.div>

            {/* Corner accents */}
            <span className="absolute -bottom-3 -right-3 text-3xl select-none pointer-events-none">🍀</span>
            <span className="absolute -bottom-3 right-8 text-2xl select-none pointer-events-none">🌻</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
