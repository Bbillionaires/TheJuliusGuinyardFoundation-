"use server";

import { isValidEmail, recordSubmission } from "@/lib/submissions";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email, and message." };
  }

  if (!isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  await recordSubmission("contact", { name, email, message });

  return {
    status: "success",
    message: `Thanks, ${name}! We received your message and will get back to you soon.`,
  };
}
