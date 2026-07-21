import Link from "next/link";
import { site } from "@/lib/site";

const programs = [
  {
    title: "Free Swimming Lessons",
    description:
      "Structured swim instruction for children and families in our community, at no cost.",
  },
  {
    title: "Water Safety Education",
    description:
      "Workshops that teach families how to prevent drowning before it ever happens.",
  },
  {
    title: "Lifeguard Support",
    description:
      "Training and support that helps grow the next generation of certified lifeguards.",
  },
  {
    title: "The Julius Guinyard Pool and Park",
    description:
      "A community aquatics home base where residents of Northeast Florida learn, swim, and stay safe.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-red">
              Drowning Prevention · {site.region}
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">{site.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/swimming-schedule"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-white/90"
              >
                Find Swim Lessons
              </Link>
              <Link
                href="/donations"
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-red/90"
              >
                Donate Now
              </Link>
              <Link
                href="/volunteer"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Volunteer
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
            <p className="font-display text-lg font-bold text-white">Why it matters</p>
            <p className="mt-3 text-white/80">
              Drowning is preventable. Through swim instruction, water safety education, and a
              trained lifeguard community, {site.shortName} is working to make sure every family
              in {site.region} has the skills and support to stay safe around water.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
            What We Do
          </h2>
          <p className="mt-3 text-brand-black/70">
            Four ways {site.shortName} keeps our community safer in and around the water.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-xl border border-black/10 bg-brand-sand p-6"
            >
              <h3 className="font-display text-base font-bold text-brand-navy">
                {program.title}
              </h3>
              <p className="mt-2 text-sm text-brand-black/70">{program.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services" className="text-sm font-semibold text-brand-blue hover:underline">
            See all of our services →
          </Link>
        </div>
      </section>

      <section className="bg-brand-sand">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-brand-navy">Get Involved</h2>
            <p className="mt-3 text-brand-black/70">
              Give your time as a volunteer swim aide, outreach helper, or lifeguard mentor.
            </p>
            <Link
              href="/volunteer"
              className="mt-5 inline-block rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy/90"
            >
              Become a Volunteer
            </Link>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-brand-navy">Support the Mission</h2>
            <p className="mt-3 text-brand-black/70">
              Your gift funds swim lesson scholarships, safety equipment, and lifeguard training.
            </p>
            <Link
              href="/donations"
              className="mt-5 inline-block rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-red/90"
            >
              Give Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
