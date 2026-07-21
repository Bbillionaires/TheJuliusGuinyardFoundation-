"use client";

import Link from "next/link";
import { useState } from "react";
import { LifeRingIcon } from "@/components/LifeRingIcon";
import { navItems, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => setOpen(false)}
        >
          <LifeRingIcon className="h-9 w-9 text-brand-navy" />
          <span className="font-display text-lg font-bold leading-tight text-brand-navy sm:text-xl">
            The Julius Guinyard
            <br className="sm:hidden" /> Foundation
          </span>
        </Link>

        <nav className="hidden items-center gap-4 min-[1750px]:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium text-brand-black/80 transition hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 min-[1750px]:flex">
          <a
            href={site.phoneHref}
            className="whitespace-nowrap text-sm font-semibold text-brand-navy hover:text-brand-blue"
          >
            {site.phone}
          </a>
          <Link
            href="/donations"
            className="whitespace-nowrap rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-red/90"
          >
            Donate Now
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-black/10 min-[1750px]:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-navy" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white min-[1750px]:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-black/5 py-3 text-sm font-medium text-brand-black/80 last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="border-b border-black/5 py-3 text-sm font-semibold text-brand-navy"
              onClick={() => setOpen(false)}
            >
              {site.phone}
            </a>
            <Link
              href="/donations"
              className="my-3 rounded-full bg-brand-red px-5 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
