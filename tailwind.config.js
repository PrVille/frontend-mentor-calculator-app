/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /**
         * BACKGROUNDS
         */

        primaryMainBackground: "hsl(222, 26%, 31%)",
        primaryToggleBackground: "hsl(223, 31%, 20%)",
        primaryKeypadBackground: "hsl(223, 31%, 20%)",
        primaryScreenBackground: "hsl(224, 36%, 15%)", 

        secondaryMainBackground: "hsl(0, 0%, 90%)",
        secondaryToggleBackground: "hsl(0, 5%, 81%)",
        secondaryKeypadBackground: "hsl(0, 5%, 81%)",
        secondaryScreenBackground: "hsl(0, 0%, 93%)",

        tertiaryMainBackground: "hsl(268, 75%, 9%)",
        tertiaryToggleBackground: "hsl(268, 71%, 12%)",
        tertiaryKeypadBackground: "hsl(268, 71%, 12%)",
        tertiaryScreenBackground: "hsl(268, 71%, 12%)",

        /**
         * KEYS
         */

        primaryMainKeyBackground: "hsl(30, 25%, 89%)",
        primaryMainKeyShadow: "hsl(28, 16%, 65%)",
        primaryDelAndResetKeyBackground: "hsl(225, 21%, 49%)",
        primaryDelAndResetKeyShadow: "hsl(224, 28%, 35%)",
        primaryEqualsKeyBackground: "hsl(6, 63%, 50%)",
        primaryEqualsKeyShadow: "hsl(6, 70%, 34%)",

        secondaryMainKeyBackground: "hsl(45, 7%, 89%)",
        secondaryMainKeyShadow: "hsl(35, 11%, 61%)",
        secondaryDelAndResetKeyBackground: "hsl(185, 42%, 37%)",
        secondaryDelAndResetKeyShadow: "hsl(185, 58%, 25%)",
        secondaryEqualsKeyBackground: "hsl(25, 98%, 40%)",
        secondaryEqualsKeyShadow: "hsl(25, 99%, 27%)",

        tertiaryMainKeyBackground: "hsl(268, 47%, 21%)",
        tertiaryMainKeyShadow: "hsl(290, 70%, 36%)",
        tertiaryDelAndResetKeyBackground: "hsl(281, 89%, 26%)",
        tertiaryDelAndResetKeyShadow: "hsl(285, 91%, 52%)",
        tertiaryEqualsKeyBackground: "hsl(176, 100%, 44%)",
        tertiaryEqualsKeyShadow: "hsl(177, 92%, 70%)",

        /**
         * TEXTS
         */

        primaryMainText: "hsl(221, 14%, 31%)",
        secondaryMainText: "hsl(60, 10%, 19%)",
        tertiaryMainText: "hsl(52, 100%, 62%)",
        tertiarySecondaryText: "hsl(198, 20%, 13%)",
      },
      fontFamily: {
        leagueSpartan: ['"League Spartan"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
