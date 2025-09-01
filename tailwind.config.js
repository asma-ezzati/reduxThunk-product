/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "#FF8600",
      white: "#F1F2F6",
      purple: "#AEB8FE",
      blue: "#758BFD",
      indigo: "#27187E",
    },
    fontFamily: {
      Nunito: ["Nunito"],
    },
    extend: {},
  },
  plugins: [],
};
