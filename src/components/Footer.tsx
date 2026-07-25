import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { fullAddress, mapsHref, navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-emblem.png"
              alt="The Julius Guinyard Foundation"
              width={500}
              height={401}
              className="h-14 w-auto rounded-full bg-white/95 p-1"
            />
            <span className="font-display text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-white/70">{site.tagline}</p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">
            Explore
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href={mapsHref} target="_blank" rel="noreferrer" className="hover:text-white">
                {fullAddress}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="pt-1 text-white/60">Proudly serving {site.region}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">
            Get In Touch
          </h2>
          <div className="mt-3">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
