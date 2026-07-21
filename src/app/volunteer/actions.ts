"use server";

import { isValidEmail, recordSubmission } from "@/lib/submissions";

export type VolunteerFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitVolunteerApplication(
  _prevState: VolunteerFormState,
  formData: FormData
): Promise<VolunteerFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const availability = formData.get("availability")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const interests = formData.getAll("interests").map(String);

  if (!name || !email) {
    return { status: "error", message: "Please enter your name and email address." };
  }

  if (!isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (interests.length === 0) {
    return { status: "error", message: "Please select at least one area you'd like to help with." };
  }

  await recordSubmission("volunteer", {
    name,
    email,
    phone,
    availability,
    message,
    interests,
  });

  return {
    status: "success",
    message: `Thank you, ${name}! We received your volunteer application and will reach out soon.`,
  };
}
