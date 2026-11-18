import { NextResponse } from "next/server";
import { clean, deliver, isEmail } from "@/lib/forms";

export async function POST(request: Request) {
  const form = await request.formData();
  if (clean(form.get("company"))) return NextResponse.json({ ok: true }); // honeypot

  const email = clean(form.get("email"), 200);
  if (!isEmail(email)) return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });

  const result = await deliver("newsletter", { email });
  return result.ok
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ ok: false, error: result.error }, { status: result.status });
}
