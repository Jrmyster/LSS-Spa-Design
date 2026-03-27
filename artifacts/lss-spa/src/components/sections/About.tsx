import { motion } from "framer-motion";
import { BadgeCheck, Heart, Sparkle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-kim.png`} 
                alt="Kim Collins, Licensed Esthetician"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent background block */}
            <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] z-0 -rotate-3"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-display text-foreground mb-2">Meet Kim Collins</h2>
            <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-6">Licensed Esthetician & Owner</p>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Hello and welcome! I'm Kim, and my true passion is helping you feel confident, radiant, and comfortable in your own skin.
              </p>
              <p>
                At LSS Spa & Wellness, I specialize in corrective skincare and cutting-edge body treatments like Cryoskin. I believe that effective skincare shouldn't just be a luxury—it should be a personalized journey tailored specifically to your unique needs.
              </p>
              <p>
                Whether you're looking to lift and brighten your complexion, or achieve your body contouring goals, I am dedicated to delivering noticeable results in a warm, welcoming environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col gap-2">
                <BadgeCheck className="w-8 h-8 text-primary" />
                <span className="font-semibold text-foreground">Licensed & Certified</span>
              </div>
              <div className="flex flex-col gap-2">
                <Sparkle className="w-8 h-8 text-secondary" />
                <span className="font-semibold text-foreground">Corrective Focus</span>
              </div>
              <div className="flex flex-col gap-2">
                <Heart className="w-8 h-8 text-accent" />
                <span className="font-semibold text-foreground">Client Centered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
