import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Snowflake, Dumbbell } from "lucide-react";

const FAQS = [
  {
    q: "How does CryoSkin Slimming actually work?",
    a: "It uses a process called Cryolipolysis. By applying cold temperatures to targeted areas, we safely break down fat cells. Your body then naturally flushes those cells out through the lymphatic system over the next 14 days.",
    tag: "Slimming",
  },
  {
    q: "I work out regularly — is this for me?",
    a: 'Absolutely. Even with strict discipline, "stubborn" areas like the lower abdominals or "love handles" can be resistant to diet and exercise. This is a non-invasive tool to help sculpt those final details without any downtime.',
    tag: "Active Lifestyle",
  },
  {
    q: "What is the difference between Slimming and Toning?",
    a: "Slimming is for fat reduction. Toning is for skin tightening. Toning uses cold to increase micro-circulation and collagen production, which is perfect for smoothing cellulite or firming loose skin on the arms and neck.",
    tag: "Slimming vs. Toning",
  },
  {
    q: "How soon will I see results?",
    a: 'Many clients see a difference after the very first session, but peak results for Slimming usually appear 2–3 weeks after the treatment as the body processes the fat cells. For Toning, the "glow" and firmness are often immediate.',
    tag: "Results",
  },
];

function AccordionItem({
  question,
  answer,
  tag,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  tag: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-sky-400 shadow-md shadow-sky-100"
          : "border-sky-200 hover:border-sky-300 shadow-sm"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className={`w-full flex items-start gap-4 px-6 py-5 text-left transition-colors duration-200 ${
          isOpen ? "bg-sky-50" : "bg-white hover:bg-sky-50/60"
        }`}
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 transition-colors duration-200 ${
            isOpen ? "bg-sky-500 text-white" : "bg-sky-100 text-sky-600"
          }`}
        >
          {index + 1}
        </span>

        <div className="flex-1 min-w-0">
          {/* Tag pill */}
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-sky-500 bg-sky-100 px-2.5 py-0.5 rounded-full mb-1.5">
            {tag}
          </span>
          <p className="font-semibold text-foreground text-base leading-snug pr-6">
            {question}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-sky-400 mt-1 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1 bg-white border-t border-sky-100">
              <p className="text-muted-foreground leading-relaxed text-base pl-11">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CryoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50/80 to-white relative overflow-hidden">
      {/* Cryo-blue decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="flex items-center gap-2 bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Snowflake className="w-3.5 h-3.5" />
            Body Contouring &amp; Sculpting FAQ
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-display text-center text-foreground mb-3 leading-tight"
        >
          The Science of Sculpting:{" "}
          <span className="text-sky-600">Your Questions Answered</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-muted-foreground mb-12"
        >
          Everything you need to know about CryoSkin Slimming and Toning —
          the science-backed approach to non-invasive body sculpting.
        </motion.p>

        {/* Accordion */}
        <div className="space-y-3 mb-10">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              index={i}
              question={faq.q}
              answer={faq.a}
              tag={faq.tag}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>

        {/* Expert Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-sky-300 bg-gradient-to-br from-sky-500 to-sky-600 p-6 flex gap-5 items-start shadow-lg shadow-sky-200/50"
        >
          <div className="shrink-0 w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-sky-100 mb-1.5">
              Expert Note from Kim
            </p>
            <p className="text-white text-sm leading-relaxed">
              "With a background in competitive bodybuilding, I understand the dedication it takes to transform a physique. These treatments are the high-tech tools to help you get there."
            </p>
            <p className="text-sky-200 text-xs mt-2 font-semibold">
              — Kim Collins, Licensed Esthetician
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
