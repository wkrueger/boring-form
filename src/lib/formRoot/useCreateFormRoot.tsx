import { FormSpecNormalized } from "./FormSpec"

export type FormRoot = ReturnType<typeof useCreateFormRoot>
export type FormRootArgs = Parameters<typeof useCreateFormRoot>[0]

export function useCreateFormRoot({ formSpec }: { formSpec: FormSpecNormalized }) {
  return {
    formSpec,
  }
}
