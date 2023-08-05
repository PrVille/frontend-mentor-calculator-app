export enum ThemeName {
  primary = "PRIMARY",
  secondary = "SECONDARY",
  tertiary = "TERTIARY",
}

export type ThemeNameStrings = keyof typeof ThemeName

export interface Theme {
  colors: {
    backgrounds: {
      main: string
      toggle: string
      keypad: string
      screen: string
    }
    keys: {
      main: {
        background: string
        shadow: string
      }
      delAndReset: {
        background: string
        shadow: string
      }
      equals: {
        background: string
        shadow: string
      }
    }
    texts: {
      main: string
      screen: string
      equalsKey: string
      header: string
    }
  }
}
