import { createContext, Dispatch, ReactNode, useContext, useState } from "react";
import { ContaDto } from "../../models/Conta";

interface ContaContext {
  currentConta: ContaDto | undefined,
  haveConta: () => boolean,
  setConta: Dispatch<ContaDto>
}

const CurrentContaContext = createContext<ContaContext>({} as ContaContext);

export default function ContaProvider({ children }: { children: ReactNode }) {
  const [currentConta, setConta] = useState<ContaDto>();
  const haveConta = () => !!currentConta
  return (
    <CurrentContaContext.Provider
      value={{
        currentConta,
        setConta,
        haveConta
      }}>
      {children}
    </CurrentContaContext.Provider>
  )
}

export function useContaProvider() {
  return useContext(CurrentContaContext);
}
