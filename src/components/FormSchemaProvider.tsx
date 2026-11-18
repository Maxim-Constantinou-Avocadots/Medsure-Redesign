import { createContext, type ReactNode } from "react";
import type { FormDto } from "@/wix/forms/types";

export const FormSchema = createContext<FormDto | undefined>(undefined);

export default function FormSchemaProvider({ form, children }: { form?: FormDto; children: ReactNode }) {
  return <FormSchema.Provider value={form}>{children}</FormSchema.Provider>;
}
