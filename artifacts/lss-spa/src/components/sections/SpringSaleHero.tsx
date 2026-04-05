import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, ShoppingBag, CalendarCheck, X, ZoomIn, Ticket } from "lucide-react";
import { CouponClaimModal } from "@/components/CouponClaimModal";

const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";

export function SpringSaleHero() {
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [claimOpen, setClaimOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20">
        {/* Parchment / spring-green background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50/50 to-yellow-50/60 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-16 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Spring-green border card wrapper */}
          <div className="rounded-3xl border-2 border-green-200 bg-white/70 backdrop-blur-sm shadow-xl shadow-green-100/60 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-0">

              {/* ── LEFT: Text content ── */}
              <div className="flex-1 px-8 py-10 sm:px-12 text-center lg:text-left">

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-green-300"
                >
                  <Leaf className="w-3.5 h-3.5" />
                  Spring Sale — Extended Until April 30th!
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl sm:text-4xl font-display text-foreground leading-tight mb-4"
                >
                  🌿 Keep the Glow:{" "}
                  <span className="text-green-700">Post-Treatment Skincare Essentials</span>
                </motion.h2>

                {/* Body */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5 max-w-lg mx-auto lg:mx-0"
                >
                  Don't miss out — get 20% off all CryoSkin and Diamond Glow packages through the end of April.
                  Stock up on professional-grade skincare products and save on your next treatment!
                </motion.p>

                {/* Offer callout */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.28 }}
                  className="inline-flex items-center gap-3 bg-green-700 text-white rounded-2xl px-6 py-3.5 mb-7 shadow-lg shadow-green-300/40"
                >
                  <span className="text-2xl font-black leading-none">20%</span>
                  <div className="text-left leading-tight">
                    <p className="text-xs font-bold uppercase tracking-widest text-green-200">Extended thru April 30th</p>
                    <p className="text-sm font-semibold">
                      OFF skincare products &amp; packages!
                    </p>
                  </div>
                </motion.div>

                {/* Pulsing claim coupon button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.33 }}
                  className="flex items-center justify-center lg:justify-start mb-4"
                >
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping pointer-events-none" />
                    <button
                      type="button"
                      onClick={() => setClaimOpen(true)}
                      className="relative inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-bold bg-green-600 text-white shadow-xl shadow-green-300/50 hover:bg-green-700 hover:shadow-green-400/60 transition-all duration-200 z-10"
                    >
                      <Ticket className="w-4 h-4" />
                      Claim My 20% Discount
                    </button>
                  </div>
                </motion.div>

                {/* Secondary CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
                >
                  {/* Book Now to Save — primary */}
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold bg-green-600 text-white shadow-lg shadow-green-300/50 hover:bg-green-700 hover:shadow-green-400/60 transition-all duration-200"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Book Now to Save
                  </a>

                  {/* View Skincare Lines — secondary */}
                  <button
                    type="button"
                    onClick={() => setCatalogOpen(true)}
                    className="inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-bold border-2 border-green-400 text-green-700 bg-white hover:bg-green-50 hover:border-green-500 transition-all duration-200"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    View Our Skincare Lines
                  </button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="text-xs text-muted-foreground italic mt-4 text-center lg:text-left"
                >
                  In-stock retail products only · Valid while supplies last · Cannot be combined with other offers
                </motion.p>
              </div>

              {/* ── RIGHT: Spring Sale image ── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full lg:w-[46%] shrink-0 relative"
              >
                {/* Zoom hint overlay */}
                <button
                  type="button"
                  onClick={() => setCatalogOpen(true)}
                  className="relative block w-full group focus:outline-none"
                  aria-label="View Spring Sale products in full size"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/springsale.png`}
                    alt="Spring Sale — 20% OFF all skincare products at LSS Spa & Wellness. Stock up on professional Clarity skincare at your next appointment."
                    className="w-full object-cover lg:rounded-r-3xl lg:rounded-l-none rounded-b-3xl lg:rounded-b-none"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                  {/* Hover zoom hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center lg:rounded-r-3xl rounded-b-3xl lg:rounded-b-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                      View Full Size
                    </div>
                  </div>
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SPRING20 Coupon Claim Modal ── */}
      {claimOpen && (
        <CouponClaimModal
          coupon="SPRING20"
          title="Claim Your Spring Sale Discount!"
          onClose={() => setClaimOpen(false)}
        />
      )}

      {/* ── Skincare Catalog Modal ── */}
      <AnimatePresence>
        {catalogOpen && (
          <motion.div
            key="catalog-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setCatalogOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-green-100 bg-green-50">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-0.5">
                    Spring Sale
                  </p>
                  <h3 className="text-lg font-display text-foreground leading-snug">
                    Our Skincare Lines
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setCatalogOpen(false)}
                  className="p-2 rounded-full hover:bg-green-100 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full-res image */}
              <div className="p-4 bg-white">
                <img
                  src={`${import.meta.env.BASE_URL}images/springsale.png`}
                  alt="Spring Sale — 20% OFF all skincare products including Clarity professional skincare line"
                  className="w-full rounded-xl"
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>

              {/* Modal CTA */}
              <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold bg-green-600 text-white shadow-lg hover:bg-green-700 transition-colors"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Now to Save 20%
                </a>
                <p className="text-xs text-muted-foreground text-center">
                  Mention the Spring Sale at your appointment
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
