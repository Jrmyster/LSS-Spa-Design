import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-spa.png`}
          alt="Bright and clean spa interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft warm gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-semibold text-sm tracking-wider uppercase mb-6 border border-secondary/20">
              Grand Opening
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6 text-balance"
          >
            Welcome to LSS <br className="hidden md:block" />
            <span className="text-secondary italic">Spa & Wellness</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
          >
            Specializing in corrective skincare and CryoSkin therapies. 
            Experience personalized treatments designed to lift, brighten, and transform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="rounded-full text-base px-8 h-14 group" asChild>
              <a href="https://lss-spa-wellness-llc.square.site/" target="_blank" rel="noopener noreferrer">
                Book an Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 h-14 bg-white/50 backdrop-blur-sm" asChild>
              <a href="#services">View Services</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative organic shape */}
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0"></div>
    </section>
  );
}
