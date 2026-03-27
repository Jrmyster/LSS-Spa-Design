import { useState } from "react";
import { X, Sparkles } from "lucide-react";
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
          className="bg-primary text-primary-foreground relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 flex items-center justify-center text-sm font-medium text-center gap-2">
            <Sparkles className="w-4 h-4 shrink-0" />
            <p>
              <span className="font-bold">Grand Opening Special:</span> 20% off your first Cryoskin session! Limited time only.
            </p>
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-2 sm:right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
