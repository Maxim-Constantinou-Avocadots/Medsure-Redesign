"use client";

import { Field, FormShell, PhoneField, TextArea } from "./Form";

/** One contact form, used on the homepage and the Contact page (fields from both live forms). */
export function ContactForm() {
  return (
    <FormShell
      action="/api/contact"
      submitLabel="Send message"
      successTitle="Thank you — we've received your message"
      successBody="Our team will get back to you shortly."
    >
      <Field label="First name" name="firstName" required autoComplete="given-name" />
      <Field label="Last name" name="lastName" autoComplete="family-name" />
      <Field label="Email" name="email" type="email" required autoComplete="email" span={2} />
      <PhoneField />
      <Field label="Subject" name="subject" span={2} />
      <TextArea label="Message" name="message" required />
    </FormShell>
  );
}
