import { motion } from "framer-motion";
import { Facebook, ExternalLink, Quote } from "lucide-react";

const FB_URL   = "https://web.facebook.com/profile.php?id=61586956386498";
const CLUB_URL = "https://web.facebook.com/fallsdowntown";

const TESTIMONIALS = [
  {
    quote:
      "I've had many facials, but nothing compares to the Diamond Glow™. My skin felt deeply clean and had an actual radiance that lasted for days!",
    name: "Sarah M.",
    service: "Diamond Glow™",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
    tag: "bg-amber-100 text-amber-700 border-amber-200",
  },
  {
    quote:
      "After just two sessions of Cryo-Toning, the sagging skin on my neck is visibly tighter. It's painless and the results are real.",
    name: "Linda K.",
    service: "Cryo-Toning",
    color: "from-sky-50 to-cyan-50",
    border: "border-sky-200",
    tag: "bg-sky-100 text-sky-700 border-sky-200",
  },
  {
    quote:
      "The CryoFacial is a game-changer! My fine lines smoothed out almost instantly and my face feels so much firmer.",
    name: "Jennifer P.",
    service: "CryoFacial",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    tag: "bg-violet-100 text-violet-700 border-violet-200",
  },
  {
    quote:
      "Kim is so knowledgeable. Finding her inside Peace Yoga is like finding a hidden gem in Menomonee Falls.",
    name: "Michelle R.",
    service: "Experience",
    color: "from-emerald-50 to-green-50",
    border: "border-emerald-200",
    tag: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400 fill-amber-400"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialCommunity() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/70 via-white to-rose-50/50 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5"
          >
            Client Love
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display text-foreground mb-4"
          >
            What Our Clients Are Saying
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Real results. Real clients. Real transformations — right here in Menomonee Falls.
          </motion.p>
        </div>

        {/* ── 2 × 2 Testimonial Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl border ${t.border} bg-gradient-to-br ${t.color} p-7 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              {/* Decorative quote mark */}
              <Quote
                className="absolute top-5 right-6 w-8 h-8 opacity-10 text-foreground"
                aria-hidden="true"
              />

              <Stars />

              {/* Service tag */}
              <span className={`inline-block text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 rounded-full mb-4 w-fit ${t.tag}`}>
                {t.service}
              </span>

              {/* Quote */}
              <p className="text-base text-foreground/80 leading-relaxed italic font-serif flex-1 mb-5">
                "{t.quote}"
              </p>

              {/* Name */}
              <p className="text-sm font-semibold text-foreground tracking-wide">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
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
            <Facebook className="w-4 h-4 fill-violet-700" />
            Join the Menomonee Falls Downtown Club
            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Handle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
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
