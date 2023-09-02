/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,astro,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}