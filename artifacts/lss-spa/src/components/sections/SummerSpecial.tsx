import { motion } from "framer-motion";
import { Sparkles, Gift, Tag } from "lucide-react";

const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";

export function SummerSpecial() {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-y border-amber-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl bg-white/80 backdrop-blur-sm border border-amber-200 shadow-xl shadow-amber-100/50 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">

            {/* Image panel */}
            <div className="md:w-64 lg:w-72 shrink-0 relative">
              <img
                src={`${import.meta.env.BASE_URL}images/clarity-rx-lip-treatment.jpg`}
                alt="Clarity Rx Daily Dose of Water Lip Treatment and branded canvas spa bag — included free with qualifying purchase."
                className="w-full h-56 md:h-full object-cover object-center"
              />
              {/* Free gift badge */}
              <div className="absolute top-4 left-4 bg-amber-400 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                Free Gift!
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-6 py-7 md:px-8 md:py-8 flex flex-col justify-center gap-5">

              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600">Limited-Time Offer</p>
              </div>

              {/* Headline */}
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-1">
                  Summer Special! ☀️
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Treat yourself this summer and save big.
                </p>
              </div>

              {/* Offer details */}
              <div className="space-y-3">
                {/* Discount */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Tag className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className="text-sm text-foreground leading-snug">
                    Make any <strong className="font-bold">$100.00 skincare purchase</strong> and receive{" "}
                    <strong className="font-bold text-amber-700">10% OFF your order</strong>.
                  </p>
                </div>

                {/* Free gift */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className="text-sm text-foreground leading-snug">
                    <strong className="font-bold">PLUS</strong> receive a free cosmetic tote &amp; a professional-size{" "}
                    <strong className="font-bold">ClarityRx Daily Dose of Water Lip Treatment</strong> —{" "}
                    <span className="text-amber-700 font-semibold">an $80.00 value!</span>
                  </p>
                </div>
              </div>

              {/* Value callout pill */}
              <div className="inline-flex items-center gap-2 self-start bg-amber-50 border border-amber-200 rounded-full px-4 py-2">
                <span className="text-amber-500 text-base">🎁</span>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wide">Total Value: $80 free gift with skincare purchase + 10% savings</p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold bg-amber-400 hover:bg-amber-500 text-white shadow-md hover:shadow-lg transition-all min-h-[48px]"
                >
                  Book an Appointment
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold border-2 border-amber-400 text-amber-700 bg-white hover:bg-amber-50 transition-colors min-h-[48px]"
                >
                  Shop Now
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
