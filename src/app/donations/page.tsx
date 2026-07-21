import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donations",
  description: `Support ${site.name}'s drowning prevention programs in ${site.region}.`,
};

const impact = [
  "Sponsor a free swim lesson for a child in our community",
  "Provide water safety education materials for a family",
  "Support lifeguard training and certification",
  "Help maintain The Julius Guinyard Pool and Park",
];

export default function DonationsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Donations"
        title="Your gift keeps families safe in the water."
        description="Every dollar directly supports free swim lessons, water safety education, and lifeguard training across Northeast Florida."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-brand-navy">Why Give</h2>
        <p className="mt-4 text-brand-black/80">
          Drowning is preventable, but prevention takes resources: instructors, safety equipment,
          trained lifeguards, and a pool families can access. Your donation makes that possible.
        </p>
        <ul className="mt-6 space-y-3">
          {impact.map((item) => (
            <li key={item} className="flex gap-3 text-brand-black/80">
              <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy">Ways to Give</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-black/10 p-6">
            <h3 className="font-display text-lg font-bold text-brand-navy">Give Online</h3>
            <p className="mt-2 text-sm text-brand-black/70">
              Online giving is coming soon. In the meantime, call or email us and we will help you
              make a gift.
            </p>
            <button
              type="button"
              disabled
              className="mt-4 w-full cursor-not-allowed rounded-full bg-brand-red/60 px-5 py-2.5 text-sm font-semibold text-white"
              title="Online donations are coming soon"
            >
              Donate Online (Coming Soon)
            </button>
          </div>

          <div className="rounded-xl border border-black/10 p-6">
            <h3 className="font-display text-lg font-bold text-brand-navy">Give by Mail</h3>
            <p className="mt-2 text-sm text-brand-black/70">
              Mail a check made out to {site.name} to:
            </p>
            <p className="mt-2 text-sm font-medium text-brand-black">{fullAddress}</p>
          </div>

          <div className="rounded-xl border border-black/10 p-6 sm:col-span-2">
            <h3 className="font-display text-lg font-bold text-brand-navy">
              Corporate & Community Partnership
            </h3>
            <p className="mt-2 text-sm text-brand-black/70">
              Interested in sponsoring a swim season, an outreach event, or lifeguard training?
              Email{" "}
              <a href={`mailto:${site.email}`} className="text-brand-blue hover:underline">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={site.phoneHref} className="text-brand-blue hover:underline">
                {site.phone}
              </a>{" "}
              to talk with us about a partnership.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
