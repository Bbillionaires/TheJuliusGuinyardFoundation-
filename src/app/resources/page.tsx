import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description: `Water safety and drowning prevention resources from ${site.name}.`,
};

const externalResources = [
  {
    name: "American Red Cross",
    url: "https://www.redcross.org",
    description: "Swim lesson programs and water safety courses nationwide.",
  },
  {
    name: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov",
    description: "Public health guidance on drowning prevention.",
  },
  {
    name: "USA Swimming Foundation",
    url: "https://www.usaswimmingfoundation.org",
    description: "National initiatives that make swim lessons more accessible.",
  },
  {
    name: "Pool Safely",
    url: "https://www.poolsafely.gov",
    description: "A federal campaign with tips for safer pools and spas.",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Resources"
        title="Tools and organizations that help families stay safe."
        description={`In addition to our own programs, here are trusted national resources on water safety and drowning prevention.`}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-brand-navy">
          Learn More From {site.name}
        </h2>
        <p className="mt-3 text-brand-black/80">
          Visit our{" "}
          <a href="/water-safety" className="text-brand-blue hover:underline">
            Water Safety
          </a>{" "}
          page for the essential layers of protection every family should know, or contact us to
          schedule a workshop through{" "}
          <a href="/community-outreach" className="text-brand-blue hover:underline">
            Community Outreach
          </a>
          .
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy">
          National Resources
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {externalResources.map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-black/10 p-6 transition hover:border-brand-blue"
            >
              <h3 className="font-display text-base font-bold text-brand-navy">
                {resource.name}
              </h3>
              <p className="mt-1 text-sm text-brand-black/70">{resource.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
