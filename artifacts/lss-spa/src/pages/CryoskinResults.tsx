import { motion } from "framer-motion";
import { ArrowLeft, Snowflake } from "lucide-react";
import { Link } from "wouter";
import { CryoskinShowcase } from "@/components/sections/CryoskinShowcase";
import { CryoFacialSpotlight } from "@/components/sections/CryoFacialSpotlight";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TopBanner } from "@/components/TopBanner";
import { FloatingBookButton } from "@/components/FloatingBookButton";

export default function CryoskinResults() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <TopBanner />
      <Navbar />

      <main>
        {/* Page hero */}
        <section className="py-20 bg-gradient-to-b from-amber-50/60 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-100/60 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            >
              <Snowflake className="w-3.5 h-3.5" />
              Cryoskin Results Gallery
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display text-foreground mb-4 leading-tight"
            >
              Transformation Gallery
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-display italic text-amber-600 mb-4"
            >
              Glow. Lift. Sculpt.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Real Results, Real People. Browse our before &amp; after photos from actual Cryoskin
              treatments performed right here in Menomonee Falls.
            </motion.p>
          </div>
        </section>

        {/* Results showcase — no header (page already has one) */}
        <CryoskinShowcase showHeader={false} />

        {/* CryoFacial deep-dive feature block */}
        <CryoFacialSpotlight />

        {/* Back link */}
        <div className="py-10 text-center border-t border-border/40">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
      <FloatingBookButton />
    </div>
  );
}
