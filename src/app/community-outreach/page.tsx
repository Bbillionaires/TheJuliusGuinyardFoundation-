import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhotoGallery, type GalleryPhoto } from "@/components/PhotoGallery";
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

const eventPhotos: GalleryPhoto[] = [
  {
    src: "/community/outreach-01-banner.jpg",
    alt: "Kids at the pool entrance beside a banner reading “Honoring a Legend” for Julius Guinyard",
    width: 1600,
    height: 1200,
  },
  {
    src: "/community/outreach-02-friends.jpg",
    alt: "Two longtime friends sharing a moment poolside at the swim meet",
    width: 750,
    height: 1334,
  },
  {
    src: "/community/outreach-03-medal.jpg",
    alt: "A young swimmer proudly wearing his medal at the pool deck",
    width: 1600,
    height: 1200,
  },
  {
    src: "/community/outreach-04-poolkids.jpg",
    alt: "Children in life jackets smiling in the pool",
    width: 1600,
    height: 1200,
  },
  {
    src: "/community/outreach-05-crowd.jpg",
    alt: "Families and spectators gathered poolside under the pavilion to cheer on swimmers",
    width: 1200,
    height: 1600,
  },
  {
    src: "/community/outreach-06-jaguars.jpg",
    alt: "A community member at the pool during the event",
    width: 1600,
    height: 1200,
  },
  {
    src: "/community/outreach-07-poolside.jpg",
    alt: "A swimmer walking the pool deck during the meet",
    width: 1024,
    height: 768,
  },
  {
    src: "/community/outreach-08-flyer.jpg",
    alt: "Event flyer for the Julius Guinyard Open Invitational Old Timers Swim Meet",
    width: 694,
    height: 960,
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

        <div className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              Event Recap
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy sm:text-3xl">
              Old Timers Swim Meet
            </h2>
            <p className="mt-3 text-brand-black/70">
              On September 5, 2026, we celebrated the Julius Guinyard Open Invitational Old
              Timers Swim Meet — generations of swimmers, family, and friends coming together at
              the pool to cheer on the legends and honor the man who started it all.
            </p>
          </div>

          <div className="mt-8">
            <PhotoGallery photos={eventPhotos} />
          </div>

          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-xl shadow-lg">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/c9jB0EfnM_I"
                title="Julius Guinyard Open Invitational Old Timers Swim Meet"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-brand-sand p-8 text-center">
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
