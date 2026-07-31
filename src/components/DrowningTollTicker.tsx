"use client";

import { useEffect, useState } from "react";

// CDC: ~4,000 unintentional drowning deaths/year in the U.S. (avg. 2012–2021), about 11/day.
// Source: cdc.gov/drowning/data-research/facts
const ANNUAL_ESTIMATE = 4000;
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const RATE_PER_MS = ANNUAL_ESTIMATE / MS_PER_YEAR;

function estimateForYearSoFar(now: number) {
  const yearStart = new Date(new Date(now).getFullYear(), 0, 1).getTime();
  return Math.max(0, now - yearStart) * RATE_PER_MS;
}

export function DrowningTollTicker() {
  const [count, setCount] = useState(() => Math.floor(estimateForYearSoFar(Date.now())));
  const [progress, setProgress] = useState(0);
  const [flashKey, setFlashKey] = useState(0);
  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      const estimate = estimateForYearSoFar(Date.now());
      const whole = Math.floor(estimate);

      setProgress(estimate - whole);
      setCount((prev) => {
        if (whole > prev) {
          setFlashKey((k) => k + 1);
          setFlashing(true);
          setTimeout(() => setFlashing(false), 1600);
          return whole;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-t border-black/5 bg-white py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
          In Honor of Julius Guinyard
        </p>

        <div
          key={flashKey}
          className={`mt-3 rounded-2xl border px-10 py-6 ${
            flashing ? "animate-ticker-flash-bg" : "border-black/10 bg-brand-navy/[0.06]"
          }`}
        >
          <div
            className={`font-display font-extrabold leading-none tabular-nums ${
              flashing ? "animate-ticker-flash" : "text-brand-navy"
            }`}
            style={{ fontSize: "0.75in" }}
            role="status"
            aria-live="polite"
          >
            {count.toLocaleString()}
          </div>

          <div className="mx-auto mt-4 h-1.5 w-48 overflow-hidden rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-brand-red"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        <p className="mt-4 max-w-xl text-sm text-brand-black/70">
          Estimated lives lost to drowning in the U.S. this year — running continuously from the
          CDC&rsquo;s published national average of about 4,000 deaths per year (11 per day).
        </p>
        <p className="mt-1 max-w-xl text-xs text-brand-black/50">
          A statistical illustration, not a live feed of confirmed individual events. Source: CDC,
          cdc.gov/drowning.
        </p>
      </div>
    </section>
  );
}
