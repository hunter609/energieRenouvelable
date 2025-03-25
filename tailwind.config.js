/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softGreen : "#f3fdf5",
        darkGreen: "#72ca96",

      },
    },
    fontFamily: {
      Quickand: ["Quicksand", "sans-serif"],
    }
  },
  plugins: [],
}

