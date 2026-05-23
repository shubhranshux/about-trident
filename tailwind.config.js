/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-brand-(green|red|orange|brown|yellow|blue|sky)/,
      variants: ['hover', 'group-hover'],
    },
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2C3A8C',
        'primary-rose': '#2C3A8C',
        'secondary': '#A59381',
        'secondary-beige': '#A59381',
        'bg-light': '#EFE7DF',
        'bg-soft': '#F5EEEC',
        'soft': '#EAE0D5',
        'text-dark': '#3E3A36',
        'accent-red': '#EF4444',
        'accent-green': '#22C55E',
        'inst-pink': '#FDF2F0',
        'inst-blue': '#2C3A8C',
        'inst-green': '#006738',
        'inst-yellow': '#E8BD63',
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
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        main: ["DM Sans", "sans-serif"],
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
