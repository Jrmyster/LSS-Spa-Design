import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Printer, Sparkles, Snowflake, PlusCircle, Tag, Phone, Globe } from "lucide-react";

const SIGNATURE_GLOW = [
  {
    name: "Classic Facial",
    description: "Includes signature mask & aroma therapy. A foundational corrective facial for all skin types.",
    price: "$80.00",
  },
  {
    name: "Hydra Facial",
    description: "Infuses with beneficial comfort & hydration for lasting results.",
    price: "$100.00",
  },
  {
    name: "Cryo Facial With Coupler",
    description: "Lifts, Tones, Brightens & Firms. Addresses signs of aging.",
    price: "$200.00",
    tag: "Specialty",
  },
  {
    name: "Cryo Facial Upgrade",
    description: "Cryo facial upgrade to any Signature Facial. Brightens, tones & firms. Takes years off appearance of your skin.",
    price: "$175.00",
  },
  {
    name: "Cryo Facial 10 Min Add On",
    description: "Upgrade to any Classic Facial. Lifts, brightens & tones. Instantly refreshes — leaving you ready for your special event.",
    price: "$80.00",
  },
];

const ADVANCED_SCULPTING = [
  {
    name: "Cryo Shape or Tone (Body)",
    description: "Lose inches or tighten & tone your body. Permanent fat cell destruction with no surgery or downtime.",
    price: "$350.00",
    tag: "Specialty",
  },
];

interface AddonRow { name: string; description: string; price: string; total: string; }
const ADDON_SERVICES: AddonRow[] = [
  { name: "Diamond Glow", description: "Classic facial with DG upgrade. Exfoliates, infuses & extracts.", price: "$130.00", total: "$210.00" },
  { name: "LED Light Therapy", description: "Addresses Aging, Hyperpigmentation, Acne, or Sensitive Skin.", price: "$50.00", total: "$130.00" },
  { name: "Nuface Micro Current", description: "Lifts & firms.", price: "$20.00", total: "$100.00" },
  { name: "Nuface Fix", description: "Targets smaller areas like eyes & mouth.", price: "$20.00", total: "$100.00" },
  { name: "Pro Pen", description: "Intense Resurfacing. Addresses aging & acne scars.", price: "$100.00", total: "$180.00" },
  { name: "Cold Hammer", description: "Soothes & Calms.", price: "$30.00", total: "$110.00" },
  { name: "Chemical Peel", description: "Intense exfoliation. Ideal for sun-damaged skin, acne & fine lines & wrinkles.", price: "$50.00", total: "$130.00" },
];

const SERIES_PACKAGES = [
  { service: "Classic Facial", deal: "Buy 5, Get 1 FREE", price: "$400", savings: "$80" },
  { service: "LED Light Therapy", deal: "Buy 5, Get 1 FREE", price: "$250", savings: "$50" },
  { service: "Diamond Glow™", deal: "Buy 5, Get 1 FREE", price: "$650", savings: "$130" },
  { service: "Cryo Facial with Coupler", deal: "Buy 5, Get 1 FREE", price: "$1,000", savings: "$200" },
  { service: "Cryo Shape or Tone — Series of 5", deal: "Get 1 additional service FREE", price: "$1,500", savings: "$600" },
  { service: "Cryo Shape or Tone — Series of 10", deal: "Get 1 additional treatment FREE", price: "$2,750", savings: "$1,100" },
];

function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 pb-3 border-b-2 border-amber-200 print:border-amber-300">
      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 print:bg-amber-100">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-display text-foreground leading-none">{title}</h2>
        <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

function ServiceRow({ name, description, price, tag, total }: { name: string; description: string; price: string; tag?: string; total?: string }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-stone-100 last:border-0 print:py-2">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-semibold text-foreground text-sm">{name}</p>
          {tag && (
            <span className="text-[10px] bg-amber-400 text-white font-bold uppercase tracking-wider px-2 py-0.5 rounded-full print:bg-amber-400 print:text-white">
              {tag}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-xs leading-snug mt-0.5">{description}</p>
      </div>
      <div className="text-right shrink-0 ml-2">
        <p className="font-bold text-sm text-amber-700 whitespace-nowrap">{price}</p>
        {total && <p className="text-[10px] text-muted-foreground whitespace-nowrap">Total: {total}</p>}
      </div>
    </div>
  );
}

export default function ServiceMenu() {
  useEffect(() => {
    document.title = "LSS Spa & Wellness — Full Service Menu";
    return () => { document.title = "LSS Spa & Wellness"; };
  }, []);

  const handlePrint = () => window.print();

  return (
    <>
      {/* Print-only styles injected via a style tag */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-page {
            margin: 0;
            padding: 0;
            background: white;
          }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { margin: 1.2cm; size: A4; }
        }
      `}</style>

      {/* ── Screen-only navigation bar ── */}
      <div className="no-print sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-border/50 px-4 py-3 flex items-center justify-between shadow-sm">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold border-2 border-amber-400 text-amber-700 bg-white hover:bg-amber-50 transition-colors shadow-sm"
        >
          <Printer className="w-4 h-4" />
          Save as PDF
        </button>
      </div>

      {/* ── Menu document ── */}
      <div className="print-page max-w-3xl mx-auto px-6 py-10 print:px-0 print:py-0 print:max-w-none">

        {/* ── HEADER ── */}
        <header className="text-center mb-10 pb-8 border-b-4 border-double border-amber-300 print:mb-6 print:pb-5">
          {/* Sunflower logo mark */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center shadow-md print:shadow-none">
              <span className="font-display font-bold text-white text-2xl">LSS</span>
            </div>
          </div>
          <h1 className="text-4xl font-display text-foreground tracking-tight leading-none mb-1">
            LSS Spa & Wellness LLC
          </h1>
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-3">
            By Kim Collins — Licensed Esthetician
          </p>
          <p className="text-xl font-display italic text-amber-600">Glow. Lift. Sculpt.</p>
          <p className="text-xs text-muted-foreground mt-3">
            N89W16800 Appleton Avenue, Menomonee Falls, WI 53051 &nbsp;·&nbsp; (833) 924-5620
          </p>
        </header>

        {/* ── SECTION 1: SIGNATURE GLOW ── */}
        <section className="mb-10 print:mb-7">
          <SectionHeader
            icon={<Sparkles className="w-5 h-5 text-amber-600" />}
            title="Signature Glow"
            subtitle="Facials · Cryo Facials · Corrective Treatments"
          />
          {SIGNATURE_GLOW.map((s, i) => (
            <ServiceRow key={i} {...s} />
          ))}
        </section>

        {/* ── SECTION 2: ADVANCED SCULPTING ── */}
        <section className="mb-10 print:mb-7">
          <SectionHeader
            icon={<Snowflake className="w-5 h-5 text-sky-600" />}
            title="Advanced Sculpting"
            subtitle="CryoSkin · Cryo Therapy · Body Contouring"
          />
          <p className="text-xs italic text-muted-foreground mb-4 bg-sky-50 rounded-lg px-4 py-2 border border-sky-100 print:bg-sky-50">
            Cryoskin uses the power of sub-zero temperatures to tone, firm, and slim — with no surgery and zero downtime.
            Permanently destroy fat cells and reshape your body. Contact us for a free consultation.
          </p>
          {ADVANCED_SCULPTING.map((s, i) => (
            <ServiceRow key={i} {...s} />
          ))}
        </section>

        {/* ── SECTION 3: ADD-ONS ── */}
        <section className="mb-10 print:mb-7">
          <SectionHeader
            icon={<PlusCircle className="w-5 h-5 text-emerald-600" />}
            title="Treatment Add-Ons"
            subtitle="Enhance any service for amplified results"
          />
          <div className="grid grid-cols-12 text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-1 pb-1 mb-1 border-b border-stone-200">
            <div className="col-span-8">Service</div>
            <div className="col-span-2 text-right">Add-On</div>
            <div className="col-span-2 text-right">Total</div>
          </div>
          {ADDON_SERVICES.map((s, i) => (
            <ServiceRow key={i} {...s} />
          ))}
          <p className="text-[11px] italic text-muted-foreground mt-3 border-t border-stone-100 pt-2">
            * Total cost includes the addition to a Classic Facial.
          </p>
        </section>

        {/* ── SECTION 4: GRAND OPENING SERIES PACKAGES ── */}
        <section className="mb-10 print:mb-7">
          <SectionHeader
            icon={<Tag className="w-5 h-5 text-rose-500" />}
            title="Grand Opening Specials"
            subtitle="Series Packages · Buy a Series & Get a Free Treatment"
          />
          <div className="rounded-xl overflow-hidden border border-amber-200 print:border-amber-200">
            {/* Table head */}
            <div className="grid grid-cols-12 bg-amber-500 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 print:bg-amber-500 print:text-white">
              <div className="col-span-6">Service &amp; Package</div>
              <div className="col-span-3 text-center">Package Price</div>
              <div className="col-span-3 text-right">You Save</div>
            </div>
            {SERIES_PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className={`grid grid-cols-12 items-center px-4 py-3 border-b border-amber-100 last:border-0 text-sm ${i % 2 === 0 ? "bg-white" : "bg-amber-50/60"}`}
              >
                <div className="col-span-6 pr-2">
                  <p className="font-semibold text-foreground text-xs leading-snug">{pkg.service}</p>
                  <p className="text-muted-foreground text-[11px] mt-0.5">{pkg.deal}</p>
                </div>
                <div className="col-span-3 text-center font-bold text-foreground text-sm">{pkg.price}</div>
                <div className="col-span-3 text-right">
                  <span className="inline-block bg-emerald-100 text-emerald-700 font-bold text-[11px] px-2 py-0.5 rounded-md print:bg-emerald-100 print:text-emerald-700">
                    Save {pkg.savings}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground italic mt-3 print:mt-2">
            Series packages must be purchased in full. Grand Opening pricing — limited time only. Results may vary.
          </p>
        </section>

        {/* ── FOOTER / CONTACT ── */}
        <footer className="border-t-4 border-double border-amber-300 pt-7 print:pt-5">
          <div className="bg-gradient-to-r from-amber-50 to-sky-50 rounded-2xl p-6 text-center print:bg-amber-50 print:rounded-none print:border print:border-amber-200">
            <p className="font-display text-xl text-foreground mb-1">Ready to Glow?</p>
            <p className="text-sm text-muted-foreground mb-4">Book your appointment today — we'd love to see you!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a
                href="tel:+18339245620"
                className="inline-flex items-center gap-2 font-bold text-foreground hover:text-amber-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                (833) 924-5620
              </a>
              <span className="hidden sm:block text-muted-foreground">·</span>
              <a
                href="https://lss-spa-wellness-llc.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sky-700 hover:text-sky-900 transition-colors"
              >
                <Globe className="w-4 h-4" />
                lss-spa-wellness-llc.square.site
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              N89W16800 Appleton Avenue, Menomonee Falls, WI 53051
            </p>
          </div>
          <p className="text-center text-[11px] text-muted-foreground mt-5">
            © {new Date().getFullYear()} LSS Spa and Wellness LLC. All Rights Reserved. Prices subject to change.
          </p>
        </footer>
      </div>
    </>
  );
}
