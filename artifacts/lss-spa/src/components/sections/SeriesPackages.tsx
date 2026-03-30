import { motion } from "framer-motion";
import { Tag, Phone, CalendarCheck } from "lucide-react";

const PACKAGES = [
  {
    service: "Classic Facial",
    description: "Buy 5, get 1 FREE",
    price: "$400",
    savings: "$80",
  },
  {
    service: "LED Light Therapy",
    description: "Buy 5, get 1 FREE",
    price: "$250",
    savings: "$50",
  },
  {
    service: "Diamond Glow",
    description: "Buy 5, get 1 FREE",
    price: "$650",
    savings: "$130",
  },
  {
    service: "Cryo Facial with Coupler",
    description: "Buy 5, get 1 FREE",
    price: "$1,000",
    savings: "$200",
    highlight: true,
  },
  {
    service: "Cryo Shape or Tone",
    description: "Series of 5 — Buy 5, get 1 FREE",
    price: "$1,500",
    savings: "$600",
    highlight: true,
  },
  {
    service: "Cryo Shape or Tone",
    description: "Series of 10 — Buy 10, get 1 FREE",
    price: "$2,750",
    savings: "$1,100",
    highlight: true,
  },
];

export function SeriesPackages() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white">
      {/* Airy sky background accents */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-blue-100/50 blur-2xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-48 rounded-full bg-sky-100/60 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary bg-white/80 border border-secondary/20 shadow-sm px-4 py-1.5 rounded-full mb-4">
              <Tag className="w-3.5 h-3.5" />
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mt-2 mb-3 leading-tight">
              ✨ Grand Opening Specials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Buy a series and get a free treatment of the same series!
            </p>
          </motion.div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-sky-200 shadow-xl shadow-sky-200/40"
        >
          {/* Column headers */}
          <div className="grid grid-cols-12 bg-secondary text-white text-xs font-bold uppercase tracking-widest px-5 py-3">
            <div className="col-span-7 sm:col-span-7">Service &amp; Package</div>
            <div className="col-span-3 sm:col-span-3 text-center">Series Price</div>
            <div className="col-span-2 sm:col-span-2 text-right">You Save</div>
          </div>

          {/* Rows */}
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className={`grid grid-cols-12 items-center px-5 py-4 border-b border-sky-100 last:border-0 transition-colors hover:bg-sky-100/60 ${
                pkg.highlight ? "bg-sky-50/80" : "bg-white"
              }`}
            >
              <div className="col-span-7">
                <p className={`font-semibold text-sm sm:text-base text-foreground leading-snug ${pkg.highlight ? "text-secondary" : ""}`}>
                  {pkg.highlight && (
                    <span className="inline-block bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mr-2 mb-0.5 align-middle">
                      Best Value
                    </span>
                  )}
                  {pkg.service}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{pkg.description}</p>
              </div>

              <div className="col-span-3 text-center">
                <span className="font-bold text-base sm:text-lg text-foreground">{pkg.price}</span>
              </div>

              <div className="col-span-2 text-right">
                <span className="inline-block bg-emerald-100 text-emerald-700 font-bold text-xs sm:text-sm px-2 py-1 rounded-lg whitespace-nowrap">
                  Save {pkg.savings}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Table footer row */}
          <div className="bg-sky-100/70 px-5 py-4 border-t border-sky-200">
            <p className="text-xs text-muted-foreground text-center">
              Series packages must be purchased in full. Results may vary. Grand Opening pricing — limited time only.
            </p>
          </div>
        </motion.div>

        {/* QR Code + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 bg-white/70 backdrop-blur rounded-2xl border border-sky-200 shadow-lg px-8 py-8"
        >
          {/* QR code */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/qr-code.jpg`}
              alt="QR Code — Scan to book your appointment"
              className="w-28 h-28 object-cover rounded-xl border-2 border-sky-200 shadow-md"
            />
            <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">Scan to Book</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-24 bg-sky-200" />
          <div className="block sm:hidden w-24 h-px bg-sky-200" />

          {/* CTA text + buttons */}
          <div className="text-center sm:text-left">
            <p className="font-display text-xl text-foreground mb-1">Ready to save big?</p>
            <p className="text-sm text-muted-foreground mb-5">
              Scan the QR code or tap below to schedule your series today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://lss-spa-wellness-llc.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors shadow-md whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4" />
                Scan to Schedule
              </a>
              <a
                href="sms:+18339245620"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border border-sky-300 bg-white px-6 py-3 rounded-full hover:bg-sky-50 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-secondary" />
                Text to Inquire
              </a>
            </div>
          </div>
        </motion.div>

        {/* Prominent phone number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="tel:+18339245620"
            className="inline-flex items-center gap-3 text-secondary font-bold text-xl hover:text-secondary/80 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (833) 924-5620
          </a>
          <p className="text-xs text-muted-foreground mt-1">Call or text to ask about any series package</p>
        </motion.div>

      </div>
    </section>
  );
}
