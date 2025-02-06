import { FieldSpec } from "../formRoot/FormSpec"

export function Field({ fieldSpec }: { fieldSpec: FieldSpec }) {
  return <div data-field={fieldSpec.name} />
}
