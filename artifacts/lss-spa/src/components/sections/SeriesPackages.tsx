import { motion } from "framer-motion";
import { Snowflake, Zap, CalendarCheck, Phone } from "lucide-react";
import { QRCodeLightbox } from "@/components/QRCodeLightbox";

const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";

const CRYO_PACKAGES = [
  {
    label: "Cryo Face",
    pack: "5-Pack",
    price: "$1,000",
    perSession: "$200/session",
    savings: "$200",
    badge: "Popular",
    badgeColor: "bg-sky-500",
  },
  {
    label: "Cryo Face",
    pack: "10-Pack",
    price: "$1,900",
    perSession: "$190/session",
    savings: "$300",
    badge: "Best Value",
    badgeColor: "bg-secondary",
  },
  {
    label: "Cryo Body",
    pack: "5-Pack",
    price: "$1,500",
    perSession: "$300/session",
    savings: "$600",
    badge: "Popular",
    badgeColor: "bg-sky-500",
  },
  {
    label: "Cryo Body",
    pack: "10-Pack",
    price: "$2,950",
    perSession: "$295/session",
    savings: "$900",
    badge: "Max Savings",
    badgeColor: "bg-secondary",
  },
];

const RF_PACKAGES = [
  {
    label: "RF Face",
    pack: "5-Pack",
    price: "$1,000",
    perSession: "$200/session",
    savings: "$200",
    badge: "Popular",
    badgeColor: "bg-violet-500",
  },
  {
    label: "RF Face",
    pack: "10-Pack",
    price: "$1,900",
    perSession: "$190/session",
    savings: "$300",
    badge: "Best Value",
    badgeColor: "bg-violet-700",
  },
  {
    label: "RF Body",
    pack: "5-Pack",
    price: "$1,500",
    perSession: "$300/session",
    savings: "$600",
    badge: "Popular",
    badgeColor: "bg-violet-500",
  },
  {
    label: "RF Body",
    pack: "10-Pack",
    price: "$2,950",
    perSession: "$295/session",
    savings: "$900",
    badge: "Max Savings",
    badgeColor: "bg-violet-700",
  },
];

interface PackageCardProps {
  label: string;
  pack: string;
  price: string;
  perSession: string;
  savings: string;
  badge: string;
  badgeColor: string;
  index: number;
}

function PackageCard({ label, pack, price, perSession, savings, badge, badgeColor, index }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="relative rounded-2xl border border-border/60 bg-white px-5 py-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2 overflow-hidden"
    >
      <span className={`absolute top-3 right-3 text-[9px] font-extrabold uppercase tracking-wider ${badgeColor} text-white px-2 py-0.5 rounded-full`}>
        {badge}
      </span>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="text-base font-bold text-foreground leading-snug">{pack}</p>
      </div>

      <div>
        <p className="text-3xl font-black text-foreground leading-none">{price}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{perSession}</p>
      </div>

      <div className="mt-auto pt-2">
        <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full">
          🎁 +1 session FREE — Save {savings}
        </span>
      </div>
    </motion.div>
  );
}

export function SeriesPackages() {
  return (
    <section id="series-specials" className="relative py-20 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="absolute top-32 right-0 w-64 h-64 rounded-full bg-violet-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-48 rounded-full bg-sky-50/60 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary bg-white border border-secondary/20 shadow-sm px-4 py-1.5 rounded-full mb-4">
            ✦ Series Specials
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mt-2 mb-3 leading-tight">
            Buy a Series · Get One Free
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Commit to your results with a treatment series and receive a complimentary session free — our best savings, available now.
          </p>
        </motion.div>

        {/* ── CryoSkin Packages ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
              <Snowflake className="w-4 h-4 text-sky-600" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground">CryoSkin Packages</h3>
            <div className="flex-1 h-px bg-sky-200" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {CRYO_PACKAGES.map((pkg, i) => (
              <PackageCard key={`cryo-${i}`} {...pkg} index={i} />
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-secondary/90 transition-colors shadow-md min-h-[48px]"
            >
              <CalendarCheck className="w-4 h-4" />
              Book CryoSkin Series
            </a>
          </div>
        </motion.div>

        {/* ── Multi-Polar RF Packages ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-violet-600" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground">Multi-Polar RF Packages</h3>
            <div className="flex-1 h-px bg-violet-200" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {RF_PACKAGES.map((pkg, i) => (
              <PackageCard key={`rf-${i}`} {...pkg} index={i} />
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet-600 text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-violet-700 transition-colors shadow-md min-h-[48px]"
            >
              <CalendarCheck className="w-4 h-4" />
              Book RF Series
            </a>
          </div>
        </motion.div>

        {/* QR Code + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-white border border-sky-200 shadow-lg rounded-2xl px-8 py-8"
        >
          <div className="shrink-0">
            <QRCodeLightbox
              caption="Scan to Book"
              captionClass="text-[11px] text-muted-foreground font-medium uppercase tracking-wide"
              imgClass="w-28 h-28 object-cover rounded-xl border-2 border-sky-200 shadow-md"
            />
          </div>

          <div className="hidden sm:block w-px h-24 bg-sky-200" />
          <div className="block sm:hidden w-24 h-px bg-sky-200" />

          <div className="text-center sm:text-left">
            <p className="font-display text-xl text-foreground mb-1">Ready to save big?</p>
            <p className="text-sm text-muted-foreground mb-5">
              Scan the QR code or tap below to schedule your series today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors shadow-md whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Now
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-center"
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

        <p className="text-xs text-center text-muted-foreground/70 italic mt-6">
          Series packages must be purchased in full. Individual results may vary. Pricing subject to change.
        </p>

      </div>
    </section>
  );
}
