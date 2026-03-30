import { motion } from "framer-motion";
import { MapPin, ExternalLink, Navigation, Info, Star } from "lucide-react";

const MAPS_URL =
  "https://maps.google.com/?q=N89W16800+Appleton+Avenue,+Menomonee+Falls,+WI+53051";
const PEACE_YOGA_URL = "https://www.peaceyogamn.com/";

export function PartnerSpotlight() {
  return (
    <div className="mt-16 space-y-10">

      {/* ── Find Us card ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55 }}
        className="rounded-3xl overflow-hidden border border-border/50 shadow-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: storefront photo */}
          <div className="relative h-64 lg:h-auto min-h-[260px] overflow-hidden bg-stone-100">
            <img
              src={`${import.meta.env.BASE_URL}images/peaceyoga.jpg`}
              alt="Peace Yoga Studio & Wellness Center storefront at N89W16800 Appleton Ave, Menomonee Falls"
              className="w-full h-full object-cover object-center"
            />
            {/* Stars badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold text-foreground">5.0 · Google</span>
            </div>
            {/* Label chip */}
            <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
              Peace Yoga Studio & Wellness Center
            </div>
          </div>

          {/* Right: Find Us info */}
          <div className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-8 lg:p-10 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5 w-fit border border-emerald-200">
              <MapPin className="w-3.5 h-3.5" />
              Find Us
            </div>

            <h3 className="text-2xl sm:text-3xl font-display text-foreground mb-4 leading-snug">
              We're Inside Peace Yoga Studio
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-5">
              LSS Spa &amp; Wellness is located inside the beautiful{" "}
              <strong className="text-foreground">Peace Yoga Studio &amp; Wellness Center</strong> at{" "}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold underline underline-offset-2 hover:text-secondary/80"
              >
                N89W16800 Appleton Ave, Menomonee Falls, WI 53051
              </a>
              .
            </p>

            {/* Arrival instructions */}
            <div className="bg-white rounded-2xl border border-emerald-200 p-4 mb-6 flex items-start gap-3">
              <Info className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">When You Arrive</p>
                <p className="text-sm text-muted-foreground leading-snug">
                  Please enter through the main Peace Yoga entrance. You can find us listed under the{" "}
                  <strong className="text-foreground">Esthetician and Clinician</strong> section of their wellness team.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold bg-secondary text-white shadow-md shadow-secondary/20 hover:bg-secondary/90 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={PEACE_YOGA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold border-2 border-emerald-400 text-emerald-700 bg-white hover:bg-emerald-50 transition-colors"
              >
                Visit Peace Yoga Studio
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </motion.div>

      {/* ── Our Wellness Partner spotlight ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="rounded-3xl border border-border/50 bg-white shadow-lg p-8 sm:p-10"
      >
        {/* Co-brand header row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 pb-6 border-b border-border/40">
          {/* LSS logo mark */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
              <span className="font-display font-bold text-primary-foreground text-base">LSS</span>
            </div>
            <span className="font-display font-semibold text-sm leading-tight">
              LSS Spa<br />&amp; Wellness
            </span>
          </div>

          <div className="text-muted-foreground text-lg font-light hidden sm:block">×</div>
          <div className="text-muted-foreground text-xs font-semibold sm:hidden uppercase tracking-widest">In Partnership With</div>

          {/* Peace Yoga text brand */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center shadow-sm">
              <span className="font-bold text-white text-xs tracking-tight text-center leading-tight">PYS</span>
            </div>
            <span className="font-semibold text-sm leading-tight">
              Peace Yoga<br />Studio
            </span>
          </div>

          <div className="sm:ml-auto">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-amber-200">
              ✦ Wellness Partners
            </span>
          </div>
        </div>

        <div className="max-w-3xl">
          <h3 className="text-2xl font-display text-foreground mb-3">
            Our Wellness Partner: Peace Yoga Studio
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-5">
            We are proud to operate within a space dedicated to holistic health.{" "}
            <strong className="text-foreground">Peace Yoga Studio</strong> offers a variety of
            classes and wellness services that perfectly complement our skincare and body sculpting
            treatments — because true wellness goes beyond the skin.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Yoga Classes","Meditation","Holistic Wellness","Online Classes","Menomonee Falls"].map((t) => (
              <span key={t} className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>

          <a
            href={PEACE_YOGA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold bg-emerald-600 text-white shadow-md shadow-emerald-200/60 hover:bg-emerald-700 transition-colors"
          >
            Visit Peace Yoga Studio
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* ── Embedded Google Map ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-3xl overflow-hidden shadow-xl border border-border/50"
      >
        <iframe
          title="LSS Spa and Wellness Location — inside Peace Yoga Studio"
          src="https://maps.google.com/maps?q=N89W16800+Appleton+Avenue,+Menomonee+Falls,+WI+53051&output=embed"
          width="100%"
          height="380"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

    </div>
  );
}
