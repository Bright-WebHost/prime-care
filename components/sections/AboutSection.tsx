"use client";

import Image from "next/image";
import { useSmoothText } from "@/hooks/useSmoothText";

export default function AboutSection() {
  useSmoothText();

  return (
    <section
      id="about"
      className="bg-brand-light py-16 lg:py-20"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">

        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-6">
          <p className="smooth-text text-xs uppercase tracking-[0.3em] text-brand-gray">
            Company Profile
          </p>

          <h2 className="smooth-text max-w-xl text-4xl font-heading font-extrabold leading-tight text-brand-navy">
            Trusted technical partner<br />in Qatar
          </h2>

          <div className="smooth-text h-[3px] w-16 bg-brand-yellow" />

          <p className="smooth-text max-w-xl text-base leading-relaxed text-brand-gray">
            Prime Care Trading & Services delivers high-quality maintenance,
            repair, and servicing solutions across Doha, Qatar — built on
            technical expertise and operational reliability.
          </p>

          <p className="smooth-text max-w-xl text-base leading-relaxed text-brand-gray">
            Our specialization includes HVAC systems and large LV / HT AC & DC
            electric motors, supporting industrial, commercial, and residential
            facilities with precision-driven service.
          </p>

          {/* ================= AUTO-PLAY VIDEO ================= */}
          <div className="relative mt-8 h-[220px] overflow-hidden rounded-lg bg-black">

            <video
              src="/videos/about.mp4"   // /public/videos/about.mp4
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Subtle overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 to-transparent" />

            <div className="absolute bottom-4 left-4 text-xs uppercase tracking-wider text-white/80">
              Company Overview
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="relative h-[460px] overflow-hidden rounded-lg bg-brand-navy">

          {/* Accent blocks */}
          <div className="absolute -top-6 -right-6 h-28 w-28 bg-brand-yellow/90" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-white/90" />

          {/* IMAGE */}
          <Image
            src="/images/about.jpg"   // /public/images/about.jpg
            alt="Prime Care technical team at work"
            fill
            priority
            className="object-cover"
          />

          {/* Consistent dark overlay */}
          <div className="absolute inset-0 bg-brand-navy/25" />
        </div>

      </div>
    </section>
  );
}
