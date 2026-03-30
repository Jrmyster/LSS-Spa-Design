import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock, Snowflake, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const tips = [
  {
    icon: MapPin,
    title: "Parking",
    body: "Plenty of free parking is available directly in front of our Appleton Avenue entrance.",
    color: "text-primary",
    bg: "bg-yellow-50",
  },
  {
    icon: Clock,
    title: "Arrival",
    body: "Please arrive 5–10 minutes early to relax and fill out any necessary wellness forms.",
    color: "text-secondary",
    bg: "bg-sky-50",
  },
  {
    icon: Snowflake,
    title: "CryoSkin Prep",
    body: "For CryoSkin treatments, remember to avoid sugar and carbs 2 hours before and after your session!",
    color: "text-secondary",
    bg: "bg-sky-50",
  },
];

export default function BookingConfirmed() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col">

      {/* Soft floral background blobs */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-yellow-100/70 blur-3xl" />
        <div className="absolute top-10 left-1/3 w-40 h-40 rounded-full bg-pink-100/50 blur-2xl" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-yellow-100/70 blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-40 h-40 rounded-full bg-sky-100/50 blur-2xl" />
      </div>

      {/* Sunflower corner decorations */}
      <span className="absolute top-5 left-5 text-3xl select-none opacity-50">🌻</span>
      <span className="absolute top-5 right-5 text-3xl select-none opacity-50">🌸</span>
      <span className="absolute bottom-20 left-5 text-3xl select-none opacity-40">🌸</span>
      <span className="absolute bottom-20 right-5 text-3xl select-none opacity-40">🌻</span>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-xl mx-auto text-center">

          {/* Success icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <CheckCircle2 className="w-24 h-24 text-emerald-500 drop-shadow-lg" strokeWidth={1.5} />
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-emerald-100 blur-xl opacity-60 -z-10 scale-125" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-display text-foreground mb-4 leading-tight"
          >
            We Can't Wait to See You! ✨
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md mx-auto"
          >
            Your appointment has been successfully requested. Please check your email for a confirmation from Square.
          </motion.p>

          {/* Arrival Tips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="rounded-2xl border border-border/60 overflow-hidden shadow-md shadow-gray-100/80 text-left mb-10"
          >
            <div className="bg-gray-50 px-5 py-3 border-b border-border/50">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Before You Arrive
              </p>
            </div>
            {tips.map((tip, i) => {
              const Icon = tip.icon;
              return (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-5 py-4 ${i < tips.length - 1 ? "border-b border-border/40" : ""} bg-white hover:bg-gray-50/60 transition-colors`}
                >
                  <div className={`shrink-0 w-9 h-9 rounded-xl ${tip.bg} flex items-center justify-center mt-0.5`}>
                    <Icon className={`w-5 h-5 ${tip.color}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{tip.title}</p>
                    <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed">{tip.body}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Phone reminder */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.95 }}
            className="mt-6 text-xs text-muted-foreground"
          >
            Questions? Call or text us at{" "}
            <a href="tel:+18339245620" className="text-secondary underline underline-offset-2 font-semibold">
              (833) 924-5620
            </a>
          </motion.p>
        </div>
      </main>
    </div>
  );
}
