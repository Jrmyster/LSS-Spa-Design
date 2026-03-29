import { motion } from "framer-motion";
import { Tag, MessageCircle } from "lucide-react";

const PACKAGES = [
  {
    service: "Classic Facial",
    description: "Buy a series of 5 & get 1 FREE",
    price: "$400",
    savings: "$80",
  },
  {
    service: "LED Light Therapy",
    description: "Buy a series of 5 & get 1 FREE",
    price: "$250",
    savings: "$50",
  },
  {
    service: "Diamond Glow",
    description: "Buy a series of 5 & get 1 FREE",
    price: "$650",
    savings: "$130",
  },
  {
    service: "Cryo Facial with Coupler",
    description: "Buy a series of 5 & get 1 FREE",
    price: "$1,000",
    savings: "$200",
  },
  {
    service: "Cryo Shape or Tone",
    description: "Series of 5 — get 1 additional service FREE",
    price: "$1,500",
    savings: "$600",
    highlight: true,
  },
  {
    service: "Cryo Shape or Tone",
    description: "Series of 10 — get 1 additional treatment FREE",
    price: "$2,750",
    savings: "$1,100",
    highlight: true,
  },
];

export function SeriesPackages() {
  return (
    <section className="py-24 bg-sky-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-4 py-1.5 rounded-full mb-4">
              <Tag className="w-3.5 h-3.5" />
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mt-2 mb-3 leading-tight">
              Grand Opening Specials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Buy a Series &amp; Get a Free Treatment — exclusive intro rates for new clients.
            </p>
          </motion.div>
        </div>

        {/* Table wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-sky-200 shadow-lg shadow-sky-100/60"
        >
          {/* Column headers */}
          <div className="grid grid-cols-12 bg-secondary text-white text-xs font-bold uppercase tracking-widest px-5 py-3">
            <div className="col-span-7 sm:col-span-7">Service &amp; Package</div>
            <div className="col-span-3 sm:col-span-3 text-center">Package Price</div>
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
              className={`grid grid-cols-12 items-center px-5 py-4 border-b border-sky-100 last:border-0 transition-colors hover:bg-sky-100/50 ${
                pkg.highlight ? "bg-sky-50/80" : "bg-white"
              }`}
            >
              {/* Service name + description */}
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

              {/* Price */}
              <div className="col-span-3 text-center">
                <span className="font-bold text-base sm:text-lg text-foreground">{pkg.price}</span>
              </div>

              {/* Savings */}
              <div className="col-span-2 text-right">
                <span className="inline-block bg-emerald-100 text-emerald-700 font-bold text-xs sm:text-sm px-2 py-1 rounded-lg whitespace-nowrap">
                  Save {pkg.savings}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Footer row */}
          <div className="bg-sky-100/70 px-5 py-4 border-t border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Series packages must be purchased in full. Results may vary. Grand Opening pricing — limited time only.
            </p>
            <a
              href="sms:+18339245620"
              className="inline-flex items-center gap-2 bg-secondary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-secondary/90 transition-colors whitespace-nowrap shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Text (833) 924-5620 to Inquire
            </a>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Questions about a package?{" "}
          <a
            href="sms:+18339245620"
            className="text-secondary font-semibold underline underline-offset-2 hover:text-secondary/80"
          >
            Text us at (833) 924-5620
          </a>{" "}
          or{" "}
          <a
            href="https://square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-semibold underline underline-offset-2 hover:text-secondary/80"
          >
            Book online
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
