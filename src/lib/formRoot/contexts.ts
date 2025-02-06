import { createContext } from "use-context-selector"
import { FormRoot } from "./useCreateFormRoot"

export const formRootContext = createContext<FormRoot | null>(null)
