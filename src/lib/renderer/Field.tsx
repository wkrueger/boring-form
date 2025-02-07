import { useReadFormRoot } from "../formRoot/contexts"
import { FieldSpec } from "../formRoot/FormSpec"
import { JSX, ReactElement } from "react"

interface FieldComponent {
  (props: { fieldSpec: FieldSpec }): JSX.Element | null
}

export function Field({ fieldSpec }: { fieldSpec: FieldSpec }) {
  const Fields: Record<string, FieldComponent> = useReadFormRoot((i) => {
    return i.Fields
  })
  const Component = Fields[fieldSpec.type]

  return (
    <div data-field={fieldSpec.name}>
      {Component ? (
        <Component fieldSpec={fieldSpec} />
      ) : (
        <span>Component {fieldSpec.type} not declared.</span>
      )}
    </div>
  )
}
