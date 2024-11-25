/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,tsx}",
    "./utils/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0a3d62',
      },
      zIndex: {
        9999: "9999",
      },
    },
  },
  plugins: [],
};
