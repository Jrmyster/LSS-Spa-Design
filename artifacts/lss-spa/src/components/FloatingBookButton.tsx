import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PromoCodeModal } from "@/components/PromoCodeModal";

export function FloatingBookButton() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            key="fab"
            type="button"
            onClick={() => setModalOpen(true)}
            aria-label="Book Now"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            exit={{ opacity: 0, y: 16, scale: 0.95, transition: { duration: 0.2 } }}
            className="fixed bottom-6 right-5 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm shadow-xl shadow-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 active:scale-95 transition-transform"
            style={{ backgroundColor: "#FCD34D", color: "#111" }}
          >
            {/* Periodic pulse ring — CSS animation via inline keyframes */}
            <span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                animation: "fab-pulse 5s ease-out infinite",
              }}
            />
            <Sparkles className="w-4 h-4 shrink-0" />
            Book Now
          </motion.button>
        )}
      </AnimatePresence>

      {modalOpen && (
        <PromoCodeModal onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
