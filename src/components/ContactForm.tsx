"use client";

import { useActionState } from "react";
import { submitContactMessage, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactMessage, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
        />
      </div>
      <textarea
        name="message"
        placeholder="How can we help?"
        required
        rows={3}
        className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
      />
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-red/90 disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
      {state.status !== "idle" && (
        <p
          role="status"
          className={`text-sm ${
            state.status === "success" ? "text-emerald-300" : "text-red-300"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
