import { motion } from "framer-motion";
import { Camera, Instagram } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    src: "images/facebook-photos.png",
    alt: "LSS Spa and Wellness — treatments, Cryoskin infographics, and service showcase",
    label: "Our Work & Treatments",
    caption: "Cryoskin infographics, before & after results, and product showcases from our social media",
    wide: true,
  },
  {
    id: 2,
    src: "images/gallery-1.png",
    alt: "Facial results",
    label: "Corrective Facials",
    caption: "Targeted treatments for real skin transformation",
    wide: false,
  },
  {
    id: 3,
    src: "images/gallery-2.png",
    alt: "Cryoskin body results",
    label: "Cryoskin Toning",
    caption: "Non-invasive body contouring with visible results",
    wide: false,
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">Results & Gallery</h2>
          <p className="text-lg text-muted-foreground">
            See the transformative power of our treatments — from Cryoskin body contouring to corrective facials.
          </p>
        </div>

        {/* Two column row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { src: "images/gallery-1.png", alt: "Facial before and after results", label: "Corrective Facial" },
            { src: "images/gallery-2.png", alt: "Cryoskin before and after results", label: "Cryoskin Toning" },
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-border"
            >
              <div className="aspect-[16/9] w-full">
                <img 
                  src={`${import.meta.env.BASE_URL}${img.src}`} 
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
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

        {/* Cryoskin Info Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 rounded-2xl overflow-hidden bg-sky-50 border border-border/50 p-8"
        >
          <h3 className="text-2xl font-display text-foreground mb-3">Why Cryoskin?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-border/30">
              <p className="font-bold text-secondary text-lg mb-1">Safe & Effective</p>
              <p className="text-muted-foreground text-sm">A safe & effective way to help your body respond when diet and exercise aren't enough.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-border/30">
              <p className="font-bold text-secondary text-lg mb-1">No Downtime</p>
              <p className="text-muted-foreground text-sm">Reduce the appearance of cellulite & support lymphatic drainage WITHOUT downtime, surgery, or discomfort.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-border/30">
              <p className="font-bold text-secondary text-lg mb-1">Real Results</p>
              <p className="text-muted-foreground text-sm">Cryoskin uses cold temperatures to permanently destroy fat cells, improve skin tone & tighten.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-center p-8 bg-muted rounded-2xl border border-border/50 border-dashed"
        >
          <Camera className="w-8 h-8 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-display text-foreground mb-2">More Results Available In-Spa</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-4">
            Contact us for a consultation to see an extensive portfolio of client results tailored to your specific goals.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Instagram className="w-4 h-4" />
            <span>Follow us on Facebook & Instagram for the latest results and promotions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
