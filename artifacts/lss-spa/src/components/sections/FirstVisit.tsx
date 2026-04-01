import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ClipboardList, BedDouble, Sparkles, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Personal Consultation",
    body: "Your journey starts with a one-on-one consultation where Kim will discuss your skincare goals, assess your target areas, and create a customized treatment plan just for you.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    border: "border-amber-100",
    numberColor: "text-amber-300",
  },
  {
    icon: BedDouble,
    number: "02",
    title: "The Treatment Experience",
    body: "Relax in our tranquil studio inside Peace Yoga. Whether you are here for a CryoSlimming session or a Diamond Glow™ facial, we prioritize your comfort and safety every step of the way.",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-500",
    border: "border-sky-100",
    numberColor: "text-sky-200",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Post-Care & Results",
    body: "After your session, Kim will walk you through your immediate results and provide professional home-care recommendations to ensure your glow—and your results—last long after you leave.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    border: "border-violet-100",
    numberColor: "text-violet-200",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function FirstVisit() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-4 py-1.5 rounded-full mb-4">
            What to Expect
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Your First Visit
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            From the moment you walk in, every detail is designed around your comfort, your goals, and your results.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14 md:mb-18 relative"
        >
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-amber-100 via-sky-100 to-violet-100 z-0"
          />

          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className={`relative z-10 bg-white rounded-3xl border ${step.border} p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start`}
              >
                {/* Step number — decorative */}
                <span className={`absolute top-5 right-6 font-display text-5xl font-bold leading-none pointer-events-none select-none ${step.numberColor}`}>
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`${step.iconBg} ${step.iconColor} w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Body */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="https://lss-spa-wellness-llc.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-foreground text-white font-bold text-sm md:text-base uppercase tracking-widest px-10 py-4 rounded-full shadow-lg hover:bg-foreground/85 hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground/60 tracking-wide">
            No commitments · Book online in under a minute
          </p>
        </motion.div>

      </div>
    </section>
  );
}
