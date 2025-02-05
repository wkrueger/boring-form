import { schema, normalize as _normalize } from "normalizr"

export interface FormSpec {
  options: object
  tabs: {
    options: object
    name: string
    label: string
    fields: {
      type: string
      name: string
      label?: string
      description?: string
      options?: object
      layout?: { width: string } & object
    }[]
  }[]
}

export type TabSpec = FormSpec["tabs"][number]

export type FieldSpec = TabSpec["fields"][number]

export interface FormSpecNormalized {
  Form: Record<string, FormSpec>
  Tab: Record<string, TabSpec>
  Field: Record<string, FieldSpec>
}

export const normalizerSchema = new schema.Entity("Form", {
  tabs: [new schema.Entity("Tab", { fields: [new schema.Entity("Field")] })],
})

export function normalizeFormSpec(formSpec: FormSpec) {
  return _normalize(formSpec, normalizerSchema)
}
