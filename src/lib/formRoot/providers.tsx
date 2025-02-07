import { formRootContext } from "./contexts"
import { useCreateFormRoot, type FormRootArgs } from "./useCreateFormRoot"

export function FormRootProvider({
  children,
  ...args
}: { children: React.ReactNode } & FormRootArgs) {
  const formRoot = useCreateFormRoot(args)
  return <formRootContext.Provider value={formRoot}>{children}</formRootContext.Provider>
}
