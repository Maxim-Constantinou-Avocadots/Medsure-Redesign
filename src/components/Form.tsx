import { useContext, useId, type FormEvent } from "react";
import { company, routes } from "@/content/company";
import { FORM_ERROR, useWixForm } from "@/hooks/forms/useWixForm";
import { cx } from "@/lib/motion";
import type { FormFieldDto } from "@/wix/forms/types";
import { FormSchema } from "./FormSchemaProvider";
import { ArrowIcon } from "./icons";
import styles from "./Form.module.css";

type FormState = ReturnType<typeof useWixForm>;

function FormField({ field, state }: { field: FormFieldDto; state: FormState }) {
  const id = useId();
  const error = state.errors[field.target];
  const props = {
    ...state.bind(field.target),
    id,
    disabled: field.readOnly,
    required: field.required,
    "aria-describedby": [field.description && `${id}-help`, error && `${id}-error`].filter(Boolean).join(" ") || undefined,
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
        {label}
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
      {field.description && <small id={`${id}-help`}>{field.description}</small>}
      {error && <p id={`${id}-error`} className={styles.error} role="alert">{error}</p>}
    </div>
  );
}

export function MedsureForm({ formId, inline = false }: { formId: string; inline?: boolean }) {
  const initialForm = useContext(FormSchema);
  const state = useWixForm(formId, { initialForm });
  const { form, errors, loading, closed, outcome, step } = state;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const response = await state.submit(event);
    if (!response || !response.url) return;
    window.location.assign(response.url);
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
      {fields.map((field) => <FormField key={field.target} field={field} state={state} />)}
      <div className={styles.footer}>
        {step > 0 && <button type="button" className="btn" onClick={state.previous}>{form.previousText || "Back"}</button>}
        <button type="submit" className={cx("btn", inline && "btn--light", styles.submit)} disabled={loading}>
          <span>{loading ? "Sending…" : hasNextStep ? form.nextText || "Continue" : form.submitText || "Submit"}</span>
          <ArrowIcon className="btn__arrow" />
        </button>
        {!inline && <p className={styles.note}>See how we handle your information in our <a href={routes.privacy} className="ul">Privacy Policy</a>.</p>}
      </div>
      {errors[FORM_ERROR] && <p className={styles.error} role="alert">{errors[FORM_ERROR]}</p>}
    </form>
  );
}
