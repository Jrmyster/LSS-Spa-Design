import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Tag, AlertCircle } from "lucide-react";

const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";
const VALID_CODE = "GLOW10";

type Step = "input" | "success" | "invalid";

interface Props {
  onClose: () => void;
}

function openBooking() {
  window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
}

export function PromoCodeModal({ onClose }: Props) {
  const [code, setCode] = useState("");
  const [step, setStep] = useState<Step>("input");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function handleApply() {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === VALID_CODE) {
      setStep("success");
    } else if (trimmed === "") {
      // Treat empty as skip
      handleSkip();
    } else {
      setStep("invalid");
    }
  }

  function handleSkip() {
    onClose();
    openBooking();
  }

  function handleBook() {
    onClose();
    openBooking();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleApply();
    if (e.key === "Escape") onClose();
  }

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        key="panel"
        role="dialog"
        aria-modal="true"
        aria-label="Promo code entry"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top accent strip */}
          <div className="h-1.5 w-full bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>

          <div className="px-7 pt-7 pb-7">
            {/* ── INPUT STATE ── */}
            {(step === "input" || step === "invalid") && (
              <motion.div
                key="input-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-50 border-2 border-yellow-200 flex items-center justify-center">
                    <Tag className="w-5 h-5 text-yellow-500" />
                  </div>
                </div>

                <h2 className="text-xl font-display font-bold text-foreground text-center mb-1 leading-snug">
                  Do you have a promo code?
                </h2>
                <p className="text-sm text-muted-foreground text-center mb-6 leading-snug">
                  Enter your code below, or skip to go straight to booking.
                </p>

                {/* Input row */}
                <div className="flex gap-2 mb-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      if (step === "invalid") setStep("input");
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="e.g. GLOW10"
                    maxLength={20}
                    className={`flex-1 border-2 rounded-xl px-4 py-3 text-sm font-mono tracking-wider text-foreground placeholder:text-muted-foreground outline-none transition-colors uppercase ${
                      step === "invalid"
                        ? "border-red-400 focus:border-red-400"
                        : "border-border focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                    }`}
                    aria-label="Promo code"
                    aria-invalid={step === "invalid"}
                  />
                  <button
                    onClick={handleApply}
                    className="shrink-0 px-5 py-3 rounded-xl font-bold text-sm text-white bg-foreground hover:bg-foreground/85 transition-colors shadow-sm"
                  >
                    Apply
                  </button>
                </div>

                {/* Inline error */}
                {step === "invalid" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1.5 text-xs text-red-600 font-medium mb-2 pl-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    That code isn't valid. Check the spelling or skip to continue.
                  </motion.p>
                )}

                {/* Skip */}
                <div className="mt-4 text-center">
                  <button
                    onClick={handleSkip}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
                  >
                    Skip, take me to booking
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Note */}
                <p className="mt-5 text-[11px] text-muted-foreground/70 leading-relaxed text-center border-t border-gray-100 pt-4">
                  Note: Please mention your code to Kim during your appointment to ensure your discount is applied to your final total.
                </p>
              </motion.div>
            )}

            {/* ── SUCCESS STATE ── */}
            {step === "success" && (
              <motion.div
                key="success-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                <h2 className="text-xl font-display font-bold text-foreground mb-1 leading-tight">
                  Code Applied!
                </h2>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Your <span className="font-bold text-foreground">$10 discount</span> will be honored at the studio. Just mention <span className="font-mono font-bold text-emerald-700">GLOW10</span> to Kim when you arrive.
                </p>

                <button
                  onClick={handleBook}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-full py-3.5 transition-colors shadow-lg shadow-emerald-200 mb-3"
                >
                  Book My Appointment Now
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Note */}
                <p className="text-[11px] text-muted-foreground/70 leading-relaxed border-t border-gray-100 pt-4">
                  Note: Please mention your code to Kim during your appointment to ensure your discount is applied to your final total.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
