/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      yellowish: "#FCC822",
      // yellowish: "#2288fc",
      dark: "#333333",
      lightgray: "#ECECE8",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
