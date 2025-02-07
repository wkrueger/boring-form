import { createContext, useContextSelector } from "use-context-selector"
import { FormRoot } from "./useCreateFormRoot"

export const formRootContext = createContext<FormRoot | null>(null)

export function useReadFormRoot<Out>(selector: (i: FormRoot) => Out) {
  return useContextSelector(formRootContext as any, selector)
}
