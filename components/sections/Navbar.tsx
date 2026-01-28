"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

        {/* LOGO WITH LIGHT GLOW (NO CARD) */}
        <Link href="/" className="relative flex items-center">
          {/* glow layer */}
          {!scrolled && (
            <span className="absolute inset-0 -z-10 rounded-full blur-xl bg-white/40" />
          )}

          <Image
            src="/logo.png"
            alt="Prime Care Trading & Services"
            width={140}
            height={38}
            priority
            className={`object-contain transition-all duration-300 ${
              !scrolled
                ? "drop-shadow-[0_4px_18px_rgba(255,255,255,0.45)]"
                : "drop-shadow-none"
            }`}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden items-center gap-10 transition md:flex ${
            scrolled ? "text-brand-navy" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-[17px] font-medium"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden rounded-full bg-brand-yellow px-6 py-2 text-[14px] font-semibold text-brand-navy shadow-soft transition hover:bg-brand-yellow/90 md:inline-flex"
        >
          Call / Contact
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition ${
            scrolled ? "text-brand-navy" : "text-white"
          }`}
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h18M4 13h18M4 19h18" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
        } ${scrolled ? "bg-white" : "bg-brand-navy"}`}
      >
        <nav className="flex flex-col gap-6 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-lg font-medium ${
                scrolled ? "text-brand-navy" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit rounded-full bg-brand-yellow px-6 py-2 text-sm font-semibold text-brand-navy"
          >
            Call / Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
