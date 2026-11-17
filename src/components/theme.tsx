"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = { theme: Theme; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const nextTheme = stored === "dark" || stored === "light" ? stored : preferred;
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme((current) => {
      const nextTheme = current === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = nextTheme;
      window.localStorage.setItem("portfolio-theme", nextTheme);
      return nextTheme;
    }),
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function ThemeToggle() {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const isDark = context.theme === "dark";
  return <button className="theme-toggle" type="button" onClick={context.toggleTheme} aria-label={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}><span className="theme-toggle-icon" aria-hidden="true">{isDark ? "☼" : "◐"}</span><span className="theme-toggle-label">{isDark ? "Claro" : "Oscuro"}</span></button>;
}
