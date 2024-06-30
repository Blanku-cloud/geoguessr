/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        titilliumWeb: ["Titillium Web", "sans-serif"]
      },
      colors: {
        'off-black': '#10101c'
      },
    },
  },
  plugins: [],
}

