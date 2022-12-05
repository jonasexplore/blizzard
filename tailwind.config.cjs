/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020203",
        foreground: "#15171B",
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
