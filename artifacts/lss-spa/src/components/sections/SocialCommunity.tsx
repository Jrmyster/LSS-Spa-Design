import { motion } from "framer-motion";
import { Facebook, ExternalLink, Users } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const GRID_PHOTOS = [
  { src: `${BASE}images/cryotoning.png`,    alt: "Cryo-Toning neck before & after results" },
  { src: `${BASE}images/cryofacial.png`,    alt: "Cryo-Facial skin tone before & after results" },
  { src: `${BASE}images/springsale.png`,    alt: "Spring Sale — 20% off skincare products at LSS Spa" },
  { src: `${BASE}images/cryoforehead.png`,  alt: "Cryo-Smooth forehead before & after results" },
  { src: `${BASE}images/grand-opening.png`, alt: "LSS Spa & Wellness grand opening" },
  { src: `${BASE}images/facebook-photos.png`, alt: "LSS Spa behind-the-scenes Facebook photo" },
  { src: `${BASE}images/gallery-1.png`,     alt: "Spa treatment gallery photo" },
  { src: `${BASE}images/gallery-2.png`,     alt: "Spa treatment gallery photo" },
];

const FB_URL  = "https://www.facebook.com/people/LSS-Spa-Wellness/61571633071161/";
const CLUB_URL = "https://www.facebook.com/MenomoneeFallsDowntownBusinessClub";

export function SocialCommunity() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Soft blurred background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/70 via-pink-50/50 to-amber-50/60 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 mb-5"
          >
            {/* Pulsing live dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Join Our Community
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display text-foreground mb-4"
          >
            ✨ Glow With Us on Social
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Follow LSS Spa &amp; Wellness on Facebook for daily tips, behind-the-scenes
            looks, and real-time results.
          </motion.p>
        </div>

        {/* ── Photo grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-10 rounded-2xl overflow-hidden shadow-xl shadow-violet-100/40"
        >
          {GRID_PHOTOS.map((photo, i) => (
            <a
              key={i}
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden aspect-square bg-stone-100 block"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1877F2]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-white text-xs font-bold uppercase tracking-wider drop-shadow">
                  View Post
                </span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Facebook follow */}
          <a
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold bg-[#1877F2] text-white shadow-lg shadow-blue-300/40 hover:bg-[#1564d3] hover:shadow-blue-400/50 transition-all duration-200 group"
          >
            <Facebook className="w-4 h-4 fill-white" />
            Follow us on Facebook
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
          </a>

          {/* Business club */}
          <a
            href={CLUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold border-2 border-violet-400 text-violet-700 bg-white/80 hover:bg-violet-50 hover:border-violet-500 transition-all duration-200 group shadow-sm"
          >
            <Users className="w-4 h-4" />
            Join the Menomonee Falls Downtown Club
            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Handle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center text-xs text-muted-foreground mt-5"
        >
          Find us on Facebook &nbsp;·&nbsp;{" "}
          <a
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#1877F2] hover:underline"
          >
            LSS Spa &amp; Wellness
          </a>
        </motion.p>

      </div>
    </section>
  );
}
