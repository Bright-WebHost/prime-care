"use client";

import Image from "next/image";
import { useSmoothText } from "@/hooks/useSmoothText";

const whyChoose = [
  {
    title: "Expertise & Experience",
    description:
      "Skilled technical professionals delivering high-quality HVAC and motor services with proven reliability."
  },
  {
    title: "Fast & Reliable Service",
    description:
      "Quick response times, minimal downtime, and dependable emergency maintenance solutions."
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Preventive maintenance programs that extend equipment lifespan and reduce operational costs."
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Personalized solutions, transparent communication, and long-term support you can trust."
  }
];

export default function WhyChooseSection() {
  useSmoothText();

  return (
    <section id="why-us" className="section-shell">
      {/* Heading */}
      <div className="mb-14">
        <p className="smooth-text text-sm uppercase tracking-[0.2em] text-brand-gray">
          Why Choose Us
        </p>
        <h2 className="smooth-text mt-2 text-3xl font-bold text-brand-navy">
          Trusted technical partner.
        </h2>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-20 items-start">
        
        {/* LEFT IMAGE */}
        <div className="relative h-[420px] overflow-hidden rounded-xl bg-brand-navy">
          <Image
            src="/images/why.webp"
            alt="Prime Care technical expertise"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/25" />
        </div>

        {/* RIGHT STEPS */}
        <div className="flex flex-col gap-10 lg:justify-between lg:max-h-[420px]">
          {whyChoose.map((item, index) => (
            <div
              key={item.title}
              className="smooth-text flex items-start gap-6"
              style={{
                marginLeft: 0,               // mobile
                ...(typeof window !== "undefined" && {
                  ["@media (min-width: 1024px)"]: {}
                })
              }}
            >
              {/* desktop-only step offset */}
              <div
                className="hidden lg:block"
                style={{ marginLeft: `${index * 64}px` }}
              />

              {/* NUMBER */}
              <div className="w-[72px] text-6xl font-bold text-black/10 leading-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* TEXT */}
              <div className="max-w-md">
                <h3 className="text-lg font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-brand-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
