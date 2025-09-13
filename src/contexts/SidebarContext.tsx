import { createContext, useContext } from "react";

export interface AsideContextType {
  asideOpened: boolean;
  toggleAsideOpened: () => void;
}

export const SidebarContext = createContext<AsideContextType | undefined>(
  undefined
);

export const useAside = (): AsideContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useAside must be used within a SidebarProvider");
  }
  return context;
};
