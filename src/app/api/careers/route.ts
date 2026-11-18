import { NextResponse } from "next/server";
import { CV_TYPES, MAX_CV_BYTES, clean, deliver, isEmail } from "@/lib/forms";

export async function POST(request: Request) {
  const form = await request.formData();
  if (clean(form.get("company"))) return NextResponse.json({ ok: true }); // honeypot

  const fields = {
    firstName: clean(form.get("firstName"), 100),
    lastName: clean(form.get("lastName"), 100),
    email: clean(form.get("email"), 200),
    code: clean(form.get("code"), 8),
    phone: clean(form.get("phone"), 30),
    position: clean(form.get("position"), 100),
  };
  const cv = form.get("cv");
  const file = cv instanceof File && cv.size > 0 ? cv : null;

  if (!fields.firstName || !fields.lastName || !isEmail(fields.email) || !fields.phone) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  if (file && (file.size > MAX_CV_BYTES || !CV_TYPES.includes(file.type))) {
    return NextResponse.json({ ok: false, error: "invalid_file" }, { status: 400 });
  }

  const result = await deliver("careers", fields, file);
  return result.ok
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ ok: false, error: result.error }, { status: result.status });
}
