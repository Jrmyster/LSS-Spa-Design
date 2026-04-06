import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Kim", href: "#about" },
  { name: "Inside the Studio", href: "#inside-the-studio" },
  { name: "Gallery", href: "#transformation-gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-bold text-primary-foreground text-xl">LSS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none text-foreground tracking-wide">
                SPA & WELLNESS
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                By Kim Collins
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right side — desktop: phone + book now | mobile: phone + book now + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Phone — icon only on small mobile, number on sm+ */}
            <a
              href="tel:+18339245620"
              className="flex items-center gap-1.5 text-foreground hover:text-secondary transition-colors"
              aria-label="Call us at (833) 924-5620"
            >
              <div className="w-8 h-8 sm:w-auto sm:h-auto rounded-full sm:rounded-none bg-secondary/10 sm:bg-transparent flex items-center justify-center sm:flex-none p-1.5 sm:p-0">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
              </div>
              <span className="hidden sm:inline text-sm font-semibold text-foreground/80 whitespace-nowrap">
                (833) 924-5620
              </span>
            </a>

            {/* Book Now — always visible */}
            <Button
              asChild
              size="sm"
              className="rounded-full px-5 sm:px-6 min-h-[44px] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all text-sm whitespace-nowrap"
            >
              <a href="https://lss-spa-wellness-llc.square.site/" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-1.5 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {/* Book Now — prominent at the top of the mobile menu */}
              <div className="pb-3 mb-1 border-b border-border">
                <Button asChild className="w-full rounded-full text-base py-6 shadow-lg shadow-primary/20">
                  <a
                    href="https://lss-spa-wellness-llc.square.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book an Appointment
                  </a>
                </Button>
              </div>

              {/* Nav links */}
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground py-2.5 border-b border-border/50 last:border-0"
                >
                  {link.name}
                </a>
              ))}

              {/* Phone */}
              <div className="pt-3">
                <a
                  href="tel:+18339245620"
                  className="flex items-center justify-center gap-2 py-3 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  (833) 924-5620
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
