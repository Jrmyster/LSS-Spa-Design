import { motion } from "framer-motion";
import { Facebook, ExternalLink, Star, MessageSquare } from "lucide-react";

const FB_URL   = "https://web.facebook.com/profile.php?id=61586956386498";
const CLUB_URL = "https://web.facebook.com/fallsdowntown";
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=LSS+Spa+Wellness+Menomonee+Falls+WI#lrd=,1,,,";

const RESULTS = [
  {
    image: "diamondglow-results.jpg",
    label: "Diamond Glow™",
    caption: "Clinical Results",
    alt: "Diamond Glow before and after — visible skin clarity and radiance at LSS Spa & Wellness",
    border: "border-amber-300",
    badge: "bg-amber-100 text-amber-800 border-amber-300",
  },
  {
    image: "cryofacial.png",
    label: "Cryo-Facial",
    caption: "Clinical Results",
    alt: "CryoFacial treatment results — visible skin tightening and lifting at LSS Spa & Wellness",
    border: "border-violet-300",
    badge: "bg-violet-100 text-violet-800 border-violet-300",
  },
];

function GoogleStars() {
  return (
    <div className="flex items-center justify-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function SocialCommunity() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-white to-violet-50/30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-violet-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full mb-5"
          >
            Authentic Outcomes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display text-foreground mb-4"
          >
            🌻 Real Results, Real People
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            We are proud of the transformations our clients achieve at LSS Spa &amp; Wellness.
            We prefer to let our actual results speak for themselves.
          </motion.p>
        </div>

        {/* ── Clinical Results Images ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-14">
          {RESULTS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`rounded-3xl border-2 ${r.border} bg-white shadow-lg shadow-amber-50 overflow-hidden`}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}images/${r.image}`}
                  alt={r.alt}
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "340px" }}
                />
                {/* Clinical Results ribbon across the image bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-2 px-4 flex items-center justify-between">
                  <span className="text-white font-bold text-sm">{r.label}</span>
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest border rounded-full px-2.5 py-0.5 ${r.badge}`}>
                    ✓ {r.caption}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ── Leave a Google Review box ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border-2 border-amber-400 bg-white shadow-xl shadow-amber-100/50 px-6 sm:px-12 py-10 text-center mb-14"
        >
          {/* Stars */}
          <div className="mb-4">
            <GoogleStars />
          </div>

          {/* Headline */}
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3 leading-snug">
            Have you experienced the LSS Glow?
          </h3>
          <p className="text-base text-muted-foreground max-w-md mx-auto mb-7 leading-relaxed">
            We would love to hear from you! Your honest feedback helps other clients discover
            their best skin — and means the world to us.
          </p>

          {/* Google Review button */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-bold bg-white border-2 border-amber-400 text-amber-700 shadow-lg shadow-amber-100/50 hover:bg-amber-50 hover:border-amber-500 hover:shadow-amber-200/60 transition-all duration-200 group"
          >
            {/* Google G logo */}
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Leave a Google Review
            <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          <p className="text-xs text-muted-foreground mt-4">
            Opens Google Reviews in a new tab · Your experience matters to us
          </p>
        </motion.div>

        {/* ── Social / Community CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold bg-[#1877F2] text-white shadow-lg shadow-blue-300/40 hover:bg-[#1564d3] hover:shadow-blue-400/50 transition-all duration-200 group"
          >
            <Facebook className="w-4 h-4 fill-white" />
            Follow us on Facebook
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
          </a>

          <a
            href={CLUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold border-2 border-violet-400 text-violet-700 bg-white/80 hover:bg-violet-50 hover:border-violet-500 transition-all duration-200 group shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-violet-700" />
            Join the Menomonee Falls Downtown Club
            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Facebook handle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-muted-foreground mt-5"
        >
          Find us on Facebook &nbsp;·&nbsp;{" "}
          <a
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#1877F2] hover:underline"
          >
            LSS Spa &amp; Wellness
          </a>
        </motion.p>

      </div>
    </section>
  );
}
