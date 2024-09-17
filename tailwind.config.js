const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  purge: ["./index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [animate],
};
