import { UseFormReturn } from "react-hook-form"
import { createContext } from "use-context-selector"

export const hookFormContext = createContext<UseFormReturn | null>(null)
