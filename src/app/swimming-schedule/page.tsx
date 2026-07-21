import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { fullAddress, mapsHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Swimming Schedule & Location",
  description: `Find swim lesson times and directions to The Julius Guinyard Pool and Park in ${site.address.city}, ${site.address.stateAbbr}.`,
};

export default function SwimmingSchedulePage() {
  return (
    <div>
      <PageHero
        eyebrow="Swimming Schedule & Location"
        title="Visit The Julius Guinyard Pool and Park"
        description="Swim lesson sessions run seasonally. Call or email us for the current schedule and to reserve a spot."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-navy">Location</h2>
            <p className="mt-3 text-brand-black/80">{fullAddress}</p>
            <p className="mt-1 text-brand-black/60">Serving {site.region}</p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy/90"
            >
              Get Directions
            </a>

            <h2 className="mt-10 font-display text-2xl font-bold text-brand-navy">Contact</h2>
            <p className="mt-3 text-brand-black/80">
              Phone:{" "}
              <a href={site.phoneHref} className="text-brand-blue hover:underline">
                {site.phone}
              </a>
            </p>
            <p className="mt-1 text-brand-black/80">
              Email:{" "}
              <a href={`mailto:${site.email}`} className="text-brand-blue hover:underline">
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-navy">Session Times</h2>
            <p className="mt-3 text-sm text-brand-black/70">
              Our swim lesson schedule changes seasonally based on demand and pool availability.
              Call {site.phone} or email us for current session days and times, group sizes, and
              openings.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-black/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-brand-sand">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-brand-navy">Day</th>
                    <th className="px-4 py-3 font-semibold text-brand-navy">Session</th>
                    <th className="px-4 py-3 font-semibold text-brand-navy">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {["Weekday Evenings", "Saturday Mornings"].map((row) => (
                    <tr key={row} className="border-t border-black/10">
                      <td className="px-4 py-3 text-brand-black/70" colSpan={3}>
                        {row} — call {site.phone} for current times
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
