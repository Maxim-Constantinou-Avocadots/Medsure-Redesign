"use client";

import { Field, FormShell } from "./Form";

export function NewsletterForm() {
  return (
    <FormShell
      action="/api/newsletter"
      submitLabel="Subscribe"
      successTitle="You're subscribed"
      successBody="Thank you for subscribing to the Medsure newsletter."
      tone="dark"
      inline
    >
      <Field label="Email" name="email" type="email" required autoComplete="email" />
    </FormShell>
  );
}
