/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmserif: ["DM Serif Display", "serif"],
      },
      colors: {
      primary: "#8B5CF6",
    },
    },
  },
  plugins: [],
};
