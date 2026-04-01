import { motion } from "framer-motion";
import { BadgeCheck, Dumbbell, FlaskConical, Store, ExternalLink, ArrowRight, Film } from "lucide-react";

const CREDENTIALS = [
  {
    icon: <Dumbbell className="w-6 h-6 text-sky-500" />,
    label: "Elite Competitor",
    sub: "Competitive Bodybuilder · Gold's Gym LA",
    color: "border-sky-200 bg-sky-50/60",
  },
  {
    icon: <Film className="w-6 h-6 text-sky-600" />,
    label: "SAG-AFTRA Member",
    sub: "Fitness Model · Film & Music Video",
    color: "border-sky-200 bg-sky-50/60",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-sky-600" />,
    label: "CryoSkin Specialist",
    sub: "Clinique · Lancôme · Chanel Lines",
    color: "border-sky-200 bg-sky-50/60",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-sky-700" />,
    label: "Licensed Esthetician",
    sub: "State of Wisconsin · Corrective Skincare",
    color: "border-sky-200 bg-sky-50/60",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Cryo-blue background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-50/80 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-100 px-4 py-1.5 rounded-full">
            About Kim
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">

          {/* Left — Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center shrink-0 w-full md:w-auto"
          >
            {/* Photo with cryo-blue border */}
            <div className="relative">
              {/* Outer cryo-blue ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-sky-300/60 pointer-events-none" />
              {/* Inner glow */}
              <div className="absolute -inset-1 rounded-full bg-sky-200/30 blur-sm pointer-events-none" />
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-sky-400 shadow-2xl shadow-sky-300/40 relative">
                <img
                  src={`${import.meta.env.BASE_URL}images/kim-collins.jpg`}
                  alt="Kim Collins, Licensed Esthetician and founder of LSS Spa and Wellness"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Caption */}
            <p className="mt-6 text-center font-display text-base text-foreground leading-snug">
              Kim Collins
            </p>
            <p className="text-xs text-muted-foreground text-center mt-1 tracking-wide">
              Licensed Esthetician &amp; Founder
            </p>

            {/* Peace Yoga clinician badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6"
            >
              <a
                href="https://peaceyogastudio.com/practitioners/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 hover:border-emerald-400 transition-colors rounded-full px-4 py-2 text-xs font-semibold shadow-sm group"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                  <span className="text-white text-[9px] font-bold leading-none">PY</span>
                </span>
                Find Kim on the Peace Yoga Clinician Team
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display text-foreground mb-2 leading-tight">
              Meet Kim:{" "}
              <span className="text-sky-600">Your Skin &amp; Transformation Expert</span>
            </h2>
            <div className="w-16 h-1 bg-sky-400 rounded-full mb-8 mx-auto md:mx-0" />

            {/* Bio — three generous paragraphs with empathy highlight */}
            <div className="space-y-5 text-base text-muted-foreground mb-8">
              <p className="leading-[1.85]">
                I have worn many hats in my life, but education, skincare, and corrective work are my
                passions. After living in{" "}
                <span className="font-semibold text-foreground">California for over two decades</span>,
                I served as a fitness instructor at{" "}
                <span className="font-semibold text-foreground">Gold's Gym</span> — the Mecca of
                Bodybuilding — where I had the privilege of working with many{" "}
                <span className="font-semibold text-foreground">A-list stars</span>. During my time
                in Los Angeles, I was a fitness model, a competitive bodybuilder, and a member of{" "}
                <span className="font-semibold text-foreground">SAG-AFTRA</span>, appearing in films
                and music videos.
              </p>

              <p className="leading-[1.85]">
                Professionally, I managed sales for multiple companies and represented world-class
                skincare lines, including{" "}
                <span className="font-semibold text-foreground">Clinique, Lancôme, and Chanel</span>.
                But of all my experiences, skin is my true love.
              </p>

              {/* Empathy blockquote — the most emotionally resonant sentence */}
              <blockquote className="border-l-4 border-sky-400 bg-sky-50/80 rounded-r-xl pl-5 pr-4 py-4 my-1">
                <p className="text-foreground font-semibold text-base italic leading-relaxed">
                  "Having struggled with cystic acne in the 80s when few solutions existed, I know
                  firsthand the self-consciousness that comes with skin concerns."
                </p>
              </blockquote>

              <p className="leading-[1.85]">
                Today, we have incredible tools that weren't available years ago. I specialize in{" "}
                <span className="font-semibold text-foreground">CryoSkin Therapy</span> because the
                results are truly amazing — whether your goal is to lose inches, tighten, or tone.
                My facial treatments are designed to{" "}
                <span className="font-semibold text-foreground">
                  correct, lift, brighten, and take years off
                </span>{" "}
                your appearance.
              </p>

              {/* Signature */}
              <p className="font-display text-foreground text-base pt-2 border-t border-border/30">
                — Kim Collins, Licensed Esthetician
              </p>
            </div>

            {/* Credential badges — cryo-blue theme */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {CREDENTIALS.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border shadow-sm ${c.color}`}
                >
                  {c.icon}
                  <span className="font-bold text-foreground text-xs text-center leading-snug">{c.label}</span>
                  <span className="text-[10px] text-muted-foreground text-center leading-snug">{c.sub}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-10 flex justify-center md:justify-start"
            >
              <a
                href="https://lss-spa-wellness-llc.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-sky-300/40 hover:shadow-sky-400/50 transition-all duration-200 group"
              >
                Start Your Transformation – Book Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Community involvement */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6 flex gap-5 items-start text-left"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-sky-200 shadow-sm flex items-center justify-center">
                <Store className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-2 flex items-center gap-1.5">
                  <span className="text-base">🏡</span> Proud Local Business Member
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  We believe in the power of local. As active members of the{" "}
                  <a
                    href="https://web.facebook.com/fallsdowntown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sky-600 underline underline-offset-2 hover:text-sky-800 transition-colors"
                  >
                    Menomonee Falls Downtown Business Club
                  </a>
                  , we work alongside our fellow business owners to keep our downtown district beautiful, welcoming, and thriving. We are honored to serve our neighbors and contribute to the local charm that makes our town special.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "Dedicated to supporting our local community and the vibrant spirit of downtown Menomonee Falls."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
