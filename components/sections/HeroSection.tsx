"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParallaxImage } from "@/components/ParallaxImage";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    // Entry animation (first load)
    gsap.fromTo(
      textRef.current,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
        delay: 0.25,
      }
    );

    // Scroll parallax
    gsap.to(textRef.current, {
      y: -45,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          imageSrc="/images/hero.webp"
          hero
          plain
          height="100vh"
          className="object-cover"
        />
      </div>

      {/* Premium overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-navy/85 via-brand-navy/70 to-brand-navy/90" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div
          ref={textRef}
          className="section-shell space-y-6 text-white"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-yellow">
            HVAC • Motors • Pumps
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Prime Care Trading <br /> & Services
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            High-quality maintenance, repair, and servicing solutions in Doha, Qatar —
            engineered for reliability, efficiency, and long-term performance.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit rounded-full bg-brand-yellow px-8 py-4 text-base font-semibold text-brand-navy shadow-lg transition hover:-translate-y-1 hover:bg-brand-yellow/90"
          >
            Call / Contact
          </a>
        </div>
      </div>
    </section>
  );
}
