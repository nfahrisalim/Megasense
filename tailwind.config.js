
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#015386",
        light: "#f0f5f9",
        accent: "#50bbf2",
        accentDark: "#53c2ba",
        gray: "#747474",
        primary: "#015386",
        secondary: "#50bbf2",
        tertiary: "#53c2ba",
      },
      fontFamily:{
        mr: ["Montserrat", "sans-serif"],
        in: ["Montserrat", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      animation:{
        roll: "roll 24s linear infinite"
      },
      keyframes:{
        roll:{
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(-100%)"}
        }
      },
      screens:{
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        xs: "480px"
        // @media (min-width: 480px){...}
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
