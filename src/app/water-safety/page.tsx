import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Water Safety",
  description: `Water safety and drowning prevention guidance from ${site.name}.`,
};

const layers = [
  {
    title: "Learn to Swim",
    description:
      "Formal swim lessons dramatically reduce drowning risk for children and adults alike.",
  },
  {
    title: "Constant, Active Supervision",
    description:
      "Assign a dedicated 'water watcher' whenever kids are in or near water — no phones, no distractions.",
  },
  {
    title: "Barriers and Fencing",
    description:
      "Four-sided isolation fencing with self-closing, self-latching gates around home pools.",
  },
  {
    title: "Life Jackets",
    description:
      "Use properly fitted, Coast Guard-approved life jackets for weak or inexperienced swimmers in open water.",
  },
  {
    title: "Know the Signs of Drowning",
    description:
      "Drowning is often quiet — look for a still, low position in the water, a tilted head, or a glassy stare rather than splashing or yelling.",
  },
  {
    title: "Learn CPR",
    description:
      "Every extra minute matters. Knowing CPR can make the difference before help arrives.",
  },
];

export default function WaterSafetyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Water Safety"
        title="Drowning is preventable."
        description="These layers of protection work together to keep families safe in and around the water."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map((layer) => (
            <div key={layer.title} className="rounded-xl border border-black/10 p-6">
              <h2 className="font-display text-lg font-bold text-brand-navy">{layer.title}</h2>
              <p className="mt-2 text-sm text-brand-black/70">{layer.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-brand-sand p-8">
          <h2 className="font-display text-xl font-bold text-brand-navy">
            Want hands-on training?
          </h2>
          <p className="mt-2 text-brand-black/70">
            {site.name} offers free swim lessons and in-person water safety workshops for families,
            schools, and community groups throughout {site.region}. Call{" "}
            <a href={site.phoneHref} className="text-brand-blue hover:underline">
              {site.phone}
            </a>{" "}
            to learn more.
          </p>
        </div>
      </section>
    </div>
  );
}
