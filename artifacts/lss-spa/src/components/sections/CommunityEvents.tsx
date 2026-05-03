import { motion } from "framer-motion";
import { Users, MapPin } from "lucide-react";

interface EventPhoto {
  src: string;
  alt: string;
  caption: string;
  eyebrow: string;
}

const EVENT_PHOTOS: EventPhoto[] = [
  {
    src: "images/community-event-1.jpg",
    alt: "Kim Collins of LSS Spa & Wellness at a Menomonee Falls community event — connecting with neighbors and local business owners",
    caption: "Connecting with our wonderful Menomonee Falls neighbors at a recent community gathering.",
    eyebrow: "Local Outreach",
  },
  {
    src: "images/community-event-2.jpg",
    alt: "LSS Spa & Wellness representing the studio at a Menomonee Falls downtown community event",
    caption: "Representing LSS Spa & Wellness in the heart of downtown Menomonee Falls.",
    eyebrow: "Falls Downtown",
  },
];

export function CommunityEvents() {
  return (
    <section id="community-events" className="py-20 bg-stone-50 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Users className="w-3.5 h-3.5" />
            Community Events
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4 leading-tight">
            Out & About in the Community
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We love being part of the Menomonee Falls community — meeting neighbors,
            supporting local businesses, and sharing the LSS spirit beyond the studio walls.
          </p>
        </motion.div>

        {/* ── Photo Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {EVENT_PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              {/* Image — natural aspect ratio for full visibility */}
              <div className="relative overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${photo.src}`}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Eyebrow chip — top-left */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm bg-amber-400/90 backdrop-blur-sm text-amber-900">
                    {photo.eyebrow}
                  </span>
                </div>
              </div>

              {/* Caption bar */}
              <div className="px-5 py-4 flex items-start gap-2.5 border-t border-stone-100">
                <span className="w-1 h-4 rounded-full bg-amber-400 shrink-0 mt-1" />
                <p className="text-sm text-foreground leading-snug font-sans">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer location note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground italic mt-8"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-600" />
          Menomonee Falls, WI &amp; surrounding communities
        </motion.p>
      </div>
    </section>
  );
}
