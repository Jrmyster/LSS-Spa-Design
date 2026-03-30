import { motion } from "framer-motion";
import { Sparkles, Clock } from "lucide-react";

export function SpringSaleHero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Spring gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-sky-50 to-yellow-50 pointer-events-none" />

      {/* Soft decorative blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-green-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Spring badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-green-200/70 text-green-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-green-300"
            >
              🌿 Once a Year Event
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display text-foreground leading-tight mb-5"
            >
              🌸 Spring Sale:<br />
              <span className="text-green-700">Stock Up &amp; Save!</span>
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Once a year sale! Receive{" "}
              <span className="font-bold text-foreground">20% OFF all skincare products</span> at
              your next appointment. Now is the perfect time to stock up on your daily essentials.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <a
                href="https://lss-spa-wellness-llc.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-bold bg-green-600 text-white shadow-lg shadow-green-300/50 hover:bg-green-700 hover:shadow-xl hover:shadow-green-300/60 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4" />
                Book Now to Save
              </a>
            </motion.div>

            {/* Urgency line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center justify-center lg:justify-start gap-1.5 text-sm text-muted-foreground italic"
            >
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              Limited time offer — valid while supplies last!
            </motion.p>
          </div>

          {/* ── RIGHT: Image + 20% OFF badge ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 relative max-w-md lg:max-w-none w-full"
          >
            {/* Card frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-200/50 border-2 border-green-200/60 bg-gradient-to-br from-sky-100 to-yellow-50">
              <img
                src={`${import.meta.env.BASE_URL}images/springsale.png`}
                alt="LSS Spa skincare product collection — Spring Sale 20% off"
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
              {/* SVG starburst */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <path
                  d="M50 2 L58 30 L85 18 L72 44 L98 50 L72 56 L85 82 L58 70 L50 98 L42 70 L15 82 L28 56 L2 50 L28 44 L15 18 L42 30 Z"
                  fill="#ef4444"
                />
              </svg>
              <span className="relative z-10 text-white font-black text-2xl sm:text-3xl leading-none">20%</span>
              <span className="relative z-10 text-white font-black text-xs sm:text-sm uppercase tracking-wide leading-none mt-0.5">OFF</span>
            </motion.div>

            {/* Spring floral corner accents */}
            <span className="absolute -bottom-3 -right-3 text-3xl select-none pointer-events-none">🌻</span>
            <span className="absolute -bottom-3 right-8 text-2xl select-none pointer-events-none">🌸</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
