import { createContext, Dispatch, ReactNode, useContext, useState } from "react"

interface ContaDialogContext {
  open: boolean,
  setOpen: Dispatch<boolean>
}

const CurrentContaDialogContext = createContext<ContaDialogContext>({} as ContaDialogContext)

export default function ContaDialogProvider({ children, initOpen }: { children: ReactNode, initOpen: boolean }) {
  const [open, setOpen] = useState(initOpen);

  return (
    <CurrentContaDialogContext.Provider
      value={{
        open,
        setOpen
      }}
    >
      {children}
    </CurrentContaDialogContext.Provider>
  )
}

export function useContaDialog() {
  return useContext(CurrentContaDialogContext);
}
