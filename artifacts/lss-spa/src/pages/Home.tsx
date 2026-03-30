import { TopBanner } from "@/components/TopBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SpringSaleHero } from "@/components/sections/SpringSaleHero";
import { Services } from "@/components/sections/Services";
import { SignatureSpotlight } from "@/components/sections/SignatureSpotlight";
import { About } from "@/components/sections/About";
import { Specials } from "@/components/sections/Specials";
import { SeriesPackages } from "@/components/sections/SeriesPackages";
import { FAQ } from "@/components/sections/FAQ";
import { CryoskinShowcase } from "@/components/sections/CryoskinShowcase";
import { Gallery } from "@/components/sections/Gallery";
import { SocialCommunity } from "@/components/sections/SocialCommunity";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { FloatingBookButton } from "@/components/FloatingBookButton";
import { EmailPopup } from "@/components/EmailPopup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30 selection:text-secondary-foreground">
      <TopBanner />
      <Navbar />
      
      <main>
        <Hero />
        <SpringSaleHero />
        <Services />
        <SignatureSpotlight />
        <About />
        <Specials />
        <SeriesPackages />
        <FAQ />
        <CryoskinShowcase />
        <Gallery />
        <SocialCommunity />
        <Contact />
      </main>

      <Footer />
      <FloatingBookButton />
      <EmailPopup />
    </div>
  );
}
