/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020203",
        primary: "#00AEFF",
        secundary: "#8F9199",
      },
      screens: {
        xs: "0px",
      },
    },
  },
  plugins: [],
};
