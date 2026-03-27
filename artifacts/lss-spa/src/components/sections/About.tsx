import { motion } from "framer-motion";
import { BadgeCheck, Heart, Sparkle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-2">Meet Kim Collins</h2>
          <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-8">Licensed Esthetician & Owner</p>

          <div className="space-y-5 text-lg text-muted-foreground mb-10 text-left">
            <p>
              Skincare & corrective work is my passion. I specialize in Cryo Therapy — the results are amazing.
            </p>
            <p>
              Whatever your concern is — to lose inches or tighten & tone — my Cryoskin treatments deliver. My Facial treatments can correct, lift, brighten, tone & take years off your appearance.
            </p>
            <p>
              At LSS Spa & Wellness, every client receives personalized care in a warm, welcoming environment. Your transformation is my mission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl shadow-sm border border-border/30">
              <BadgeCheck className="w-8 h-8 text-primary" />
              <span className="font-semibold text-foreground">Licensed & Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl shadow-sm border border-border/30">
              <Sparkle className="w-8 h-8 text-secondary" />
              <span className="font-semibold text-foreground">Corrective Focus</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl shadow-sm border border-border/30">
              <Heart className="w-8 h-8 text-accent" />
              <span className="font-semibold text-foreground">Client Centered</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
