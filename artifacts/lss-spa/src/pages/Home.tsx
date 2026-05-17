import { TopBanner } from "@/components/TopBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SpringSaleHero } from "@/components/sections/SpringSaleHero";
import { Services } from "@/components/sections/Services";
import { StudioGallery } from "@/components/sections/StudioGallery";
import { SignatureSpotlight } from "@/components/sections/SignatureSpotlight";
import { About } from "@/components/sections/About";
import { Specials } from "@/components/sections/Specials";
import { SeriesPackages } from "@/components/sections/SeriesPackages";
import { CryoSkinScience } from "@/components/sections/CryoSkinScience";
import { CryoFAQ } from "@/components/sections/CryoFAQ";
import { FAQ } from "@/components/sections/FAQ";
import { CryoskinShowcase } from "@/components/sections/CryoskinShowcase";
import { SocialCommunity } from "@/components/sections/SocialCommunity";
import { CommunityEvents } from "@/components/sections/CommunityEvents";
import { SummerSpecial } from "@/components/sections/SummerSpecial";
import { Contact } from "@/components/sections/Contact";
import { FirstVisit } from "@/components/sections/FirstVisit";
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
        <SummerSpecial />
        <Services />
        <StudioGallery />
        <CryoSkinScience />
        <CryoFAQ />
        <SignatureSpotlight />
        <About />
        <Specials />
        <FAQ />
        <CryoskinShowcase />
        <SocialCommunity />
        <CommunityEvents />
        <Contact />
        <SeriesPackages />
        <FirstVisit />
      </main>

      <Footer />
      <FloatingBookButton />
      <EmailPopup />
    </div>
  );
}
