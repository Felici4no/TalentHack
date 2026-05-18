/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D71920",
          offwhite: "#F3EFE7",
          black: "#151515",
          gray: {
            light: "#E8E1DA",
          },
          pink: {
            soft: "#F2D7D3",
          }
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
