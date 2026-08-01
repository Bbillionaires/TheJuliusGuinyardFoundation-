"use client";

import { useEffect, useState } from "react";
import { SevenSegmentDisplay } from "@/components/SevenSegmentDisplay";

// CDC: ~4,000 unintentional drowning deaths/year in the U.S. (avg. 2012–2021), about 11/day.
// Source: cdc.gov/drowning/data-research/facts
const ANNUAL_ESTIMATE = 4000;
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const RATE_PER_MS = ANNUAL_ESTIMATE / MS_PER_YEAR;

const BAR_SEGMENTS = 28;
const BRAND_BLUE = "#2563eb"; // matches --color-brand-blue
const BRAND_RED = "#c8102e"; // matches --color-brand-red
const DIM_RED = "#f3dfe1";
const DIM_TRIM = "#dce6f5";

const TRIM_GRADIENT = "linear-gradient(to bottom, #3b82f6, #2563eb, #1d4ed8)";
const TRIM_GRADIENT_ALERT = "linear-gradient(to bottom, #e0384f, #c8102e, #9c0d24)";

function estimateForYearSoFar(now: number) {
  const yearStart = new Date(new Date(now).getFullYear(), 0, 1).getTime();
  return Math.max(0, now - yearStart) * RATE_PER_MS;
}

export function DrowningTollTicker() {
  const [count, setCount] = useState(() => Math.floor(estimateForYearSoFar(Date.now())));
  const [progress, setProgress] = useState(0);
  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      const estimate = estimateForYearSoFar(Date.now());
      const whole = Math.floor(estimate);

      setProgress(estimate - whole);
      setCount((prev) => {
        if (whole > prev) {
          setFlashing(true);
          setTimeout(() => setFlashing(false), 1600);
          return whole;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const trimColor = flashing ? BRAND_RED : BRAND_BLUE;
  const litBars = Math.round(progress * BAR_SEGMENTS);

  return (
    <section className="border-t border-black/5 bg-neutral-100 py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
          In Honor of Julius Guinyard
        </p>

        {/* Outer trim */}
        <div
          className="mt-4 rounded-2xl p-2 shadow-2xl transition-[background] duration-500"
          style={{
            background: flashing ? TRIM_GRADIENT_ALERT : TRIM_GRADIENT,
            boxShadow: flashing
              ? `0 0 0 3px ${BRAND_RED}, 0 0 40px 8px rgb(200 16 46 / 0.5), 0 20px 40px -12px rgb(0 0 0 / 0.3)`
              : "0 20px 40px -12px rgb(0 0 0 / 0.25)",
          }}
        >
          {/* Screen */}
          <div className="relative overflow-hidden rounded-xl bg-white px-6 py-6 shadow-inner sm:px-10">
            <p
              className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors duration-500"
              style={{ color: trimColor }}
            >
              Est. Drowning Deaths &middot; Year to Date
            </p>

            <div
              role="status"
              aria-live="polite"
              aria-label={`Estimated ${count.toLocaleString()} drowning deaths this year`}
              className="flex justify-center overflow-x-auto"
            >
              <SevenSegmentDisplay
                value={count.toLocaleString()}
                color={BRAND_RED}
                dim={DIM_RED}
                heightPx={72}
                glow={false}
              />
            </div>

            {/* Bargraph — fills toward the next whole-number tick */}
            <div className="mt-4 flex justify-center gap-[3px]">
              {Array.from({ length: BAR_SEGMENTS }).map((_, i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-[2px] transition-colors duration-300"
                  style={{
                    backgroundColor: i < litBars ? trimColor : DIM_TRIM,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-xl text-sm text-brand-black/70">
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
