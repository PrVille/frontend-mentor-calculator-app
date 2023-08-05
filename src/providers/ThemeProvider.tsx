import { createContext, useState } from "react"
import { Theme, ThemeName } from "../types"
import themes from "../themes"

interface ThemeContext {
  activeTheme: ThemeName
  toggleTheme: () => void
  themes: Record<ThemeName, Theme>
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeName>(
    (localStorage.getItem("theme") as ThemeName) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ThemeName.tertiary
        : ThemeName.primary)
  )

  const toggleTheme = () => {
    setActiveTheme((prevTheme) => {
      const newTheme =
        prevTheme === ThemeName.primary
          ? ThemeName.secondary
          : prevTheme === ThemeName.secondary
          ? ThemeName.tertiary
          : ThemeName.primary
      localStorage.setItem("theme", newTheme)
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ activeTheme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
