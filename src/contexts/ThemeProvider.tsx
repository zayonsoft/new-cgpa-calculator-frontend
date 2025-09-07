"use client";
import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "./ThemeContext";

type ProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("zayonsoft_theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("zayonsoft_theme", theme);
    console.log(theme);
  }, [theme]);

  function toggleTheme(): void {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
