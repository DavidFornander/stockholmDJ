"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function OptimizedHeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden mb-16 w-full">
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <Image
          src="/assets/temp/Cool.png"
          alt="Stockholm.DJ Team"
          title="Välkommen till Stockholm.DJ"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
          priority
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        <div className="container mx-auto text-center mb-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Välkommen till Stockholm.DJ
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Boka erfarna DJ:s för ditt event
          </p>
        </div>
      </div>
    </section>
  );
}
