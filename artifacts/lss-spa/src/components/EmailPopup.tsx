import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

const STORAGE_KEY = "lss_email_popup_dismissed";

export function EmailPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    // Trigger after 7 seconds
    timerRef.current = setTimeout(() => setOpen(true), 7000);

    // Also trigger after 50% scroll
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled >= 0.5) {
        if (timerRef.current) clearTimeout(timerRef.current);
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]"
            onClick={dismiss}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label="VIP Newsletter Sign-up"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-md bg-white rounded-2xl border-2 border-yellow-300 shadow-2xl shadow-yellow-100/60 pointer-events-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold accent bar at top */}
              <div className="h-1.5 w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300" />

              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>

              <div className="px-7 pt-7 pb-8">
                {!submitted ? (
                  <>
                    {/* Decorative top */}
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-yellow-50 border-2 border-yellow-200 flex items-center justify-center text-2xl shadow-sm">
                        🌻
                      </div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl sm:text-3xl font-display text-foreground text-center leading-snug mb-2">
                      ✨ Want $10 Off Your Next Glow?
                    </h2>

                    {/* Sub-headline */}
                    <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed mb-6">
                      Join our VIP newsletter for skincare tips and exclusive deals. Get{" "}
                      <span className="font-bold text-foreground">$10 OFF</span> your first Diamond Glow treatment just for signing up!
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate>
                      <label htmlFor="popup-email" className="sr-only">
                        Email Address
                      </label>
                      <input
                        id="popup-email"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 mb-1 ${
                          error ? "border-red-400" : "border-border"
                        }`}
                        autoComplete="email"
                      />
                      {error && (
                        <p className="text-xs text-red-500 mb-2 pl-1">{error}</p>
                      )}
                      <button
                        type="submit"
                        className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-sm shadow-md shadow-yellow-200 hover:shadow-lg hover:shadow-yellow-300 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        style={{ backgroundColor: "#FCD34D", color: "#111" }}
                      >
                        <Sparkles className="w-4 h-4" />
                        Claim My $10 Off
                      </button>
                    </form>

                    {/* Dismiss link */}
                    <p className="text-center mt-4">
                      <button
                        onClick={dismiss}
                        className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
                      >
                        No thanks, I don't want a discount
                      </button>
                    </p>
                  </>
                ) : (
                  /* Success state */
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="py-4 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-3xl shadow-sm">
                        ✅
                      </div>
                    </div>
                    <h3 className="text-2xl font-display text-foreground mb-3 leading-snug">
                      You're In!
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                      Check your inbox! Your{" "}
                      <span className="font-bold text-foreground">$10 discount code</span> is on its way. ✨
                    </p>
                    <button
                      onClick={dismiss}
                      className="inline-flex items-center gap-2 rounded-full px-7 py-2.5 font-bold text-sm shadow-md hover:scale-105 transition-all"
                      style={{ backgroundColor: "#FCD34D", color: "#111" }}
                    >
                      Continue Exploring
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
