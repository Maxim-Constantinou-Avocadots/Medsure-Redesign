"use client";

import { useId, useState } from "react";
import { Field, FormShell, PhoneField, Select } from "./Form";
import { UploadIcon } from "./icons";
import styles from "./CareersForm.module.css";

export function CareersForm({ positions }: { positions: string[] }) {
  const id = useId();
  const [fileName, setFileName] = useState("");

  return (
    <FormShell
      action="/api/careers"
      submitLabel="Submit application"
      successTitle="Thank you for applying"
      successBody="We've received your details and will be in touch."
    >
      <Field label="First name" name="firstName" required autoComplete="given-name" />
      <Field label="Last name" name="lastName" required autoComplete="family-name" />
      <Field label="Email" name="email" type="email" required autoComplete="email" span={2} />
      <PhoneField required />
      <Select label="Position" name="position" options={[...positions, "Other"]} />
      <div className={styles.file}>
        <label htmlFor={id} className={styles.drop}>
          <UploadIcon />
          <span className={styles.dropText}>
            <strong>{fileName || "Attach your CV"}</strong>
            <span>PDF or Word, up to 5 MB</span>
          </span>
        </label>
        <input
          id={id}
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="sr-only"
          onChange={(e) => setFileName(e.currentTarget.files?.[0]?.name ?? "")}
        />
      </div>
    </FormShell>
  );
}
