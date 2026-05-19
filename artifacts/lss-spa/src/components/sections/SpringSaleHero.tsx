import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";

export function SpringSaleHero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">

        {/* Promo image */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/may_special.jpg`}
            alt="May Special: New Clients save $20 on your first service. Mention this promo when booking!"
            style={{ maxWidth: "100%", height: "auto", display: "block" }}
            className="rounded-2xl shadow-lg w-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Book Now CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-secondary text-white font-extrabold text-base px-10 py-4 rounded-full shadow-xl hover:bg-secondary/90 transition-colors min-h-[52px] tracking-wide"
          >
            <CalendarCheck className="w-5 h-5" />
            Book Now
          </a>
        </motion.div>

      </div>
    </section>
  );
}
