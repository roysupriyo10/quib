import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EDF0F7",
          100: "#E3E9F3",
          200: "#C6D1E6",
          300: "#476CAD",
          400: "#40619C",
          500: "#39568A",
          600: "#355182",
          700: "#2B4168",
          800: "#20314E",
          900: "#19263D",
        },
        orange: {
          50: "#FFF0E6",
          100: "#FFE9D9",
          200: "#FFD1B1",
          300: "#FF6C02",
          400: "#E66102",
          500: "#CC5602",
          600: "#BF5102",
          700: "#994101",
          800: "#733101",
          900: "#592601",
        },
        gray: {
          25: "#FDFDFD",
          50: "#F1F1F1",
          100: "#E8E8E8",
          200: "#DDDDDD",
          300: "#C4C4C4",
          400: "#B8B8B8",
          500: "#909090",
          600: "#5A5A5A",
          700: "#1B1B1B",
          800: "#181818",
          900: "#161616",
          dark: "#141414",
          1000: "#090909",
        },
        "yellow-orange": {
          100: "#FEF4E6",
          200: "#FDEFD9",
          300: "#FBDDB1",
          400: "#F29203",
          500: "#DA8303",
          600: "#C27502",
          700: "#B66E02",
          800: "#915802",
          900: "#6D4201",
          1000: "#553301",
        },
        yellow: {
          50: "#F7F5F2",
          100: "#FFFCF2",
          200: "#FFFBEB",
          300: "#FFF6D6",
          400: "#FFE27C",
          500: "#E6CB70",
          600: "#CCB563",
          700: "#BFAA5D",
          800: "#99884A",
          900: "#736638",
          1000: "#594F2B",
        },
        error: {
          50: '#FEF3F2',
          100: '#FFE3E1',
          200: '#FFCCC8',
          300: '#FFA9A2',
          400: '#FC776D',
          500: '#F44C3F',
          600: '#E33629',
          700: '#BE2317',
          800: '#9D2017',
          900: '#82211A',
          950: '#470C08'
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;

export default config;
