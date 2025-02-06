import { schema, normalize as _normalize } from "normalizr"

export interface FormSpec {
  options?: object
  id?: string | number
  tabs: {
    options?: object
    name: string
    label: string
    groups: {
      options?: object
      name: string
      label?: string
      fields: {
        type: string
        name: string
        label?: string
        description?: string
        options?: object
        layout?: { width: string } & object
      }[]
    }[]
  }[]
}

export type FormSpec2 = Omit<FormSpec, "tabs"> & { tabs: string[] }

export type TabSpec = FormSpec["tabs"][number]
export type TabSpecNormalized = Omit<TabSpec, "groups"> & { groups: string[] }

export type GroupSpec = TabSpec["groups"][number]
export type GroupSpecNormalized = Omit<GroupSpec, "fields"> & { fields: string[] }

export type FieldSpec = GroupSpec["fields"][number]

export interface FormSpecNormalized {
  Form: Record<string, FormSpec2>
  Tab: Record<string, TabSpecNormalized>
  Group: Record<string, GroupSpecNormalized>
  Field: Record<string, FieldSpec>
}

export const normalizerSchema = new schema.Entity(
  "Form",
  {
    tabs: [
      new schema.Entity(
        "Tab",
        {
          groups: [
            new schema.Entity(
              "Group",
              {
                fields: [new schema.Entity("Field", {}, { idAttribute: "name" })],
              },
              { idAttribute: "name" }
            ),
          ],
        },
        { idAttribute: "name" }
      ),
    ],
  },
  {}
)

export function normalizeFormSpec(formSpec: FormSpec): FormSpecNormalized {
  const norm = _normalize(formSpec, normalizerSchema)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return norm.entities as any
}

export function singleGroup(args: { groupLabel?: string; fields: FieldSpec[] }) {
  return {
    tabs: [
      {
        label: "",
        name: "main",
        groups: [
          {
            name: "main",
            label: args.groupLabel,
            fields: args.fields,
          },
        ],
      },
    ],
  } as FormSpec
}
