import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-50 flex items-center justify-center
                     w-11 h-11 sm:w-12 sm:h-12 rounded-full
                     bg-primary/80 hover:bg-primary
                     shadow-lg shadow-primary/30
                     hover:scale-110 active:scale-95
                     transition-transform duration-200
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          style={{ backdropFilter: "blur(4px)" }}
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
