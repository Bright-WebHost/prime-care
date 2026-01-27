import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1a33] text-white">
      <div className="section-shell py-14 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-wide">
            Prime Care Trading & Services
          </h3>
          <p className="text-sm leading-relaxed text-white/70 max-w-sm">
            Reliable HVAC, motor, pump, and technical maintenance solutions
            across Doha, Qatar — engineered for performance and long-term
            reliability.
          </p>
        </div>

        {/* CONTACT */}
        <div className="space-y-4 text-sm">
          <p className="text-brand-yellow font-semibold uppercase tracking-wide">
            Contact
          </p>

          <div className="flex items-start gap-3">
            <Phone size={16} className="mt-1 text-brand-yellow" />
            <div>
              <p className="text-white/90">+974 513 757 47</p>
              <p className="text-xs text-white/60">Sales & Technical</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone size={16} className="mt-1 text-brand-yellow" />
            <div>
              <p className="text-white/90">+974 513 757 67</p>
              <p className="text-xs text-white/60">Workshop</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={16} className="text-brand-yellow" />
            <span>info@primecarets.com</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={16} className="mt-1 text-brand-yellow" />
            <p className="text-white/70">
              Ezdan Oasis, Shop No. 1,<br />
              Building 288, Street 5,<br />
              Zone D, Doha, Qatar
            </p>
          </div>
        </div>

        {/* COMPANY / QUICK LINKS */}
        <div className="space-y-4 text-sm">
          <p className="text-brand-yellow font-semibold uppercase tracking-wide">
            Company
          </p>

          <ul className="space-y-3">
            {[
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Clients", href: "#clients" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition"
                >
                  <ArrowRight
                    size={14}
                    className="text-brand-yellow transition group-hover:translate-x-1"
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Prime Care Trading & Services. All rights reserved.
      </div>
    </footer>
  );
}
