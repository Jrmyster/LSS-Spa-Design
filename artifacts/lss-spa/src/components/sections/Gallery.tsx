import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export function Gallery() {
  const images = [
    { id: 1, src: "gallery-1.png", alt: "Facial before and after results", label: "Corrective Facial" },
    { id: 2, src: "gallery-2.png", alt: "Cryoskin before and after results", label: "Cryoskin Toning" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">Real Results</h2>
          <p className="text-lg text-muted-foreground">
            Swipe to see the transformative power of our treatments. 
            More before & afters coming soon!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-border"
            >
              <div className="aspect-[16/9] w-full">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${img.src}`} 
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay labels */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {img.label}
                  </span>
                  <div className="flex gap-2">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-[10px] uppercase tracking-wider">Before</span>
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-[10px] uppercase tracking-wider">After</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 bg-muted rounded-2xl border border-border/50 border-dashed"
        >
          <Camera className="w-8 h-8 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-display text-foreground mb-2">More Results Available In-Spa</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Contact us for a consultation to see an extensive portfolio of our client results tailored to your specific goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
