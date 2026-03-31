import { motion } from "framer-motion";
import { CheckCircle2, Phone, CalendarCheck, Gift, Users, Share2, MessageSquare } from "lucide-react";
import { QRCodeLightbox } from "@/components/QRCodeLightbox";
import { useState } from "react";

const SITE_URL = "https://lss-spa-wellness-llc.square.site/";

const SMS_BODY = encodeURIComponent(
  "Hey! I've been going to LSS Spa & Wellness and love my results. If you book a session and mention my name, we both get 20% off! Check them out here: https://www.google.com/search?q=lssspawellness.com"
);
const SMS_URL = `sms:?body=${SMS_BODY}`;

function SunflowerDivider() {
  return (
    <div className="flex items-center gap-2 justify-center my-1 select-none">
      <span className="text-lg">🌻</span>
      <span className="text-lg">🌻</span>
      <span className="text-lg">🌻</span>
    </div>
  );
}

function ReferralCard() {
  const [shareState, setShareState] = useState<"idle" | "copied" | "shared">("idle");

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "LSS Spa & Wellness — CryoSkin & Corrective Skincare",
          text: "Check out LSS Spa & Wellness in Menomonee Falls! Kim Collins offers CryoSkin, Diamond Glow™, and more. Book online:",
          url: SITE_URL,
        });
        setShareState("shared");
        setTimeout(() => setShareState("idle"), 3000);
      } catch {
        /* user cancelled share sheet — no action */
      }
    } else {
      await navigator.clipboard.writeText(SITE_URL);
      setShareState("copied");
      setTimeout(() => setShareState("idle"), 3000);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="rounded-2xl border-2 border-amber-300 bg-amber-50/60 px-6 py-7 shadow-inner text-left"
    >
      {/* Title */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <Users className="w-6 h-6 text-amber-500 shrink-0" />
        <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground text-center">
          Share the Glow: Referral Rewards
        </h3>
        <Gift className="w-6 h-6 text-amber-500 shrink-0" />
      </div>

      {/* Subtitle */}
      <p className="text-sm text-center text-muted-foreground mb-5 leading-snug max-w-sm mx-auto">
        The best compliment you can give is a referral. We want to thank you for growing our community!
      </p>

      {/* Offer highlight */}
      <div className="bg-white rounded-xl border border-amber-200 px-5 py-4 mb-5 text-center shadow-sm">
        <p className="text-base sm:text-lg font-extrabold text-foreground leading-snug">
          Refer a new client &amp; <span className="text-rose-600">BOTH of you</span> receive{" "}
          <span className="text-emerald-600">20% OFF</span> your next service!
        </p>
      </div>

      {/* How it Works */}
      <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3 text-center">
        How It Works
      </p>
      <ol className="space-y-3 mb-7">
        {[
          "Tell your friend to mention your name when booking their first appointment.",
          "Once they complete their service, we will apply a 20% discount to their bill.",
          "You will receive a 20% discount credit to use on your next visit!",
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400 text-white text-xs font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <span className="text-sm text-foreground leading-snug">{step}</span>
          </li>
        ))}
      </ol>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-3">

        {/* PRIMARY — gold SMS button */}
        <a
          href={SMS_URL}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl shadow-amber-200/70 transition-colors"
        >
          <MessageSquare className="w-5 h-5 shrink-0" />
          Text This Offer to a Friend
        </a>

        {/* SECONDARY — share website (web share / clipboard fallback) */}
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 font-semibold text-sm transition-colors underline underline-offset-2"
        >
          <Share2 className="w-3.5 h-3.5" />
          {shareState === "copied"
            ? "Link Copied! ✓"
            : shareState === "shared"
            ? "Thanks for Sharing! 🌻"
            : "Or share the website"}
        </button>

        <p className="text-[10px] text-muted-foreground text-center">
          Discount applied after your friend completes their first service.
        </p>
      </div>
    </motion.div>
  );
}

export function Specials() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-amber-50">
      {/* Sky background accents */}
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
                🌻 Grand Opening Specials 🌻
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

            {/* REFERRAL REWARDS */}
            <ReferralCard />

            {/* Bottom divider */}
            <div className="border-t-2 border-dashed border-amber-200 mt-8 mb-6" />

            {/* I CAN'T WAIT TO SEE YOU */}
            <p className="font-display text-xl sm:text-2xl font-bold text-sky-700 mb-6">
              🌻 I Can't Wait To See You! 🌻
            </p>

            {/* QR Code + phone row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              {/* QR */}
              <QRCodeLightbox
                caption="Scan to Schedule"
                captionClass="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide"
                imgClass="w-24 h-24 object-cover rounded-xl border-2 border-amber-300 shadow"
              />

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
