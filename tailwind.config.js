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
          primary: "#2C3A8C",
          "primary-dark": "#1a2660",
          secondary: "#3E3A36",
          accent: "#FBB03B",
          yellow: "#E8BD63",
          cream: "#FDF8EE",
          green: "#006837",
        }
      },
      fontFamily: {
        main: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
