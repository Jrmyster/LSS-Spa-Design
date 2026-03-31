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

// Coupon-specific theme — green for SPRING20, amber for everything else
function getTheme(coupon: string) {
  if (coupon === "SPRING20") {
    return {
      headerBg: "bg-green-600",
      headerEmoji: "🌿",
      focusBorder: "focus:border-green-400",
      submitBtn: "bg-green-600 hover:bg-green-700 shadow-green-200",
      revealBg: "bg-green-50 border-green-300",
      revealText: "text-green-700",
      revealCopyBtn: "bg-green-100 hover:bg-green-200",
      revealCopyIcon: "text-green-600",
      ctaBtn: "bg-green-600 hover:bg-green-700 shadow-green-200",
      successIcon: "text-green-500",
    } as const;
  }
  // Default amber theme (REFER20, MARCH20)
  return {
    headerBg: "bg-amber-400",
    headerEmoji: "🌻",
    focusBorder: "focus:border-amber-400",
    submitBtn: "bg-amber-400 hover:bg-amber-500 shadow-amber-200",
    revealBg: "bg-amber-50 border-amber-300",
    revealText: "text-amber-700",
    revealCopyBtn: "bg-amber-100 hover:bg-amber-200",
    revealCopyIcon: "text-amber-600",
    ctaBtn: "bg-amber-400 hover:bg-amber-500 shadow-amber-200",
    successIcon: "text-amber-500",
  } as const;
}

function getSuccessMessage(coupon: string, firstName: string): string {
  if (coupon === "SPRING20") {
    return `Success! Use code SPRING20 at the spa or during checkout to save 20%. Click below to book your appointment now!`;
  }
  if (coupon === "REFER20") {
    return `Thanks for referring a friend, ${firstName}! Show this code when your friend books their first appointment.`;
  }
  return "Show this code at checkout or mention it when booking online:";
}

export function CouponClaimModal({ coupon, title, onClose }: Props) {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [revealedCode, setRevealedCode] = useState<string>(coupon);
  const nameRef = useRef<HTMLInputElement>(null);
  const theme = getTheme(coupon);

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

  const firstName = name.split(" ")[0] || "there";

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
          {/* Header band — theme-colored */}
          <div className={`${theme.headerBg} px-6 py-4 flex items-center justify-between`}>
            <p className="text-white font-bold text-sm uppercase tracking-widest">
              {theme.headerEmoji} {COUPON_LABELS[coupon] ?? coupon} Coupon
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
                      className={`w-full border-2 border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${theme.focusBorder} disabled:opacity-60 transition-colors`}
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
                      className={`w-full border-2 border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${theme.focusBorder} disabled:opacity-60 transition-colors`}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 font-medium">⚠ {error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={step === "submitting"}
                    className={`w-full inline-flex items-center justify-center gap-2 ${theme.submitBtn} disabled:opacity-70 text-white font-bold text-base rounded-full py-3.5 transition-colors shadow-lg`}
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
                <CheckCircle2 className={`w-12 h-12 ${theme.successIcon} mx-auto mb-3`} />
                <h2 className="text-xl font-display font-bold text-foreground mb-1">
                  You're all set, {firstName}!
                </h2>
                <p className="text-sm text-muted-foreground mb-5 leading-snug">
                  {getSuccessMessage(revealedCode, firstName)}
                </p>

                {/* Coupon code — large bold monospace for easy screenshotting */}
                <div className={`relative flex items-center justify-center ${theme.revealBg} border-2 rounded-2xl px-6 py-4 mb-2 group`}>
                  <span className={`font-mono font-extrabold text-3xl ${theme.revealText} tracking-[0.2em]`}>
                    {revealedCode}
                  </span>
                  <button
                    onClick={handleCopy}
                    aria-label="Copy coupon code"
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg ${theme.revealCopyBtn} transition-colors`}
                  >
                    {copied
                      ? <Check className={`w-4 h-4 ${theme.revealCopyIcon}`} />
                      : <Copy className={`w-4 h-4 ${theme.revealCopyIcon}`} />
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
                  className={`w-full inline-flex items-center justify-center gap-2 ${theme.ctaBtn} text-white font-extrabold text-base rounded-full py-3.5 transition-colors shadow-lg`}
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
