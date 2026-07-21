import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community Outreach",
  description: `${site.name}'s community outreach programs across ${site.region}.`,
};

const initiatives = [
  {
    title: "School Partnerships",
    description:
      "Working with local schools to bring water safety education directly to students and teachers.",
  },
  {
    title: "Community Pool Days",
    description:
      "Free, supervised swim events that give families access to the pool and introduce them to our programs.",
  },
  {
    title: "Water Safety Workshops",
    description:
      "In-person workshops for parents, caregivers, and youth organizations across Northeast Florida.",
  },
  {
    title: "Neighborhood Partnerships",
    description:
      "Collaborating with churches, community centers, and civic groups to reach families who need us most.",
  },
];

export default function CommunityOutreachPage() {
  return (
    <div>
      <PageHero
        eyebrow="Community Outreach"
        title="Meeting families where they are."
        description={`${site.name} brings water safety directly into schools and neighborhoods across ${site.region}.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {initiatives.map((initiative) => (
            <div key={initiative.title} className="rounded-xl border border-black/10 p-6">
              <h2 className="font-display text-lg font-bold text-brand-navy">
                {initiative.title}
              </h2>
              <p className="mt-2 text-sm text-brand-black/70">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-brand-sand p-8 text-center">
          <h2 className="font-display text-xl font-bold text-brand-navy">
            Want to bring us to your school or organization?
          </h2>
          <p className="mt-2 text-brand-black/70">
            Email{" "}
            <a href={`mailto:${site.email}`} className="text-brand-blue hover:underline">
              {site.email}
            </a>{" "}
            to schedule a water safety workshop or outreach event.
          </p>
        </div>
      </section>
    </div>
  );
}
