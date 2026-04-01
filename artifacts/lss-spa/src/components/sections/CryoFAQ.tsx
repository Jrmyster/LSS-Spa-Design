import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Microscope, ExternalLink } from "lucide-react";

const FAQS = [
  {
    q: "What is Apoptosis and how does it work?",
    a: "Apoptosis is a natural process of programmed cell death. During a CryoSlimming session, we apply sub-zero temperatures to the treatment area, causing fat cells to crystallize. These cells then naturally break down and are flushed out through your body's lymphatic system over the following weeks.",
  },
  {
    q: "Is sub-zero temperature safe for my skin?",
    a: "Absolutely. Unlike other methods that can damage surrounding tissue, CryoSkin uses a specific range of temperatures that target only fat cells. Our equipment is operated by a Licensed Esthetician trained to ensure your skin remains protected and healthy throughout the process.",
  },
  {
    q: "How soon will I see a difference?",
    a: "While many clients notice a difference in skin tightness immediately after the first session, the most dramatic slimming results typically appear 2–3 weeks after treatment as the body completes the elimination of the targeted fat cells.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-sky-300 shadow-md shadow-sky-100"
          : "border-sky-200 hover:border-sky-300 shadow-sm"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-colors duration-200 ${
          isOpen ? "bg-sky-50" : "bg-white hover:bg-sky-50/50"
        }`}
        aria-expanded={isOpen}
      >
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
            isOpen ? "bg-sky-500 text-white" : "bg-sky-100 text-sky-600"
          }`}
        >
          {index + 1}
        </span>

        <p className="flex-1 font-semibold text-foreground text-sm md:text-base leading-snug pr-2">
          {question}
        </p>

        <ChevronDown
          className={`shrink-0 w-5 h-5 text-sky-400 transition-transform duration-300 ${
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
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 bg-white border-t border-sky-100">
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base pl-11">
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
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Card wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-sky-100 bg-sky-50/50 px-6 py-8 md:px-10 md:py-10 shadow-sm"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-7">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-600 shrink-0">
              <Microscope className="w-5 h-5" />
            </span>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
              The Science of Results
            </h2>
          </div>

          {/* Accordion items */}
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                index={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onClick={() => toggle(i)}
              />
            ))}
          </div>

          {/* Wikipedia footnote */}
          <p className="mt-7 pt-5 border-t border-sky-100 text-xs text-muted-foreground/70 leading-relaxed">
            The science behind apoptosis and cryotherapy is well documented in peer-reviewed research.{" "}
            <a
              href="https://en.wikipedia.org/wiki/Apoptosis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 underline underline-offset-2 transition-colors font-medium"
            >
              Read more on Wikipedia
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
