import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Phone, CalendarCheck, Gift, Loader2 } from "lucide-react";
import { useState } from "react";

function SunflowerDivider() {
  return (
    <div className="flex items-center gap-2 justify-center my-1 select-none">
      <span className="text-lg">🌻</span>
      <span className="text-lg">🌻</span>
      <span className="text-lg">🌻</span>
    </div>
  );
}

export function Specials() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleGiveaway(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/giveaway/enter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json() as { ok: boolean; message?: string; error?: string };
      if (data.ok) {
        setStatus("success");
        setMessage(data.message ?? "You're entered! Good luck! 🌻");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-amber-50">
      {/* Sky background accents matching the flyer */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-blue-100/40 blur-2xl" />
        <div className="absolute -bottom-10 left-1/4 w-80 h-48 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl border-2 border-amber-300 bg-white/80 backdrop-blur shadow-2xl shadow-amber-100/60 overflow-hidden"
        >
          {/* Sunflower banner strip */}
          <div className="bg-amber-400 py-2 px-4 text-center text-2xl tracking-widest select-none">
            🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻
          </div>

          <div className="p-8 sm:p-10 text-center">

            {/* MAIN HEADLINE */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-display font-bold text-red-600 mb-1 leading-tight tracking-tight"
            >
              🌻 MY SPA IS NOW OPEN!!! 🌻
            </motion.h2>

            <SunflowerDivider />

            {/* GRAND OPENING SPECIALS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-display font-bold text-sky-700 mb-5 tracking-wide">
                🌻 Grand Opening Specials & Giveaways 🌻
              </h3>

              <ul className="text-left space-y-4 mb-6 max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">
                    <span className="font-bold">Buy a series,</span> get a{" "}
                    <span className="font-bold text-rose-600">FREE Treatment</span> of the same series.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">
                    <span className="font-bold text-rose-600">SAVE 10%</span> on all retail purchases.
                  </span>
                </li>
              </ul>

              {/* BOOK NOW CTA */}
              <motion.a
                href="https://lss-spa-wellness-llc.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-emerald-200 transition-colors mb-2"
              >
                <CalendarCheck className="w-5 h-5" />
                BOOK NOW to Secure Discount Pricing!
              </motion.a>
            </motion.div>

            {/* Divider */}
            <div className="border-t-2 border-dashed border-amber-200 my-8" />
            <SunflowerDivider />

            {/* GIVEAWAY SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Gift className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">
                  WIN A SPA GIFT BASKET!
                </h3>
                <Gift className="w-6 h-6 text-amber-500" />
              </div>
              <p className="text-sm font-semibold text-amber-700 mb-1">($300 Value)</p>
              <p className="text-sm text-muted-foreground mb-6">
                Enter your name &amp; email for a chance to win!
              </p>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 border border-emerald-200 rounded-2xl px-6 py-6 text-center"
                  >
                    <div className="text-4xl mb-2">🌻</div>
                    <p className="font-bold text-emerald-700 text-lg">You're entered!</p>
                    <p className="text-sm text-muted-foreground mt-1">{message}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleGiveaway}
                    className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 space-y-4 text-left"
                  >
                    <div>
                      <label htmlFor="giveaway-name" className="block text-xs font-bold text-foreground uppercase tracking-wide mb-1">
                        Your Name
                      </label>
                      <input
                        id="giveaway-name"
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setStatus("idle"); }}
                        placeholder="Kim Collins"
                        required
                        minLength={2}
                        className="w-full rounded-xl border border-amber-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="giveaway-email" className="block text-xs font-bold text-foreground uppercase tracking-wide mb-1">
                        Email Address
                      </label>
                      <input
                        id="giveaway-email"
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-xl border border-amber-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 placeholder:text-muted-foreground/50"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-rose-600 font-medium bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
                        {message}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 disabled:opacity-70 text-white font-bold py-3 rounded-xl transition-colors shadow-md shadow-amber-100 text-sm"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Entering…
                        </>
                      ) : (
                        <>
                          🎁 Enter the Giveaway
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-center text-muted-foreground">
                      One entry per email. Winner notified by phone or email.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Divider */}
            <div className="border-t-2 border-dashed border-amber-200 mt-8 mb-6" />

            {/* I CAN'T WAIT TO SEE YOU */}
            <p className="font-display text-xl sm:text-2xl font-bold text-sky-700 mb-6">
              🌻 I Can't Wait To See You! 🌻
            </p>

            {/* QR Code + phone row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              {/* QR */}
              <div className="flex flex-col items-center gap-1">
                <img
                  src={`${import.meta.env.BASE_URL}images/qr-code.jpg`}
                  alt="QR Code — Scan to Schedule"
                  className="w-24 h-24 object-cover rounded-xl border-2 border-amber-300 shadow"
                />
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">Scan to Schedule</p>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-16 bg-amber-200" />

              {/* Phone */}
              <a
                href="tel:+18339245620"
                className="flex flex-col items-center gap-1 group"
              >
                <div className="w-12 h-12 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                  <Phone className="w-5 h-5 text-sky-600" />
                </div>
                <p className="font-bold text-lg text-foreground group-hover:text-sky-700 transition-colors">
                  833-924-5620
                </p>
                <p className="text-[11px] text-muted-foreground">Call or Text</p>
              </a>
            </div>

          </div>

          {/* Bottom sunflower strip */}
          <div className="bg-amber-400 py-2 px-4 text-center text-2xl tracking-widest select-none">
            🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻
          </div>
        </motion.div>
      </div>
    </section>
  );
}
