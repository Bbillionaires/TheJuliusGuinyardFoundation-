"use client";

import { useActionState } from "react";
import {
  submitVolunteerApplication,
  type VolunteerFormState,
} from "@/app/volunteer/actions";

const initialState: VolunteerFormState = { status: "idle", message: "" };

const interestOptions = [
  "Swim Instructor Aide",
  "Event & Outreach Volunteer",
  "Lifeguard Support",
  "Administrative / Office Support",
];

export function VolunteerForm() {
  const [state, formAction, pending] = useActionState(
    submitVolunteerApplication,
    initialState
  );

  return (
    <form action={formAction} className="space-y-5 rounded-2xl border border-black/10 p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-brand-black" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-brand-black" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-brand-black" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-brand-black" htmlFor="availability">
            Availability
          </label>
          <input
            id="availability"
            name="availability"
            type="text"
            placeholder="e.g. weekday evenings, Saturdays"
            className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-brand-black">
          I would like to help with
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {interestOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-brand-black/80">
              <input
                type="checkbox"
                name="interests"
                value={option}
                className="h-4 w-4 rounded border-black/20 text-brand-blue focus:ring-brand-blue"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="text-sm font-medium text-brand-black" htmlFor="message">
          Tell us about yourself
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy/90 disabled:opacity-60"
      >
        {pending ? "Submitting..." : "Submit Application"}
      </button>

      {state.status !== "idle" && (
        <p
          role="status"
          className={`text-sm ${
            state.status === "success" ? "text-emerald-600" : "text-brand-red"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
