import { useState } from "react"
import { normalizeFormSpec, singleGroup } from "./lib/formRoot/FormSpec"
import { FormRootProvider } from "./lib/formRoot/providers"
import { ShadcnGridTemplate } from "./lib/renderer/ShadcnGridTemplate/ShadcnGridTemplate"

const formSpec = normalizeFormSpec(
  singleGroup({
    fields: [
      {
        name: "text",
        label: "Text",
        type: "text",
      },
    ],
  })
)

function App() {
  console.log("formSpec", { formSpec })
  const [formData, setFormData] = useState({})
  return (
    <FormRootProvider formSpec={formSpec} formData={formData}>
      <ShadcnGridTemplate />
    </FormRootProvider>
  )
}

export default App
