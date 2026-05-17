import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";

const RF_FAQS = [
  {
    q: "What is it for and is it safe?",
    a: "This medical-grade technology is primarily used for skin tightening and wrinkle reduction. It's a fantastic option for clients looking to firm up their jawline, neck, face, or body without surgery.",
  },
  {
    q: "How does it work?",
    a: "The machine sends radio frequency energy deep into the skin to gently heat the tissue. This heat causes existing collagen fibers to contract for immediate firming, while also triggering the body to produce new collagen over time.",
  },
  {
    q: "Does it hurt?",
    a: "Not at all! Most clients describe the sensation as a pleasant, warming massage.",
  },
  {
    q: "Is there downtime?",
    a: "None! You can apply makeup and return to your daily activities immediately after your session.",
  },
  {
    q: "Who is it for?",
    a: "It is ideal for anyone looking to treat skin laxity, fine lines, or 'crepey' skin texture, as well as those seeking overall lifting and firming.",
  },
  {
    q: "How many sessions do I need?",
    a: "While you may see a 'flash' result after just one visit, a series of 6–8 treatments is highly recommended for long-lasting structural changes.",
  },
];

function RfFaqItem({
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
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-violet-300 shadow-md shadow-violet-100"
          : "border-violet-200 hover:border-violet-300 shadow-sm"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-colors duration-200 ${
          isOpen ? "bg-violet-50" : "bg-white hover:bg-violet-50/50"
        }`}
        aria-expanded={isOpen}
      >
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
            isOpen ? "bg-violet-500 text-white" : "bg-violet-100 text-violet-600"
          }`}
        >
          {index + 1}
        </span>

        <p className="flex-1 font-semibold text-foreground text-sm md:text-base leading-snug pr-2">
          {question}
        </p>

        <ChevronDown
          className={`shrink-0 w-5 h-5 text-violet-400 transition-transform duration-300 ${
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
            <div className="px-5 pb-5 pt-1 bg-white border-t border-violet-100">
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

export function RfFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="mt-7 border-t border-border/40 pt-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 text-violet-600 shrink-0">
          <Zap className="w-4 h-4" />
        </span>
        <h3 className="font-display text-base md:text-lg font-bold text-foreground leading-tight">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-2.5">
        {RF_FAQS.map((faq, i) => (
          <RfFaqItem
            key={faq.q}
            question={faq.q}
            answer={faq.a}
            isOpen={openIndex === i}
            onClick={() => toggle(i)}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
