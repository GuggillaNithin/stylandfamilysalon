"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1800&q=80",
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const galleryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    if (!galleryRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGalleryVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pb-14 lg:pt-17">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-2 py-1 text-xs font-medium text-white sm:text-sm">
              <span className="rounded-full bg-[#d4af37] px-2 py-1 text-black">-5% off</span>
              <span>For your very first visit</span>
            </div>

            <h1 className="mt-6 text-xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
              Look Good,
              <br />
              <span className="text-[#d4af37]">Feel Confident,</span>
              <br />
              Shine Everyday
            </h1>
            <p>Feeling so good</p>

            <div className="mt-7 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-[#d4af37] text-sm font-bold text-black">
                  A
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-sm font-bold text-black">
                  R
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-zinc-500 text-sm font-bold text-white">
                  S
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#d4af37]">***** 4.9</p>
                <p className="text-sm text-white/80">Loved by 10k+ trusted clients</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/20 pt-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-xl text-sm text-white/90 sm:text-base">
                Step into our barbershop for expert grooming, modern styles, and classic
                techniques that keep you looking your best every day.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+12124567899"
                  className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold transition hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  +1 (212) 456-7899
                </a>
                <Link
                  href="/services"
                  className="rounded-full bg-[#d4af37] px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-white"
                >
                  See Our Services
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeSlide === index ? "w-8 bg-[#d4af37]" : "w-2.5 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        ref={galleryRef}
        className="bg-zinc-100 px-5 py-12 text-black sm:px-8 md:py-20"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-[#d4af37]/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a6b09]">
              Our Gallery
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Barbershop, grooming
              <br className="hidden sm:block" />
              is more than just a service - it&apos;s an experience.
            </h2>
          </div>

          <div className="mt-12 flex flex-col items-center gap-5 md:flex-row md:items-end md:justify-center">
            <article
              className={`relative h-76 w-full max-w-[250px] overflow-hidden rounded-xl bg-zinc-200 shadow-lg transition-all duration-700 ease-out ${
                isGalleryVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80"
                alt="Professional barber tools on a table"
                className="h-full w-full object-cover"
              />
              <div className="absolute -bottom-3 right-4 rounded-md bg-white p-2 text-black shadow-md">
                <span className="text-xs font-semibold">tools</span>
              </div>
            </article>

            <article
              className={`relative h-[300px] w-full max-w-[360px] overflow-hidden rounded-xl bg-zinc-200 shadow-lg transition-all duration-700 delay-150 ease-out sm:h-[340px] ${
                isGalleryVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=900&q=80"
                alt="Close-up of beard grooming session"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5 text-white backdrop-blur-sm">
                <p className="text-sm font-semibold blur-[0.5px]">Our focus & goals</p>
                <p className="mt-2 max-w-[280px] text-xs text-white/85 blur-[0.5px]">
                  Deliver exceptional grooming through skill, comfort, and style.
                </p>
              </div>
            </article>

            <article
              className={`relative h-56 w-full max-w-[220px] overflow-hidden rounded-xl bg-zinc-200 shadow-lg transition-all duration-700 delay-300 ease-out ${
                isGalleryVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=700&q=80"
                alt="Client enjoying a haircut in the barbershop"
                className="h-full w-full object-cover"
              />
              <div className="absolute -top-3 right-4 rounded-md bg-[#d4af37] p-2 text-black shadow-md">
                <span className="text-xs font-semibold">style</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
