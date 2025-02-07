import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { FieldSpec } from "@/lib/formRoot/FormSpec"
import { useContext } from "use-context-selector"
import { hookFormContext } from "../ShadcnGridTemplate/contexts"

export function Text({ fieldSpec }: { fieldSpec: FieldSpec }) {
  const { name, label, description } = fieldSpec
  const hookForm = useContext(hookFormContext)
  if (!hookForm) {
    return null
  }
  return (
    <FormField
      control={hookForm.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          {Boolean(description) && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
