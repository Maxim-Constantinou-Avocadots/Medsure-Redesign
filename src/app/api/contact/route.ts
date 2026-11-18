import { NextResponse } from "next/server";
import { clean, deliver, isEmail } from "@/lib/forms";

export async function POST(request: Request) {
  const form = await request.formData();
  if (clean(form.get("company"))) return NextResponse.json({ ok: true }); // honeypot

  const fields = {
    firstName: clean(form.get("firstName"), 100),
    lastName: clean(form.get("lastName"), 100),
    email: clean(form.get("email"), 200),
    code: clean(form.get("code"), 8),
    phone: clean(form.get("phone"), 30),
    subject: clean(form.get("subject"), 200),
    message: clean(form.get("message"), 5000),
  };
  if (!fields.firstName || !isEmail(fields.email) || !fields.message) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const result = await deliver("contact", fields);
  return result.ok
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ ok: false, error: result.error }, { status: result.status });
}
