import { motion } from "framer-motion";

interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  /** Mobile-only label shown below the caption to hint this is the lead photo */
  role?: string;
  spotlight?: { label: string; body: string };
  /** Tailwind col-span classes for sm and lg breakpoints */
  smSpan?: string;
  lgSpan?: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "images/spapic4.jpg",
    alt: "LSS Spa reception and waiting area with 'Dream Big' sign, sunflower accents and warm lighting",
    caption: "A Warm Welcome",
    role: "Lead Image",
    smSpan: "sm:col-span-2",
    lgSpan: "lg:col-span-2",
  },
  {
    src: "images/spapic2.jpg",
    alt: "LSS Spa treatment room showing the Diamond Glow machine, product shelf and skincare display",
    caption: "The Atmosphere",
    spotlight: {
      label: "Curated Care",
      body: "We exclusively use clinician-vetted brands like Image Skincare and Clarity to ensure your post-treatment results are protected and prolonged at home.",
    },
  },
  {
    src: "images/spapic5.jpg",
    alt: "LSS Spa mood-lit treatment bed with soft ambient lighting creating a relaxing spa atmosphere",
    caption: "The Experience",
  },
  {
    src: "images/spapic3.jpg",
    alt: "LSS Spa studio with white cabinetry, magnifying lamp and specialized facial equipment stations",
    caption: "The Technology",
    smSpan: "sm:col-span-2",
    lgSpan: "lg:col-span-2",
  },
];

function GalleryItem({ photo, index }: { photo: GalleryPhoto; index: number }) {
  return (
    <motion.div
      key={photo.src}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-56 sm:h-64 lg:h-72 ${photo.smSpan ?? ""} ${photo.lgSpan ?? ""}`}
    >
      <img
        src={`${import.meta.env.BASE_URL}${photo.src}`}
        alt={photo.alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Base gradient — always present */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {photo.spotlight ? (
        <>
          {/* Spotlight overlay — slides up from bottom on hover */}
          <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-sm px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-1.5 font-sans">
              {photo.spotlight.label}
            </p>
            <p className="text-white text-xs font-sans leading-relaxed">
              {photo.spotlight.body}
            </p>
          </div>
          {/* Caption — fades out when spotlight slides in */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4 group-hover:opacity-0 transition-opacity duration-200">
            <p className="text-white text-sm font-semibold tracking-wide drop-shadow-sm font-sans">
              {photo.caption}
            </p>
          </div>
        </>
      ) : (
        /* Regular caption */
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
          <p className="text-white text-sm font-semibold tracking-wide drop-shadow-sm font-sans">
            {photo.caption}
          </p>
        </div>
      )}
    </motion.div>
  );
}

export function StudioGallery() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
            Peace Yoga Studio &amp; Wellness Center
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4 leading-tight">
            Inside the Studio
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            A serene, professional environment located inside Peace Yoga Studio —
            designed to help you feel at ease from the moment you walk in.
          </p>
        </motion.div>

        {/*
          Featured grid layout:
          Mobile (1-col):  all photos stack in order — spapic4 first ✓
          sm (2-col):      spapic4 full-width → spapic2 + spapic5 side-by-side → spapic3 full-width
          lg (3-col):      spapic4 (2/3 wide) | spapic2 (1/3)
                           spapic5 (1/3)       | spapic3 (2/3 wide)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {GALLERY_PHOTOS.map((photo, i) => (
            <GalleryItem key={photo.src} photo={photo} index={i} />
          ))}
        </div>

        {/* Footer caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center text-xs text-muted-foreground mt-8 italic"
        >
          N89W16800 Appleton Avenue, Menomonee Falls, WI 53051 — inside Peace Yoga Studio &amp; Wellness Center
        </motion.p>

      </div>
    </section>
  );
}
