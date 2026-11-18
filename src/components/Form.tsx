"use client";

import Link from "next/link";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import { company, routes } from "@/content/company";
import { ArrowIcon } from "./icons";
import { cx } from "@/lib/motion";
import styles from "./Form.module.css";

type Status = "idle" | "sending" | "sent" | "error" | "offline";

/** Shared form shell: posts multipart data to `action`, handles states, honeypot and messages. */
export function FormShell({
  action,
  submitLabel,
  successTitle,
  successBody,
  children,
  tone = "light",
  inline,
}: {
  action: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  children: ReactNode;
  tone?: "light" | "dark";
  inline?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    try {
      const res = await fetch(action, { method: "POST", body: new FormData(form) });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus(res.status === 503 ? "offline" : "error");
      }
    } catch {
      setStatus("offline");
    }
  }

  if (status === "sent") {
    return (
      <div className={cx(styles.done, tone === "dark" && styles.doneDark)} role="status">
        <div className={styles.doneMark} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 className={styles.doneTitle}>{successTitle}</h3>
        <p className={styles.doneBody}>{successBody}</p>
      </div>
    );
  }

  return (
    <form className={cx(styles.form, inline && styles.inline, tone === "dark" && styles.dark)} onSubmit={onSubmit} noValidate={false}>
      {/* Honeypot: hidden from people, tempting for bots */}
      <div className={styles.hp} aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {children}
      <div className={styles.footer}>
        <button type="submit" className={cx("btn", tone === "dark" && "btn--light", styles.submit)} disabled={status === "sending"}>
          <span>{status === "sending" ? "Sending…" : submitLabel}</span>
          <ArrowIcon className="btn__arrow" />
        </button>
        {!inline && (
          <p className={styles.note}>
            We use your details only to respond to you. See our <Link href={routes.privacy} className="ul">Privacy Policy</Link>.
          </p>
        )}
      </div>
      {(status === "error" || status === "offline") && (
        <p className={styles.error} role="alert">
          {status === "offline"
            ? "Online messages aren't available just yet. "
            : "Something went wrong sending your message. "}
          Please email <a href={`mailto:${company.email}`} className="ul">{company.email}</a> or call{" "}
          <a href={company.phoneHref} className="ul">{company.phone}</a>.
        </p>
      )}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  defaultValue?: string;
  span?: 1 | 2;
  className?: string;
};

export function Field({ label, name, type = "text", required, autoComplete, placeholder, defaultValue, span = 1, className }: FieldProps) {
  const id = useId();
  return (
    <div className={cx(styles.field, span === 2 && styles.span2, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={styles.input}
      />
    </div>
  );
}

export function TextArea({ label, name, required, span = 2 }: Omit<FieldProps, "type">) {
  const id = useId();
  return (
    <div className={cx(styles.field, span === 2 && styles.span2)}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <textarea id={id} name={name} required={required} rows={5} className={cx(styles.input, styles.textarea)} />
    </div>
  );
}

export function Select({ label, name, options, required, span = 2 }: Omit<FieldProps, "type"> & { options: string[] }) {
  const id = useId();
  return (
    <div className={cx(styles.field, span === 2 && styles.span2)}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <select id={id} name={name} required={required} className={cx(styles.input, styles.select)} defaultValue="">
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

/** Country calling code + phone number on one row (mirrors the live site's "Code" + "Phone"). */
export function PhoneField({ required }: { required?: boolean }) {
  const codeId = useId();
  const phoneId = useId();
  return (
    <div className={cx(styles.field, styles.span2)}>
      <span className={styles.label} id={`${phoneId}-l`}>
        Phone{required && <span aria-hidden="true"> *</span>}
      </span>
      <div className={styles.phone} role="group" aria-labelledby={`${phoneId}-l`}>
        <label htmlFor={codeId} className="sr-only">Country code</label>
        <input id={codeId} name="code" defaultValue="+357" autoComplete="tel-country-code" className={cx(styles.input, styles.code)} />
        <label htmlFor={phoneId} className="sr-only">Phone number</label>
        <input id={phoneId} name="phone" type="tel" required={required} autoComplete="tel-national" className={styles.input} />
      </div>
    </div>
  );
}
