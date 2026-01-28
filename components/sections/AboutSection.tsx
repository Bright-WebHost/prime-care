"use client";

import Image from "next/image";
import { useSmoothText } from "@/hooks/useSmoothText";

export default function AboutSection() {
  useSmoothText();

  return (
    <section
      id="about"
      className="bg-brand-light pt-10 pb-16 lg:pt-14 lg:pb-20"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">

        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-5">

          <h2 className="smooth-text max-w-xl text-4xl font-heading font-extrabold leading-tight text-brand-navy">
            Trusted Technical Partner<br />in Qatar
          </h2>

          <div className="smooth-text h-[3px] w-14 bg-brand-yellow" />

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

          {/* ================= IMAGE (REPLACED VIDEO) ================= */}
          <div className="relative mt-6 h-[200px] overflow-hidden rounded-lg bg-brand-navy">

            <Image
              src="/images/about1.png"  // <-- add your image here
              alt="Prime Care Trading & Services technical maintenance work in Qatar"
              fill
              className="object-cover"
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="relative h-[420px] overflow-hidden rounded-lg bg-brand-navy">

          {/* Accent blocks */}
          <div className="absolute -top-5 -right-5 h-24 w-24 bg-brand-yellow/90" />
          <div className="absolute -bottom-5 -left-5 h-28 w-28 bg-white/90" />

          <Image
            src="/images/about.png"
            alt="Prime Care technical team at work"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-brand-navy/25" />
        </div>

      </div>
    </section>
  );
}
