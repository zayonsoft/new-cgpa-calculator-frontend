"use client";
import { useEffect, useState } from "react";
import { SidebarContext } from "./SidebarContext";

type ProviderProps = {
  children: React.ReactNode;
};

export default function SidebarProvider({ children }: ProviderProps) {
  const [asideOpened, setAsideOpen] = useState<boolean>(false);

  function toggleAsideOpened() {
    setAsideOpen(!asideOpened);
  }

  return (
    <SidebarContext.Provider value={{ asideOpened, toggleAsideOpened }}>
      {children}
    </SidebarContext.Provider>
  );
}
