import { TopBanner } from "@/components/TopBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Specials } from "@/components/sections/Specials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30 selection:text-secondary-foreground">
      <TopBanner />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Specials />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
