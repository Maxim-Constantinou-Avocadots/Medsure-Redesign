import { formIds } from "@/content/form-ids";
import { MedsureForm } from "./Form";

export function NewsletterForm() {
  return <MedsureForm formId={formIds.newsletter} inline />;
}
