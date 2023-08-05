import { Theme, ThemeName } from "./types"

const themes: Record<ThemeName, Theme> = {
  [ThemeName.primary]: {
    colors: {
      backgrounds: {
        main: "bg-primaryMainBackground",
        toggle: "bg-primaryToggleBackground",
        keypad: "bg-primaryKeypadBackground",
        screen: "bg-primaryScreenBackground",
      },
      keys: {
        main: {
          background: "bg-primaryMainKeyBackground",
          shadow: "shadow-primaryMainKeyShadow",
        },
        delAndReset: {
          background: "bg-primaryDelAndResetKeyBackground",
          shadow: "shadow-primaryDelAndResetKeyShadow",
        },
        equals: {
          background: "bg-primaryEqualsKeyBackground",
          shadow: "shadow-primaryEqualsKeyShadow",
        },
      },
      texts: {
        main: "text-primaryMainText",
        screen: "text-white",
        equalsKey: "text-white",
        header: "text-white",
      },
    },
  },
  [ThemeName.secondary]: {
    colors: {
      backgrounds: {
        main: "bg-secondaryMainBackground",
        toggle: "bg-secondaryToggleBackground",
        keypad: "bg-secondaryKeypadBackground",
        screen: "bg-secondaryScreenBackground",
      },
      keys: {
        main: {
          background: "bg-secondaryMainKeyBackground",
          shadow: "shadow-secondaryMainKeyShadow",
        },
        delAndReset: {
          background: "bg-secondaryDelAndResetKeyBackground",
          shadow: "shadow-secondaryDelAndResetKeyShadow",
        },
        equals: {
          background: "bg-secondaryEqualsKeyBackground",
          shadow: "shadow-secondaryEqualsKeyShadow",
        },
      },
      texts: {
        main: "text-secondaryMainText",
        screen: "text-secondaryMainText",
        equalsKey: "text-white",
        header: "text-secondaryMainText",
      },
    },
  },
  [ThemeName.tertiary]: {
    colors: {
      backgrounds: {
        main: "bg-tertiaryMainBackground",
        toggle: "bg-tertiaryToggleBackground",
        keypad: "bg-tertiaryKeypadBackground",
        screen: "bg-tertiaryScreenBackground",
      },
      keys: {
        main: {
          background: "bg-tertiaryMainKeyBackground",
          shadow: "shadow-tertiaryMainKeyShadow",
        },
        delAndReset: {
          background: "bg-tertiaryDelAndResetKeyBackground",
          shadow: "shadow-tertiaryDelAndResetKeyShadow",
        },
        equals: {
          background: "bg-tertiaryEqualsKeyBackground",
          shadow: "shadow-tertiaryEqualsKeyShadow",
        },
      },
      texts: {
        main: "text-tertiaryMainText",
        screen: "text-tertiaryMainText",
        equalsKey: "text-tertiarySecondaryText",
        header: "text-tertiaryMainText",
      },
    },
  },
}

export default themes
