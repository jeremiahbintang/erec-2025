const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'over': '150% auto'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Crimson Text', 'serif'],
    },
    fontSize: {
      'xs': '0.75rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '3rem',
      '5xl': '3.375rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    extend: {
      maxWidth: {
        '8xl': '85rem',
      },
      spacing: {
        '140': '35rem',
      },
      colors: {
        'white': '#ffffff',
        'dark-slate-blue': '#353a50',
        'red': '#FF0000',
        'orange': '#FF8B00',
      },
    },
  },
  plugins: [
    flowbite.content(),
  ],
}

