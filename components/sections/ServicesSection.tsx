"use client";

import { useState } from "react";
import Image from "next/image";
import { useSmoothText } from "@/hooks/useSmoothText";

const services = [
  {
    number: "01",
    short: "HVAC Maintenance",
    title: "HVAC Maintenance Services",
    description:
      "Maintenance, troubleshooting, and repair of HVAC systems including split ACs, packaged units, AHUs, FCUs, ventilation systems, ducting, chilled water systems, and heat exchangers to ensure reliable and efficient operation.",
    image: "/images/01.png",
  },
  {
    number: "02",
    short: "Motors & Pumps",
    title: "Electric Motor & Pump Services",
    description:
      "Troubleshooting, rewinding, refurbishment, and repair of LV / HT AC & DC motors and pumps including industrial motors, irrigation pumps, chilled water pumps, exhaust fan motors, and fire pump motors.",
    image: "/images/02.png",
  },
  {
    number: "03",
    short: "Laser Alignment",
    title: "Laser Alignment Services",
    description:
      "Precision laser alignment services for motors, pumps, and rotating equipment to improve performance, reduce vibration, minimize wear, and enhance overall system efficiency.",
    image: "/images/03.png",
  },
  {
    number: "04",
    short: "VFD Services",
    title: "VFD Services",
    description:
      "Installation, commissioning, and maintenance of Variable Frequency Drives (VFDs) to optimize motor performance, improve energy efficiency, and ensure smooth and controlled operation.",
    image: "/images/04.png",
  },
  {
    number: "05",
    short: "Panel Works",
    title: "Electrical Panel Works",
    description:
      "Design, installation, modification, and maintenance of electrical control panels including MCC panels, distribution panels, synchronization panels, PLC panels, and VFD panels.",
    image: "/images/05.png",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  useSmoothText();

  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6">

        {/* HEADER */}
        <div className="mb-14 lg:mb-20 max-w-4xl">
          <p className="smooth-text text-xs lg:text-sm uppercase tracking-[0.35em] text-brand-gray">
            Services
          </p>
          <h2 className="smooth-text mt-3 lg:mt-4 text-3xl lg:text-5xl font-heading font-bold text-brand-navy leading-tight">
            Engineered services<br />built for reliability
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[280px_420px_1fr]">

          {/* LEFT — SERVICE BARS */}
          <div className="space-y-3 lg:space-y-5">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`relative w-full px-5 py-4 lg:px-7 lg:py-7 text-left transition-all duration-300
                    ${
                      isActive
                        ? "bg-brand-navy text-white"
                        : "bg-transparent text-brand-gray hover:text-brand-navy"
                    }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-[4px] ${
                      isActive ? "bg-brand-yellow" : "bg-transparent"
                    }`}
                  />
                  <span className="block text-base lg:text-lg font-semibold">
                    {s.short}
                  </span>
                </button>
              );
            })}
          </div>

          {/* CENTER — IMAGE */}
          <div className="flex justify-center">
            <div className="relative h-[360px] lg:h-[580px] w-[260px] lg:w-[380px] overflow-hidden bg-brand-navy p-4 lg:p-6">
              
              <Image
                src={services[active].image}
                alt={services[active].title}
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-brand-navy/25" />

              <div className="absolute bottom-4 right-4 lg:bottom-5 lg:right-5 text-5xl lg:text-7xl font-heading font-bold text-white/25">
                {services[active].number}
              </div>
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="flex max-w-[640px] flex-col justify-center space-y-5 lg:space-y-7">
            <p className="smooth-text text-xs uppercase tracking-[0.4em] text-brand-gray">
              About this service
            </p>

            <h3 className="smooth-text text-2xl lg:text-[36px] font-heading font-bold text-brand-navy leading-snug">
              {services[active].title}
            </h3>

            <p className="smooth-text text-base lg:text-[19px] leading-relaxed text-brand-gray">
              {services[active].description}
            </p>

            <a
              href="#contact"
              className="smooth-text inline-flex w-fit text-sm font-semibold text-brand-navy underline underline-offset-4 hover:text-brand-yellow transition"
            >
              Discuss this service →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
