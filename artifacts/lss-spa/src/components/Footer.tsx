import { MapPin, Phone, Mail, Navigation, FileText, Clock } from "lucide-react";
import { Link } from "wouter";
import { QRCodeLightbox } from "@/components/QRCodeLightbox";

const MAPS_URL =
  "https://maps.google.com/?q=N89W16800+Appleton+Avenue,+Menomonee+Falls,+WI+53051";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-primary-foreground text-xl">LSS</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-lg leading-none tracking-wide">
                  SPA & WELLNESS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">
                  By Kim Collins
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm max-w-xs mb-5">
              Specializing in corrective skincare and advanced CryoSkin body contouring therapies.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/collinskimmarie/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LSS Spa & Wellness on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61586956386498"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LSS Spa & Wellness on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Kim</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li>
                <a
                  href="https://lss-spa-wellness-llc.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Book an Appointment ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div className="text-left">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    N89W16800 Appleton Avenue<br />
                    Menomonee Falls, WI 53051
                  </a>
                  <p className="text-white/40 text-xs mt-1 leading-snug">
                    Located inside Peace Yoga Studio<br />&amp; Wellness Center
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+18339245620" className="hover:text-primary transition-colors">
                  (833) 924-5620
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:lsswellness73@icloud.com" className="hover:text-primary transition-colors break-all">
                  lsswellness73@icloud.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Navigation className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Hours of Operation */}
        <div className="border-t border-white/10 pt-10 pb-8">
          <div className="flex flex-col md:flex-row md:items-start gap-8 max-w-xl mx-auto md:mx-0">
            <div className="flex items-center gap-2 shrink-0 md:pt-1">
              <Clock className="w-4 h-4 text-primary" />
              <h4 className="text-white font-semibold text-base uppercase tracking-wider">Hours of Operation</h4>
            </div>
            <table className="w-full text-sm text-white/70 border-collapse">
              <tbody>
                {[
                  { day: "Tuesday", hours: "2:00 pm – 8:00 pm" },
                  { day: "Wednesday", hours: "2:00 pm – 8:00 pm" },
                  { day: "Thursday", hours: "2:00 pm – 8:00 pm" },
                  { day: "Friday", hours: "Closed" },
                  { day: "Saturday", hours: "11:00 am – 6:00 pm" },
                  { day: "Sunday", hours: "1:00 pm – 6:00 pm" },
                  { day: "Monday", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <tr key={day} className="border-b border-white/[0.07] last:border-0">
                    <td className="py-2 pr-6 font-medium text-white/90 w-32">{day}</td>
                    <td className={`py-2 ${hours === "Closed" ? "text-white/40 italic" : "text-white/70"}`}>
                      {hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* QR Code — Book on the Go */}
        <div className="border-t border-white/10 pt-10 pb-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 max-w-2xl mx-auto md:mx-0 md:ml-auto md:max-w-xl">
            {/* QR image */}
            <div className="shrink-0">
              <QRCodeLightbox
                caption="Scan to Book"
                captionClass="text-[11px] text-white/70 font-medium uppercase tracking-wide"
                imgClass="w-36 h-36 object-cover rounded-xl border-4 border-white shadow-2xl shadow-black/40"
              />
            </div>

            {/* Text */}
            <div className="text-center sm:text-left">
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Book on the Go</p>
              <h4 className="text-white font-display text-xl sm:text-2xl mb-2 leading-snug">
                Scan to Schedule
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Use your phone's camera to scan this code and book your appointment instantly from your mobile device.
              </p>
              <a
                href="https://lss-spa-wellness-llc.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs text-primary/80 hover:text-primary underline underline-offset-2 transition-colors"
              >
                Or tap here to book online ↗
              </a>
            </div>
          </div>
        </div>

        {/* Service Menu Download */}
        <div className="border-t border-white/10 pt-8 pb-6 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-sm font-bold border-2 border-amber-400 text-amber-300 bg-transparent hover:bg-amber-400 hover:text-foreground transition-all duration-200 shadow-sm"
          >
            <FileText className="w-4 h-4" />
            📄 Download Full Service &amp; Price Menu
          </Link>
        </div>

        {/* Credentials & Safety Bar */}
        <div className="border-t border-white/10 pt-6 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {[
              { icon: "✓", label: "Licensed Esthetician (WI)" },
              { icon: "❄", label: "Certified CryoSkin Specialist" },
              { icon: "✦", label: "Diamond Glow™ Certified" },
              { icon: "🛡", label: "Insured" },
            ].map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-1.5 text-[11px] text-white/50 font-medium tracking-wide"
              >
                <span className="text-primary/70 text-xs">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-5 text-center text-xs text-white/40">
          © {new Date().getFullYear()} LSS Spa and Wellness LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
