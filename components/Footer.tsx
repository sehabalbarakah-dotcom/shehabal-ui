import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Smartphone } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
];

const productLinks = [
  "Premium Rice",
  "Flours & Pulses",
  "Exotic Spices",
  "Oils & Beverages",
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/shehab_logo_white.png" alt="Sehab Albarakah" width={200} height={100} />
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              A leading wholesale trading company based in Dubai, UAE — your
              trusted partner for bulk supply, import/export, and distribution
              across the GCC and beyond.
            </p>
            {/* <div className="flex items-center gap-3">
              {["in", "X", "ig"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-light text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-5">
              Our Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((p) => (
                <li key={p}>
                  <Link
                    href="/products"
                    className="text-text-muted hover:text-text-light text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-text-muted">
                <MapPin size={15} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Al Qusais Industrial Area 3, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Smartphone size={15} className="text-accent flex-shrink-0" />
                <a href="tel:+97145001234" className="hover:text-text-light transition-colors">
                058 609 3789 / 058 609 3800 
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Phone size={15} className="text-accent flex-shrink-0" />
                <a href="tel:+97145001234" className="hover:text-text-light transition-colors">
                +971 45 527 207 
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Mail size={15} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@sehabal.com"
                  className="hover:text-text-light transition-colors"
                >
                  info@sehabal.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-muted">
                <Clock size={15} className="text-accent mt-0.5 flex-shrink-0" />
                <span>
                  Mon – Sat: 8:00 AM – 6:00 PM
                  <br />
                 
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        {/* <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Sehab Albarakah. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-text-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-text-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
