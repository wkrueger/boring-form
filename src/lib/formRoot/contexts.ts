import { createContext } from "react"
import { FormRoot } from "./useCreateFormRoot"

export const formRootContext = createContext<FormRoot | null>(null)
