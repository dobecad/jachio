/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        starPulse: 'starPulse 10s linear infinite',
      }
    },
  },
  plugins: [],
}

