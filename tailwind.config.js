/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      yellowish: "#FCC822",
      // yellowish: "#2288fc",
      // yellowish: "#22fc76",
      dark: "#333333",
      lightgray: "#ECECE8",
      background: "#DBDEE5",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
