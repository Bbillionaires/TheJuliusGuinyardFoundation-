import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VolunteerForm } from "@/app/volunteer/VolunteerForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Volunteer",
  description: `Volunteer with ${site.name} to help prevent drowning in ${site.region}.`,
};

const roles = [
  {
    title: "Swim Instructor Aide",
    description: "Support our instructors during free swim lessons for children and families.",
  },
  {
    title: "Event & Outreach Volunteer",
    description: "Help run community pool days, school visits, and water safety workshops.",
  },
  {
    title: "Lifeguard Support",
    description: "Assist with lifeguard training sessions and certification support.",
  },
  {
    title: "Administrative / Office Support",
    description: "Help with scheduling, outreach communication, and day-to-day operations.",
  },
];

export default function VolunteerPage() {
  return (
    <div>
      <PageHero
        eyebrow="Volunteer"
        title="Give your time. Help save lives."
        description="Our volunteers make it possible to offer free swim lessons and water safety education across Northeast Florida."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-navy">Volunteer Roles</h2>
            <div className="mt-6 space-y-5">
              {roles.map((role) => (
                <div key={role.title} className="rounded-xl bg-brand-sand p-5">
                  <h3 className="font-display text-base font-bold text-brand-navy">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-black/70">{role.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-navy">Apply to Volunteer</h2>
            <p className="mt-2 text-sm text-brand-black/70">
              Fill out the form below and our team will follow up with next steps.
            </p>
            <div className="mt-6">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
