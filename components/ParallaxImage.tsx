"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxImageProps = {
  imageSrc: string;
  alt?: string;
  height?: string;
  className?: string;
  priority?: boolean;
  plain?: boolean;
  hero?: boolean;
};

export function ParallaxImage({
  imageSrc,
  alt = "",
  height = "22rem",
  className,
  priority = false,
  plain = false,
  hero = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      if (!imageRef.current || !containerRef.current) return;

      // 🔥 HERO: video-style parallax
      if (hero) {
        gsap.set(imageRef.current, { y: "-8%" });

        gsap.to(imageRef.current, {
          y: "8%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
      // 🔹 Normal parallax (cards / sections)
      else {
        gsap.fromTo(
          imageRef.current,
          { y: "-6%" },
          {
            y: "6%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [hero]);

  return (
    <div
      ref={containerRef}
      className={`relative z-0 overflow-hidden ${
        plain ? "" : "rounded-xl shadow-soft"
      } bg-brand-light ${className ?? ""}`}
      style={{ height }}
    >
      {hero ? (
        // Hero image (taller than viewport)
        <img
          ref={imageRef}
          src={imageSrc}
          alt={alt}
          className="absolute inset-0 h-[130%] w-full object-cover"
        />
      ) : (
        <Image
          ref={imageRef}
          src={imageSrc}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
      )}
    </div>
  );
}
