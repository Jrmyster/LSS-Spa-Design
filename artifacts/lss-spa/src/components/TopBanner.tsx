import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative overflow-hidden"
          style={{ backgroundColor: "#FCD34D", color: "#111" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-2.5 sm:px-8 flex items-center justify-center text-sm font-medium text-center gap-2 pr-10">
            <a
              href="https://square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ✨ <span className="font-bold">Grand Opening Specials:</span> 20% Off Skincare Products &amp; Intro Cryoskin Rates! <span className="font-bold underline underline-offset-2">Book Now</span> ✨
            </a>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
