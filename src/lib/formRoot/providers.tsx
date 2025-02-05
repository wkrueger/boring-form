import { formRootContext } from "./contexts"
import type { FormRootArgs } from "./useCreateFormRoot"

export function FormRootProvider({
  children,
  ...args
}: { children: React.ReactNode } & FormRootArgs) {
  return <formRootContext.Provider value={args}>{children}</formRootContext.Provider>
}
