import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Board Members",
  description: `Meet the board of directors of ${site.name}.`,
};

const placeholderSeats = Array.from({ length: 4 });

export default function BoardMembersPage() {
  return (
    <div>
      <PageHero
        eyebrow="Board Members"
        title="Leadership Behind the Mission"
        description={`${site.name} is guided by a volunteer board of directors committed to drowning prevention in ${site.region}.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-brand-black/70">
          Board member profiles are coming soon. Check back shortly, or contact us if you would
          like to learn more about our leadership.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placeholderSeats.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl border border-dashed border-black/15 p-6 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-sand text-brand-navy">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="mt-4 font-display text-sm font-bold text-brand-navy">
                Name Coming Soon
              </p>
              <p className="text-xs text-brand-black/60">Title Coming Soon</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-brand-sand p-6 text-center">
          <p className="text-sm text-brand-black/70">
            Interested in joining our board? Email{" "}
            <a href={`mailto:${site.email}`} className="text-brand-blue hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
