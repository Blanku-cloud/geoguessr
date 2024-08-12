/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-width': 'max-width'
      },
      fontFamily: {
        titilliumWeb: ["Titillium Web", "sans-serif"]
      },
      colors: {
        'off-black': '#10101c',
        'landing-main': '#1A1A2E'
      },
      backgroundImage: {
        'hero': "url('./assets/hero.webp')",
        'landing-map': "url('./assets/map.webp')",
      },
    },
    plugins: [],
  }
}
