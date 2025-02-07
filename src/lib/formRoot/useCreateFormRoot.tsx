import { useCallback, useMemo } from "react"
import { FormSpecNormalized } from "./FormSpec"
import { Text } from "../renderer/ShadcnFields/Text"

export type FormRoot = ReturnType<typeof useCreateFormRoot>
export type FormRootArgs = Parameters<typeof useCreateFormRoot>[0]

export function useCreateFormRoot({
  formSpec,
  formData,
}: {
  formSpec: FormSpecNormalized
  formData: Record<string, any>
  onFormDataChange?: (ev: any) => void
}) {
  const Fields = useMemo(() => {
    return {
      text: Text,
    }
  }, [])
  return {
    formSpec,
    formData,
    Fields,
  }
}
