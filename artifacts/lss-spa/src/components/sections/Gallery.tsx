import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

interface ResultPhoto {
  src: string;
  alt: string;
  caption: string;
  treatments: string;
}

const BODY_CONTOURING: ResultPhoto[] = [
  {
    src: "images/result-body-01-abdomen-male.jpg",
    alt: "CryoSlimming before and after — male abdomen showing visible reduction after 1 treatment",
    caption: "Proven results: CryoSlimming showing reduction after 1 treatment.",
    treatments: "1 Treatment",
  },
  {
    src: "images/result-body-02-back-female.jpg",
    alt: "CryoSlimming before and after — female upper back showing visible slimming after 2 treatments",
    caption: "Proven results: CryoSlimming showing reduction after 2 treatments.",
    treatments: "2 Treatments",
  },
  {
    src: "images/result-body-03-lateral-female.jpg",
    alt: "CryoSlimming and CryoToning before and after — female lateral torso showing visible contouring after 6 treatments",
    caption: "Proven results: CryoSlimming showing reduction after 6 treatments.",
    treatments: "6 Treatments",
  },
  {
    src: "images/result-body-04-abdomen-female.jpg",
    alt: "CryoSlimming before and after — female lower abdomen showing visible reduction after 1 treatment",
    caption: "Proven results: CryoSlimming showing reduction after 1 treatment.",
    treatments: "1 Treatment",
  },
  {
    src: "images/result-body-05-waist-male.jpg",
    alt: "CryoSlimming before and after — male abdomen and waist showing dramatic reduction after 8 treatments",
    caption: "Proven results: CryoSlimming showing reduction after 8 treatments.",
    treatments: "8 Treatments",
  },
];

const FACIAL_REJUVENATION: ResultPhoto[] = [
  {
    src: "images/result-face-01-forehead.jpg",
    alt: "CryoToning before and after — forehead wrinkles visibly reduced after 1 treatment",
    caption: "Proven results: CryoToning and lifting after 1 treatment.",
    treatments: "1 Treatment",
  },
  {
    src: "images/result-face-02-neck.jpg",
    alt: "CryoToning before and after — neck sagging visibly lifted and tightened after 1 treatment",
    caption: "Proven results: CryoToning and lifting after 1 treatment.",
    treatments: "1 Treatment",
  },
];

const SKIN_TONE: ResultPhoto[] = [
  {
    src: "images/result-tone-01-tricep.jpg",
    alt: "CryoToning before and after — underarm/tricep skin visibly smoothed and toned after 1 treatment",
    caption: "✓ Tone. Proven results: Localized CryoToning and smoothing after 1 treatment.",
    treatments: "1 Treatment",
  },
];

function ResultPhotoCard({
  photo,
  index,
  accentColor = "sky",
}: {
  photo: ResultPhoto;
  index: number;
  accentColor?: "sky" | "amber" | "violet";
}) {
  const badgeColors = {
    sky: "bg-sky-600/90 text-white",
    amber: "bg-amber-500/90 text-white",
    violet: "bg-violet-600/90 text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl hover:border-stone-300 transition-all duration-300"
    >
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img
          src={`${BASE}${photo.src}`}
          alt={photo.alt}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />

        {/* CLINICAL RESULTS badge — top left */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm ${badgeColors[accentColor]}`}>
            ✓ CLINICAL RESULTS
          </span>
        </div>

        {/* Treatment count pill — top right */}
        <div className="absolute top-3 right-3">
          <span className="inline-block bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
            {photo.treatments}
          </span>
        </div>

        {/* Gradient + caption */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pb-3 pt-10">
          <p className="text-white text-[11px] font-sans leading-snug drop-shadow-sm">
            {photo.caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryHeading({ label, color = "sky" }: { label: string; color?: "sky" | "amber" | "violet" }) {
  const colors = {
    sky: "text-sky-700 bg-sky-50 border-sky-200",
    amber: "text-amber-800 bg-amber-50 border-amber-200",
    violet: "text-violet-700 bg-violet-50 border-violet-200",
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full border mb-6 ${colors[color]}`}
    >
      {label}
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4 bg-primary/10 px-4 py-1.5 rounded-full"
          >
            Clinical Technology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display text-foreground mb-4"
          >
            Proven Technology, Visible Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            At LSS Spa &amp; Wellness, we utilize industry-leading technology designed to deliver
            transformative outcomes. Explore the visible clarity and radiance achieved through
            these advanced clinical modalities.
          </motion.p>
        </div>

        {/* ── Diamond Glow composite photo ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-3xl overflow-hidden border-2 border-amber-200 shadow-xl shadow-amber-100/50"
        >
          <div className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="flex items-center gap-2">
              <span className="text-amber-900 font-bold text-sm">DiamondGlow® Results Showcase</span>
              <span className="text-[10px] bg-white/70 text-amber-800 font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">6 Clinical Cases</span>
            </div>
            <span className="text-[10px] text-amber-800 font-semibold">
              Unretouched clinical photography · Individual results may vary
            </span>
          </div>
          <div className="relative bg-stone-900">
            <img
              src={`${BASE}images/diamondglow-results.jpg`}
              alt="Diamond Glow™ before and after — demonstrating visible skin clarity and radiance."
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* ── CryoSkin Results divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 mb-2">CryoSkin Therapy</p>
          <h3 className="text-2xl md:text-3xl font-display text-foreground mb-3">
            Before &amp; After Results
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Individual results may vary. Clinical photography — no filters applied.
          </p>
        </motion.div>

        {/* ── Body Contouring ── */}
        <div className="mb-12">
          <CategoryHeading label="✓ Body Contouring" color="sky" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BODY_CONTOURING.map((photo, i) => (
              <ResultPhotoCard key={photo.src} photo={photo} index={i} accentColor="sky" />
            ))}
          </div>
        </div>

        {/* ── Facial Rejuvenation ── */}
        <div className="mb-12">
          <CategoryHeading label="✓ Facial Rejuvenation" color="violet" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:max-w-3xl">
            {FACIAL_REJUVENATION.map((photo, i) => (
              <ResultPhotoCard key={photo.src} photo={photo} index={i} accentColor="violet" />
            ))}
          </div>
        </div>

        {/* ── Skin Tone ── */}
        <div className="mb-12">
          <CategoryHeading label="✓ Skin Tone" color="amber" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:max-w-xl">
            {SKIN_TONE.map((photo, i) => (
              <ResultPhotoCard key={photo.src} photo={photo} index={i} accentColor="amber" />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted-foreground/70 italic mb-6 max-w-2xl mx-auto">
            Individual results may vary. Clinical photography — no filters applied.
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the difference?{" "}
            <a
              href="https://lss-spa-wellness-llc.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-semibold underline underline-offset-2 hover:text-secondary/80"
            >
              Book your treatment today
            </a>{" "}
            or{" "}
            <a
              href="tel:+18339245620"
              className="text-secondary underline underline-offset-2 hover:text-secondary/80"
            >
              call (833) 924-5620
            </a>
            .
          </p>
        </motion.div>

      </div>
    </section>
  );
}
