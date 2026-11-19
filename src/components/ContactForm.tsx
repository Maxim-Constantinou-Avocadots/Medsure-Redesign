import { formIds } from "@/content/form-ids";
import { MedsureForm } from "./Form";

export function ContactForm({ specialty }: { specialty?: string }) {
  return <MedsureForm formId={formIds.contact} enquirySpecialty={specialty} />;
}
