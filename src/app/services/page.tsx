import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Free swimming lessons, water safety education, lifeguard support, and pool access from ${site.name}.`,
};

const services = [
  {
    title: "Free Swimming Lessons",
    description:
      "Group and individual swim instruction for children and adults, offered at no cost so that the ability to swim is never limited by the ability to pay.",
  },
  {
    title: "Water Safety Education",
    description:
      "Hands-on workshops for families, schools, and community groups covering supervision, barriers, life jackets, and how to recognize the signs of drowning.",
  },
  {
    title: "Lifeguard Support",
    description:
      "Guidance, training resources, and support for lifeguards who protect our pools, parks, and waterways throughout the year.",
  },
  {
    title: "The Julius Guinyard Pool and Park",
    description:
      "Our community aquatics home base, offering a safe, welcoming place for residents of Northeast Florida to learn to swim and enjoy the water.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Water safety, made accessible to everyone."
        description={`${site.name} provides free, hands-on programs that give families the skills and confidence to stay safe in and around the water.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-xl border border-black/10 p-8">
              <h2 className="font-display text-xl font-bold text-brand-navy">{service.title}</h2>
              <p className="mt-3 text-brand-black/70">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-brand-sand p-8 text-center">
          <h2 className="font-display text-xl font-bold text-brand-navy">
            Ready to get your family started?
          </h2>
          <p className="mt-2 text-brand-black/70">
            Check our current swim lesson schedule and location, or reach out and we will help you
            find the right program.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/swimming-schedule"
              className="rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy/90"
            >
              View Schedule & Location
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border border-brand-navy px-5 py-2.5 text-sm font-semibold text-brand-navy hover:bg-white"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
