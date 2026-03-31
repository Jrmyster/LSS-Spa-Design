import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2, CalendarCheck, Copy, Check } from "lucide-react";

const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";

interface Props {
  coupon: "MARCH20" | "REFER20" | "SPRING20";
  title: string;
  onClose: () => void;
}

type Step = "form" | "submitting" | "revealed";

const COUPON_LABELS: Record<string, string> = {
  MARCH20: "March Madness",
  REFER20: "Referral Reward",
  SPRING20: "Spring Sale",
};

const COUPON_FINE_PRINT: Record<string, string> = {
  MARCH20: "Valid March 2026 · In-stock retail products only · Cannot be combined",
  REFER20: "Valid for first-time referred clients · One use per person",
  SPRING20: "Valid while supplies last · In-stock retail products only · Cannot be combined with other offers",
};

function headerClass(coupon: string): string {
  if (coupon === "SPRING20") return "bg-green-600";
  return "bg-amber-400";
}

function headerEmoji(coupon: string): string {
  if (coupon === "SPRING20") return "🌿";
  return "🌻";
}

export function CouponClaimModal({ coupon, title, onClose }: Props) {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [revealedCode, setRevealedCode] = useState<string>(coupon);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setStep("submitting");
    try {
      const res = await fetch("/api/coupons/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), coupon }),
      });
      const data = await res.json();
      if (!data.ok && !data.alreadyClaimed) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStep("form");
      } else {
        setRevealedCode(data.code ?? coupon);
        setStep("revealed");
      }
    } catch {
      setError("Network error — please check your connection and try again.");
      setStep("form");
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(revealedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* ignore */ }
  }

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
        aria-label="Close modal"
      >
        {/* Panel */}
        <motion.div
          key="panel"
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Claim your coupon"
        >
          {/* Header band — green for SPRING20, amber for others */}
          <div className={`${headerClass(coupon)} px-6 py-4 flex items-center justify-between`}>
            <p className="text-white font-bold text-sm uppercase tracking-widest">
              {headerEmoji(coupon)} {COUPON_LABELS[coupon] ?? coupon} Coupon
            </p>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="px-7 py-6">
            {/* ── STEP: FORM ── */}
            {(step === "form" || step === "submitting") && (
              <>
                <h2 className="text-xl font-display font-bold text-foreground mb-1 leading-tight">
                  {title}
                </h2>
                <p className="text-sm text-muted-foreground mb-6 leading-snug">
                  Enter your details and we'll reveal your exclusive 20% off code instantly.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="claim-name" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="claim-name"
                      ref={nameRef}
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Kim Collins"
                      disabled={step === "submitting"}
                      className="w-full border-2 border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-400 disabled:opacity-60 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="claim-email" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="claim-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      disabled={step === "submitting"}
                      className="w-full border-2 border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-400 disabled:opacity-60 transition-colors"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 font-medium">⚠ {error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={step === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-70 text-white font-bold text-base rounded-full py-3.5 transition-colors shadow-lg shadow-green-200"
                  >
                    {step === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Claiming…
                      </>
                    ) : (
                      "Reveal My Coupon Code →"
                    )}
                  </button>
                </form>

                <p className="text-[10.5px] text-muted-foreground text-center mt-4 leading-relaxed">
                  By claiming this coupon, you agree to receive occasional wellness updates
                  from LSS Spa &amp; Wellness. We never sell your data.
                </p>
              </>
            )}

            {/* ── STEP: REVEALED ── */}
            {step === "revealed" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="text-center py-2"
              >
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h2 className="text-xl font-display font-bold text-foreground mb-1">
                  You're all set, {name.split(" ")[0]}! 🌿
                </h2>
                <p className="text-sm text-muted-foreground mb-5 leading-snug">
                  {revealedCode === "SPRING20"
                    ? "Use code SPRING20 at the spa or during checkout to save. Click below to book your appointment now!"
                    : "Show this code at checkout or enter it when booking online:"}
                </p>

                {/* Coupon code — large bold monospace for easy screenshotting */}
                <div className="relative flex items-center justify-center bg-green-50 border-2 border-green-300 rounded-2xl px-6 py-4 mb-2 group">
                  <span className="font-mono font-extrabold text-3xl text-green-700 tracking-[0.2em]">
                    {revealedCode}
                  </span>
                  <button
                    onClick={handleCopy}
                    aria-label="Copy coupon code"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-green-100 hover:bg-green-200 transition-colors"
                  >
                    {copied
                      ? <Check className="w-4 h-4 text-green-600" />
                      : <Copy className="w-4 h-4 text-green-600" />
                    }
                  </button>
                </div>

                <p className="text-xs text-muted-foreground mb-6">
                  {COUPON_FINE_PRINT[revealedCode] ?? ""}
                </p>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-extrabold text-base rounded-full py-3.5 transition-colors shadow-lg shadow-green-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book My Appointment Now
                </a>

                <button
                  onClick={onClose}
                  className="mt-3 text-sm text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
