import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface QRCodeLightboxProps {
  caption?: string;
  captionClass?: string;
  imgClass?: string;
}

export function QRCodeLightbox({
  caption = "Scan to Schedule",
  captionClass = "text-[11px] font-semibold text-muted-foreground uppercase tracking-wide",
  imgClass = "w-24 h-24 object-cover rounded-xl border-2 border-amber-300 shadow",
}: QRCodeLightboxProps) {
  const [open, setOpen] = useState(false);
  const src = `${import.meta.env.BASE_URL}images/qr-code.jpg`;

  return (
    <>
      {/* Thumbnail */}
      <div className="flex flex-col items-center gap-1.5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Click to enlarge QR code"
          className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl"
          style={{ cursor: "zoom-in" }}
        >
          <img
            src={src}
            alt="QR Code — Scan to book your appointment at LSS Spa and Wellness"
            className={`${imgClass} transition-transform duration-200 group-hover:scale-105`}
          />
          {/* Hover overlay hint */}
          <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 group-hover:bg-black/20 transition-colors duration-200">
            <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow" />
          </span>
        </button>
        <p className={captionClass}>{caption}</p>
        <p className="text-[10px] text-muted-foreground/70">Click to Enlarge</p>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="qr-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-5 max-w-xs w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close × */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-stone-600" />
              </button>

              {/* Label */}
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground pt-1">
                Scan to Book Your Appointment
              </p>

              {/* Full-size QR — high-res, large display */}
              <img
                src={src}
                alt="Full-size QR Code — Scan with your phone camera to book at LSS Spa and Wellness"
                className="w-64 h-64 object-cover rounded-2xl border-4 border-amber-300 shadow-lg"
              />

              <p className="text-xs text-center text-muted-foreground leading-relaxed">
                Point your phone camera at this code<br />to open the booking page instantly.
              </p>

              {/* Bottom close button for mobile */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
