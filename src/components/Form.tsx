import { useContext, useId, useState, type FormEvent } from "react";
import { formIds } from "@/content/form-ids";
import { company, routes } from "@/content/company";
import { FORM_ERROR, useWixForm } from "@/hooks/forms/useWixForm";
import { cx } from "@/lib/motion";
import type { FormFieldDto } from "@/wix/forms/types";
import { FormSchema } from "./FormSchemaProvider";
import { ArrowIcon } from "./icons";
import styles from "./Form.module.css";

type FormState = ReturnType<typeof useWixForm>;

function FormField({ field, state, enquiry }: { field: FormFieldDto; state: FormState; enquiry: boolean }) {
  const id = useId();
  const isMessage = enquiry && field.control === "textarea" && field.label.trim().toLowerCase() === "message";
  const help = field.description || (isMessage ? "Tell us your profession and what you’d like to discuss." : "");
  const error = state.errors[field.target];
  const errorText = error && isMessage && !String(state.values[field.target] ?? "").trim()
    ? "Enter a message about your enquiry."
    : error;
  const props = {
    ...state.bind(field.target),
    id,
    disabled: field.readOnly,
    required: field.required,
    "aria-describedby": [help && `${id}-help`, errorText && `${id}-error`].filter(Boolean).join(" ") || undefined,
  };
  const { control, label, required, showLabel } = field;
  const indicator = state.form?.requiredIndicator;
  const requiredText = required && indicator !== "NONE" ? (indicator === "TEXT" ? " (Required)" : " *") : "";
  const inputClass = cx(styles.input, control === "select" && styles.select);
  const isName = field.identifier === "CONTACTS_FIRST_NAME" || field.identifier === "CONTACTS_LAST_NAME";
  const wide = !isName && control !== "checkbox";
  const autoComplete = control === "email" ? "email" : control === "phone" ? "tel" :
    field.identifier === "CONTACTS_FIRST_NAME" ? "given-name" :
    field.identifier === "CONTACTS_LAST_NAME" ? "family-name" : undefined;

  return (
    <div className={cx(styles.field, wide && styles.span2)}>
      <label className={showLabel ? styles.label : "sr-only"} htmlFor={id}>
        {state.form?.requiredIndicatorBefore && <span aria-hidden="true">{requiredText} </span>}
        {label}{enquiry && !required && !field.readOnly && " (optional)"}
        {!state.form?.requiredIndicatorBefore && <span aria-hidden="true">{requiredText}</span>}
      </label>
      {control === "textarea" ? (
        <textarea {...props} rows={5} placeholder={field.placeholder} className={cx(inputClass, styles.textarea)} />
      ) : control === "select" ? (
        <select {...props} className={inputClass}>
          <option value="">{field.placeholder ?? "Select…"}</option>
          {field.choices.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
        </select>
      ) : control === "checkbox" ? (
        <input
          {...props}
          type="checkbox"
          value="true"
          checked={state.values[field.target] === true}
          onChange={(event) => state.setValues((values) => ({ ...values, [field.target]: event.target.checked }))}
        />
      ) : control === "file" ? (
        <input
          {...props}
          type="file"
          value={undefined}
          className={inputClass}
          accept={field.validation.accept}
          multiple={(field.validation.fileLimit ?? 1) > 1}
          onChange={(event) => {
            const files = Array.from(event.currentTarget.files ?? []);
            state.setValues((values) => ({ ...values, [field.target]: files }));
          }}
        />
      ) : (
        <input
          {...props}
          type={control === "phone" ? "tel" : control}
          autoComplete={autoComplete}
          placeholder={field.placeholder ?? (control === "phone" && field.phoneCountry === "CY" ? "+357" : undefined)}
          className={inputClass}
        />
      )}
      {help && <small id={`${id}-help`}>{help}</small>}
      {errorText && <p id={`${id}-error`} className={styles.error} role="alert">{errorText}</p>}
    </div>
  );
}

export function MedsureForm({ formId, inline = false, enquirySpecialty }: { formId: string; inline?: boolean; enquirySpecialty?: string }) {
  const initialForm = useContext(FormSchema);
  const enquiry = formId === formIds.contact;
  const [attempted, setAttempted] = useState(false);
  const state = useWixForm(formId, {
    initialForm,
    prefill: enquiry && enquirySpecialty ? (fields) => {
      const subject = fields.find((field) => field.control === "text" && !field.hidden && !field.readOnly &&
        (field.target.startsWith("subject_") || field.label.trim().toLowerCase() === "subject"));
      return subject ? { [subject.target]: enquirySpecialty } : {};
    } : undefined,
  });
  const { form, errors, loading, closed, outcome, step } = state;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const element = event.currentTarget;
    const response = await state.submit(event);
    if (!response) {
      if (enquiry) {
        setAttempted(true);
        requestAnimationFrame(() => {
          const invalid = element.querySelector<HTMLElement>('[aria-invalid="true"]:not(:disabled), [data-form-error]');
          if (invalid) {
            invalid.focus({ preventScroll: true });
            invalid.scrollIntoView({ block: "center" });
          }
        });
      }
      return;
    }
    setAttempted(false);
    if (response.url) window.location.assign(response.url);
  }

  if (outcome) {
    return (
      <div className={cx(styles.done, inline && styles.doneDark)} role="status">
        {(outcome.message ?? "Thank you. Your submission was received.").split("\n").map((line, index) => (
          <p key={index} className={styles.doneBody}>{line}</p>
        ))}
      </div>
    );
  }

  if (closed) return <p role="status">{form?.disabledMessage || "This form is no longer accepting submissions."}</p>;
  if (!form) {
    return errors[FORM_ERROR] ? (
      <p className={styles.error} role="alert">
        {errors[FORM_ERROR]} Please email <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    ) : <p role="status">Loading form…</p>;
  }

  const activeStep = form.steps[step];
  const hasNextStep = step < form.steps.length - 1;
  const fields = form.fields.filter((field) => !field.hidden && (!activeStep || field.stepId === activeStep.id));

  return (
    <form className={cx(styles.form, inline && styles.inline, inline && styles.dark)} noValidate onSubmit={hasNextStep ? state.next : onSubmit}>
      {form.steps.length > 1 && <p className={styles.span2}>Step {step + 1} of {form.steps.length}{activeStep?.name && ` · ${activeStep.name}`}</p>}
      {enquiry && attempted && fields.some((field) => errors[field.target]) && (
        <p className={cx(styles.span2, styles.error)} role="status">Check the highlighted fields and try again.</p>
      )}
      {fields.map((field) => <FormField key={field.target} field={field} state={state} enquiry={enquiry} />)}
      <div className={styles.footer}>
        {step > 0 && <button type="button" className="btn" onClick={state.previous}>{form.previousText || "Back"}</button>}
        <button type="submit" className={cx("btn", inline && "btn--light", styles.submit)} disabled={loading}>
          <span>{loading ? "Sending…" : hasNextStep ? form.nextText || "Continue" : enquiry ? "Send enquiry" : form.submitText || "Submit"}</span>
          <ArrowIcon className="btn__arrow" />
        </button>
        {!inline && <p className={styles.note}>See how we handle your information in our <a href={routes.privacy} className="ul">Privacy Policy</a>.</p>}
      </div>
      {errors[FORM_ERROR] && <p className={styles.error} role="alert" tabIndex={-1} data-form-error>{errors[FORM_ERROR]}</p>}
    </form>
  );
}
