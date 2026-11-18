/**
 * Form delivery for the contact, careers and newsletter forms.
 *
 * Submissions are forwarded to FORMS_WEBHOOK_URL (e.g. a Make/Zapier webhook, or a small
 * email-sending function using Resend/SMTP). Until it is set, the API answers 503 and the
 * forms tell visitors to email us directly, so no enquiry is ever silently lost.
 */

export type FormKind = "contact" | "careers" | "newsletter";

export const MAX_CV_BYTES = 5 * 1024 * 1024;
export const CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmail(value: unknown): value is string {
  return typeof value === "string" && EMAIL_RE.test(value.trim());
}

export function clean(value: FormDataEntryValue | null | undefined, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export type DeliveryResult = { ok: true } | { ok: false; status: number; error: string };

export async function deliver(kind: FormKind, fields: Record<string, string>, file?: File | null): Promise<DeliveryResult> {
  const url = process.env.FORMS_WEBHOOK_URL;
  if (!url) {
    console.warn(`[forms] FORMS_WEBHOOK_URL is not set; ${kind} submission not delivered.`);
    return { ok: false, status: 503, error: "not_configured" };
  }
  const body = new FormData();
  body.set("form", kind);
  body.set("submittedAt", new Date().toISOString());
  for (const [k, v] of Object.entries(fields)) body.set(k, v);
  if (file) body.set("cv", file, file.name);

  try {
    const res = await fetch(url, { method: "POST", body });
    if (!res.ok) return { ok: false, status: 502, error: "delivery_failed" };
    return { ok: true };
  } catch {
    return { ok: false, status: 502, error: "delivery_failed" };
  }
}
