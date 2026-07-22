"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Program = {
  title: string;
  description: string;
};

const AUTO_ADVANCE_MS = 4500;

export function WhatWeDoCarousel({ programs }: { programs: Program[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = programs.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(id);
  }, [paused, count]);

  const liveRegion = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {programs.map((program, i) => (
            <div
              key={program.title}
              className="w-full shrink-0 px-1 sm:px-2"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
            >
              <div className="mx-auto max-w-xl rounded-xl border border-black/10 bg-brand-sand p-8 text-center sm:p-10">
                <h3 className="font-display text-xl font-bold text-brand-navy">
                  {program.title}
                </h3>
                <p className="mt-3 text-brand-black/70">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={liveRegion} className="sr-only" aria-live="polite">
        {programs[index].title}
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous"
        className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white p-2 text-brand-navy shadow-sm transition hover:bg-brand-sand sm:flex"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next"
        className="absolute right-0 top-1/2 hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white p-2 text-brand-navy shadow-sm transition hover:bg-brand-sand sm:flex"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {programs.map((program, i) => (
          <button
            key={program.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${program.title}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-brand-navy" : "w-2.5 bg-brand-navy/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
