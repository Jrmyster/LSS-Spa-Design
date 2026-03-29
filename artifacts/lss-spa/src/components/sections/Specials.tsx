import { motion } from "framer-motion";
import { Sparkles, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Specials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Soft floral background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Petal shapes top-left */}
        <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-yellow-100/60 blur-2xl" />
        <div className="absolute top-0 left-24 w-32 h-32 rounded-full bg-pink-100/50 blur-xl" />
        {/* Petal shapes bottom-right */}
        <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-yellow-100/60 blur-2xl" />
        <div className="absolute bottom-0 right-24 w-32 h-32 rounded-full bg-pink-100/50 blur-xl" />
        {/* Center soft bloom */}
        <div className="absolute inset-0 m-auto w-[600px] h-[300px] rounded-full bg-amber-50/40 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl border-2 border-dashed border-yellow-300 bg-gradient-to-br from-amber-50 via-white to-pink-50 p-8 sm:p-12 text-center shadow-lg shadow-yellow-100/60 relative"
        >
          {/* Floral corner accents */}
          <span className="absolute top-4 left-5 text-2xl select-none opacity-70">🌸</span>
          <span className="absolute top-4 right-5 text-2xl select-none opacity-70">🌻</span>
          <span className="absolute bottom-4 left-5 text-2xl select-none opacity-70">🌻</span>
          <span className="absolute bottom-4 right-5 text-2xl select-none opacity-70">🌸</span>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-sm"
          >
            <Tag className="w-3.5 h-3.5" />
            Spring Specials — Grand Opening
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-display text-foreground mb-4 leading-tight"
          >
            Celebrate Our Grand Opening!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto leading-relaxed"
          >
            Celebrate our Grand Opening with{" "}
            <span className="font-bold text-foreground">20% off all IMAGE Skincare products</span>{" "}
            at your next appointment!
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-muted-foreground mb-8"
          >
            Plus ask about our <span className="font-semibold text-foreground">Intro Cryoskin Rates</span> — limited time only. Valid at our Menomonee Falls location.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              asChild
              className="rounded-full px-10 h-14 text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
            >
              <a href="https://lss-spa-wellness-llc.square.site/" target="_blank" rel="noopener noreferrer">
                <Sparkles className="w-4 h-4 mr-2" />
                Book &amp; Save
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
