import { motion } from "framer-motion";
import { CheckCircle2, Snowflake, Zap, Layers, Sparkles, CalendarCheck } from "lucide-react";

const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";

const KEY_BENEFITS = [
  "Reduces Cellulite",
  "Supports Lymphatic Drainage",
  "Boosts Circulation",
  "No Discomfort",
];

interface ResultPhoto {
  image: string;
  alt: string;
  caption: string;
  /** clip bottom artifact — use padding-bottom trick in % */
  paddingBottom?: number;
}

interface TreatmentCard {
  icon: React.ReactNode;
  name: string;
  tagline: string;
  description: string;
  photos?: ResultPhoto[];
}

const TREATMENTS: TreatmentCard[] = [
  {
    icon: <Zap className="w-6 h-6 text-sky-600" />,
    name: "CryoSlimming",
    tagline: "Target & Eliminate Stubborn Fat",
    description:
      "Targets and eliminates subcutaneous fat stored under the skin. Many clients lose between 0.5 to 1.5 inches after just one session. It is the perfect solution for stubborn areas where diet and exercise aren't enough.",
    photos: [
      {
        image: "images/ba-slim-abdomen.jpg",
        alt: "CryoSlimming abdomen before and after — visible inch loss and abdominal contouring after treatment",
        caption: "Proven results: Noticeable abdominal contouring after treatments.",
      },
    ],
  },
  {
    icon: <Layers className="w-6 h-6 text-sky-600" />,
    name: "CryoToning",
    tagline: "Firm, Tighten & Smooth Skin",
    description:
      "Focuses on firming the face and tightening skin. By increasing micro-circulation and collagen production, this method is highly recommended for reducing the appearance of cellulite and smoothing the skin's texture.",
    photos: [
      {
        image: "images/shoulder-tone.jpg",
        alt: "CryoToning before and after — shoulder and arm skin tightening showing visible toning results after 1 treatment",
        caption: "Toning and Skin Tightening — Visible Results After 1 Treatment",
      },
    ],
  },
  {
    icon: <Sparkles className="w-6 h-6 text-sky-600" />,
    name: "CryoFacial",
    tagline: "Lift, Contour & Hydrate Your Face",
    description:
      "Stimulates a 'collagen overflow' to tighten and lift the face while providing intense hydration. This service helps contour cheekbones, alleviate dark under-eye circles, and combat fine lines and wrinkles.",
    photos: [
      {
        image: "images/cryofacial.png",
        alt: "CryoFacial results — skin tone, crow's feet, and fine lines visibly improved after treatment",
        caption: "Skin Tone · Before / After",
        // 295×711px image — clip bottom ~20% to remove page-indicator artifact
        // height = top 80%: 711*0.80/295*100 ≈ 193%
        paddingBottom: 193,
      },
      {
        image: "images/cryoforehead.png",
        alt: "CryoFacial forehead results — before and after showing visibly reduced forehead lines",
        caption: "Forehead · Before / After",
      },
    ],
  },
];

function ResultPhotoCard({ photo }: { photo: ResultPhoto }) {
  return (
    <div className="rounded-xl overflow-hidden border border-sky-100 bg-sky-50 shadow-sm">
      {photo.paddingBottom ? (
        /* Clip-bottom trick for images with bottom artifacts */
        <div
          className="relative w-full overflow-hidden"
          style={{ height: 0, paddingBottom: `${photo.paddingBottom}%` }}
        >
          <img
            src={`${import.meta.env.BASE_URL}${photo.image}`}
            alt={photo.alt}
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ imageRendering: "crisp-edges" }}
          />
          {/* Before / After chips */}
          <span className="absolute top-2 left-2 bg-black/60 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
            Before
          </span>
          <span className="absolute top-2 right-2 bg-sky-500/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
            After
          </span>
        </div>
      ) : (
        <div className="relative pb-2">
          <img
            src={`${import.meta.env.BASE_URL}${photo.image}`}
            alt={photo.alt}
            className="w-full h-auto block object-contain"
            style={{ imageRendering: "crisp-edges" }}
          />
          {/* Before / After chips */}
          <span className="absolute top-2 left-2 bg-black/60 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
            Before
          </span>
          <span className="absolute top-2 right-2 bg-sky-500/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
            After
          </span>
        </div>
      )}
      {/* Caption strip */}
      <div className="px-3 py-2 bg-white border-t border-sky-100">
        <p className="text-[10px] font-bold text-sky-700 uppercase tracking-wider text-center">
          {photo.caption}
        </p>
      </div>
    </div>
  );
}

function TreatmentCard({ treatment, index }: { treatment: TreatmentCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="flex flex-col rounded-3xl overflow-hidden border-2 border-sky-100 bg-white shadow-lg shadow-sky-100/60 hover:shadow-xl hover:shadow-sky-200/60 transition-shadow duration-300"
    >
      {/* Cryo-blue top bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-sky-400 to-sky-600" />

      {/* Card header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
            {treatment.icon}
          </div>
          <div>
            <h3 className="text-lg font-display font-bold text-sky-700 leading-tight">
              {treatment.name}
            </h3>
            <p className="text-xs font-semibold text-sky-500 leading-snug">
              {treatment.tagline}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {treatment.description}
        </p>
      </div>

      {/* Result photos (if any) */}
      {treatment.photos && treatment.photos.length > 0 && (
        <div className={`px-5 pb-5 flex-1 ${treatment.photos.length > 1 ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"}`}>
          {treatment.photos.map((photo, i) => (
            <ResultPhotoCard key={i} photo={photo} />
          ))}
        </div>
      )}

      {/* Spacer for CryoSlimming (no photos) to push CTA to bottom */}
      {(!treatment.photos || treatment.photos.length === 0) && (
        <div className="flex-1 px-6 pb-2">
          <div className="rounded-xl bg-sky-50 border border-sky-100 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">
              Common Treatment Areas
            </p>
            <ul className="space-y-1.5">
              {["Abdomen & Love Handles", "Inner & Outer Thighs", "Back & Bra Line", "Arms & Underarms"].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <Snowflake className="w-3 h-3 text-sky-400 shrink-0" />
                  <span className="text-xs text-muted-foreground">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Book CTA */}
      <div className="px-5 pb-5 pt-3">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs font-bold border-2 border-sky-400 text-sky-700 bg-sky-50 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-200 group"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          Book {treatment.name}
        </a>
      </div>
    </motion.div>
  );
}

export function CryoSkinScience() {
  return (
    <section id="transformation-gallery" className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white">
      {/* Cryo-blue background blobs */}
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          >
            <Snowflake className="w-3.5 h-3.5" />
            CryoSkin Technology
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display text-foreground mb-5 leading-tight"
          >
            The Science of Sub-Zero:{" "}
            <span className="text-sky-600">CryoSkin Technology</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            CryoSkin is a non-invasive, suction-free French technology that uses sub-zero
            temperatures to permanently destroy fat cells, improve skin tone, and boost
            circulation. By utilizing a specialized cold wand to trigger{" "}
            <em>apoptosis</em> (natural cell death) or stimulate collagen, we provide a safe,
            effective way to contour your body with no surgery and zero downtime.
          </motion.p>
        </div>

        {/* ── Key Benefits Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          {KEY_BENEFITS.map((benefit) => (
            <div
              key={benefit}
              className="inline-flex items-center gap-2 bg-white border-2 border-sky-200 text-sky-800 text-sm font-semibold px-4 py-2 rounded-full shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
              {benefit}
            </div>
          ))}
        </motion.div>

        {/* ── The Cryo-Trio Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {TREATMENTS.map((treatment, i) => (
            <TreatmentCard key={treatment.name} treatment={treatment} index={i} />
          ))}
        </div>

        {/* ── CryoSlimming Before & After Results ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full mb-3">
              ✓ CryoSlimming Results
            </span>
            <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">
              Before &amp; After: Body Contouring
            </h3>
            <p className="text-sm text-muted-foreground">
              Individual results may vary. Clinical photography — no filters applied.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: "images/ba-slim-back.jpg",          alt: "CryoSlimming before and after — back and sides showing targeted fat reduction",                       caption: "Real transformation: Targeted fat reduction." },
              { src: "images/ba-slim-legs-stomach.jpg",  alt: "CryoSlimming before and after — legs and stomach showing visible contouring results",                 caption: "Actual results: CryoSlimming progress." },
              { src: "images/ba-slim-stomach.jpg",       alt: "CryoSlimming before and after — stomach area showing visible slimming and contouring",                caption: "Real transformation: Targeted fat reduction." },
              { src: "images/ba-slim-cryo-stomach.jpg",  alt: "CryoSkin therapy before and after — stomach body contouring showing visible reduction",               caption: "Actual results: CryoSlimming progress." },
            ].map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${photo.src}`}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm bg-sky-600/90 text-white">
                      ✓ CryoSlimming
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pb-3 pt-10">
                    <p className="text-white text-[11px] font-sans leading-snug drop-shadow-sm">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-center text-muted-foreground/70 italic mt-5">
            Disclaimer: Results may vary. Best results are typically achieved through a personalized series of treatments.
          </p>
        </motion.div>

        {/* ── Bottom CTA + disclaimer ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl bg-gradient-to-br from-sky-500 to-sky-700 px-8 py-10 text-center shadow-2xl shadow-sky-300/40"
        >
          <Snowflake className="w-10 h-10 text-white/60 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 leading-snug">
            Ready to Experience the Power of Cold?
          </h3>
          <p className="text-sky-100 text-base mb-7 max-w-lg mx-auto leading-relaxed">
            Book your complimentary CryoSkin consultation with Kim Collins today. No pressure —
            just real answers and a personalized plan for your goals.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-sky-700 font-extrabold text-base rounded-full px-10 py-4 shadow-xl hover:bg-sky-50 hover:shadow-sky-200/70 transition-all duration-200"
          >
            <CalendarCheck className="w-5 h-5" />
            Book My CryoSkin Consultation
          </a>
          <p className="text-sky-200/80 text-xs mt-4">
            No Surgery · No Downtime · No Suction · 100% Non-Invasive
          </p>
        </motion.div>

      </div>
    </section>
  );
}
