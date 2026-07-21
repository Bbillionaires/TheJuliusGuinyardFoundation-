import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name}'s mission to prevent drowning and honor the legacy of Julius Guinyard in ${site.region}.`,
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Honoring a legacy. Protecting a community."
        description={`${site.name} exists so that no family in ${site.region} has to experience the loss of a loved one to a preventable drowning.`}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-brand-navy">Our Namesake</h2>
        <p className="mt-4 text-brand-black/80">
          The Foundation is named in honor of Julius Guinyard, who made history as the first
          Supervisor of Aquatics and dedicated his career to teaching people to swim and stay safe
          in and around the water. His legacy lives on through The Julius Guinyard Pool and Park
          and every family we serve.
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy">Our Mission</h2>
        <p className="mt-4 text-brand-black/80">
          {site.name} works to prevent drowning and build water-safe communities across{" "}
          {site.region} through free swimming lessons, water safety education, and support for
          lifeguards who keep our pools and waterways safe.
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy">Our Vision</h2>
        <p className="mt-4 text-brand-black/80">
          A community where every child learns to swim, every family understands water safety, and
          drowning is no longer a leading cause of preventable loss.
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy">Where We Are Based</h2>
        <p className="mt-4 text-brand-black/80">
          {site.name} is based in Jacksonville, Florida, and proudly serves families throughout{" "}
          {site.region}. Our home is located at {fullAddress}.
        </p>
      </section>
    </div>
  );
}
