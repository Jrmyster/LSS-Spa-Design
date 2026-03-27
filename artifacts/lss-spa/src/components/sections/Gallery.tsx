import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Camera } from "lucide-react";

interface GalleryCard {
  id: number;
  treatment: string;
  sessions: string;
  beforeBg: string;
  afterBg: string;
  beforeAlt: string;
  afterAlt: string;
}

const CARDS: GalleryCard[] = [
  {
    id: 1,
    treatment: "CryoSlimming",
    sessions: "5 Sessions",
    beforeBg: "from-stone-300 to-stone-400",
    afterBg: "from-sky-200 to-sky-300",
    beforeAlt: "Before CryoSlimming treatment",
    afterAlt: "After CryoSlimming treatment",
  },
  {
    id: 2,
    treatment: "CryoToning",
    sessions: "4 Sessions",
    beforeBg: "from-amber-200 to-amber-300",
    afterBg: "from-teal-200 to-teal-300",
    beforeAlt: "Before CryoToning treatment",
    afterAlt: "After CryoToning treatment",
  },
  {
    id: 3,
    treatment: "Anti-Aging Facial",
    sessions: "Immediate Results",
    beforeBg: "from-rose-200 to-rose-300",
    afterBg: "from-emerald-200 to-emerald-300",
    beforeAlt: "Before Anti-Aging Facial",
    afterAlt: "After Anti-Aging Facial",
  },
  {
    id: 4,
    treatment: "CryoFacial",
    sessions: "3 Sessions",
    beforeBg: "from-neutral-300 to-neutral-400",
    afterBg: "from-indigo-200 to-indigo-300",
    beforeAlt: "Before CryoFacial treatment",
    afterAlt: "After CryoFacial treatment",
  },
  {
    id: 5,
    treatment: "Hydrafacial",
    sessions: "Single Session",
    beforeBg: "from-yellow-200 to-yellow-300",
    afterBg: "from-lime-200 to-lime-300",
    beforeAlt: "Before Hydrafacial treatment",
    afterAlt: "After Hydrafacial treatment",
  },
  {
    id: 6,
    treatment: "Corrective Skincare",
    sessions: "8-Week Program",
    beforeBg: "from-orange-200 to-orange-300",
    afterBg: "from-cyan-200 to-cyan-300",
    beforeAlt: "Before Corrective Skincare",
    afterAlt: "After Corrective Skincare",
  },
];

function PlaceholderImage({
  gradientClass,
  label,
  labelColor,
  altText,
}: {
  gradientClass: string;
  label: string;
  labelColor: string;
  altText: string;
}) {
  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br ${gradientClass} flex flex-col items-center justify-center`}
      role="img"
      aria-label={altText}
    >
      <Camera className="w-8 h-8 text-white/60 mb-2" />
      <span className="text-white/70 text-xs font-medium text-center px-2">
        Photo coming soon
      </span>
      <span
        className={`absolute bottom-2 ${
          label === "Before" ? "left-2" : "right-2"
        } ${labelColor} text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded`}
      >
        {label}
      </span>
    </div>
  );
}

function BeforeAfterCard({
  card,
  onClick,
}: {
  card: GalleryCard;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer"
      onClick={onClick}
    >
      {/* Image pair */}
      <div className="relative flex aspect-[4/3]">
        {/* Before half */}
        <div className="w-1/2 relative overflow-hidden">
          <PlaceholderImage
            gradientClass={card.beforeBg}
            label="Before"
            labelColor="bg-white/80 text-gray-800"
            altText={card.beforeAlt}
          />
        </div>

        {/* Divider line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/80 z-10" />
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center z-20">
          <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md text-[10px] font-bold text-gray-500">
            ↔
          </div>
        </div>

        {/* After half */}
        <div className="w-1/2 relative overflow-hidden">
          <PlaceholderImage
            gradientClass={card.afterBg}
            label="After"
            labelColor="bg-sky-400/90 text-white"
            altText={card.afterAlt}
          />
        </div>

        {/* Hover zoom hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2 shadow-lg">
            <ZoomIn className="w-4 h-4 text-gray-700" />
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 py-3 border-t border-border/50">
        <p className="font-semibold text-sm text-foreground">{card.treatment}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{card.sessions}</p>
      </div>
    </motion.div>
  );
}

function Lightbox({
  card,
  onClose,
}: {
  card: GalleryCard;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          key="panel"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-md transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          {/* Before / After pair */}
          <div className="flex aspect-video">
            <div className="w-1/2 relative">
              <div className={`w-full h-full bg-gradient-to-br ${card.beforeBg} flex flex-col items-center justify-center`}>
                <Camera className="w-12 h-12 text-white/60 mb-3" />
                <span className="text-white/70 text-sm font-medium">Before photo coming soon</span>
              </div>
              <span className="absolute bottom-3 left-3 bg-white/85 text-gray-800 text-xs uppercase tracking-widest font-bold px-2 py-1 rounded">
                Before
              </span>
            </div>

            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/80 z-10" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center z-20">
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-sm font-bold text-gray-500">
                ↔
              </div>
            </div>

            <div className="w-1/2 relative">
              <div className={`w-full h-full bg-gradient-to-br ${card.afterBg} flex flex-col items-center justify-center`}>
                <Camera className="w-12 h-12 text-white/60 mb-3" />
                <span className="text-white/70 text-sm font-medium">After photo coming soon</span>
              </div>
              <span className="absolute bottom-3 right-3 bg-sky-400/90 text-white text-xs uppercase tracking-widest font-bold px-2 py-1 rounded">
                After
              </span>
            </div>
          </div>

          {/* Caption */}
          <div className="px-6 py-4 border-t border-border/50 bg-white">
            <p className="font-display text-xl text-foreground">{card.treatment}</p>
            <p className="text-sm text-muted-foreground mt-1">{card.sessions}</p>
            <p className="text-xs text-muted-foreground mt-2 italic">
              Real client results. Individual results may vary. Photos will be updated as we receive high-resolution images.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Gallery() {
  const [activeCard, setActiveCard] = useState<GalleryCard | null>(null);

  const openLightbox = useCallback((card: GalleryCard) => {
    setActiveCard(card);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveCard(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4 bg-primary/10 px-4 py-1.5 rounded-full"
          >
            Client Transformations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display text-foreground mb-6"
          >
            Transformation Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Real Results, Real People. Click any card to view a closer look.
          </motion.p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <BeforeAfterCard
              key={card.id}
              card={card}
              onClick={() => openLightbox(card)}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            High-resolution client photos are being added — check back soon! <br className="hidden sm:block" />
            Visit us or{" "}
            <a
              href="tel:+18339245620"
              className="text-secondary underline underline-offset-2 hover:text-secondary/80"
            >
              call (833) 924-5620
            </a>{" "}
            to see our full portfolio in person.
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      {activeCard && <Lightbox card={activeCard} onClose={closeLightbox} />}
    </section>
  );
}
