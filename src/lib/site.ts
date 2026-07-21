export const site = {
  name: "The Julius Guinyard Foundation",
  shortName: "Guinyard Foundation",
  tagline: "Preventing drowning. Protecting lives. Building water-safe communities.",
  region: "Northeast Florida",
  email: "thejuliusguinyardfoundation@gmail.com",
  phone: "904-515-6818",
  phoneHref: "tel:+19045156818",
  address: {
    line1: "4530 St Johns Ave, Ste 15-315",
    city: "Jacksonville",
    state: "Florida",
    stateAbbr: "FL",
    zip: "32210",
    country: "United States",
  },
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.city}, ${site.address.stateAbbr} ${site.address.zip}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.line1}, ${site.address.city}, ${site.address.stateAbbr} ${site.address.zip}`
)}`;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Donations", href: "/donations" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Water Safety", href: "/water-safety" },
  { label: "Schedule & Location", href: "/swimming-schedule" },
  { label: "Community Outreach", href: "/community-outreach" },
  { label: "Resources", href: "/resources" },
  { label: "Board Members", href: "/board-members" },
];
