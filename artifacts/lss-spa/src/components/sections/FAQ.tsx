import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const downtimeAnswer = (
  <div className="space-y-3">
    <div className="flex items-start gap-3 bg-sky-50/70 rounded-xl px-4 py-3 border border-sky-100">
      <span className="text-lg mt-0.5 shrink-0">❄️</span>
      <div>
        <p className="font-semibold text-foreground text-sm mb-0.5">CryoToning</p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          There is absolutely no downtime. You can resume all normal activities immediately.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-3 bg-sky-50/70 rounded-xl px-4 py-3 border border-sky-100">
      <span className="text-lg mt-0.5 shrink-0">⚡</span>
      <div>
        <p className="font-semibold text-foreground text-sm mb-0.5">CryoSlimming</p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We ask that you "take it easy" for the remainder of the day. Please refrain from working out or getting overheated.
        </p>
      </div>
    </div>
    <div className="bg-amber-50/70 rounded-xl px-4 py-3 border border-amber-100 space-y-2.5">
      <p className="font-semibold text-foreground text-sm">Post-Treatment Recovery Tips:</p>
      <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
        <span className="text-base mt-0.5 shrink-0">💧</span>
        <p>
          <span className="font-semibold text-foreground">Hydration: </span>
          Drink plenty of water to assist the lymphatic system in flushing out treated cells.
        </p>
      </div>
      <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
        <span className="text-base mt-0.5 shrink-0">🥗</span>
        <p>
          <span className="font-semibold text-foreground">Dietary Note: </span>
          For Slimming treatments, avoid all sugar and heavy carbohydrates for at least 2 hours after your session.
        </p>
      </div>
    </div>
  </div>
);

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Does it hurt?",
    a: "Not at all! Most clients describe it as a pleasant, relaxing massage. The treatment begins with a brief warming sensation followed by a gradual cooling. It is non-invasive and requires no needles or downtime.",
  },
  {
    q: "How soon will I see results?",
    a: "Many clients see a noticeable difference after their very first session! However, the best results typically appear 15 days to 3 weeks after the treatment, as your body naturally flushes out the targeted cells.",
  },
  {
    q: "How many sessions do I need?",
    a: "While you'll see a change after one visit, we generally recommend a series of 5 to 10 sessions for the most dramatic and long-lasting transformation.",
  },
  {
    q: "What should I do to prepare for CryoSlimming?",
    a: "For the best results, it is important to refrain from eating any sugar or carbohydrates for 2 hours before and after your appointment. Staying well-hydrated before and after your session also helps your body process the treatment effectively.",
  },
  {
    q: "Is there any downtime?",
    a: downtimeAnswer,
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-sky-50/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-base sm:text-lg text-foreground leading-snug">
          {question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border-2 border-secondary flex items-center justify-center text-secondary transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-secondary text-white border-secondary" : ""
          }`}
        >
          <Plus className={`w-4 h-4 transition-colors ${isOpen ? "text-white" : "text-secondary"}`} />
        </span>
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
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-border/40 pt-4">
                {typeof answer === "string" ? (
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base bg-sky-50/60 rounded-xl px-4 py-3">
                    {answer}
                  </p>
                ) : (
                  <div className="text-sm sm:text-base">
                    {answer}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-4 bg-secondary/10 px-4 py-1.5 rounded-full"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display text-foreground"
          >
            Common Questions about CryoSkin
          </motion.h2>
        </div>

        {/* Accordion list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-3"
        >
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          Have a different question?{" "}
          <a
            href="sms:+18339245620"
            className="text-secondary font-semibold underline underline-offset-2 hover:text-secondary/80 transition-colors"
          >
            Text us at (833) 924-5620
          </a>{" "}
          or{" "}
          <a
            href="https://lss-spa-wellness-llc.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-semibold underline underline-offset-2 hover:text-secondary/80 transition-colors"
          >
            Book a Free Consultation
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
