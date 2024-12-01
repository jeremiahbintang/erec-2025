/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'over': '150% auto'
    },
    colors: {
      'white': '#ffffff',
      'dark-slate-blue': '#353a50',
      'red': '#FF0000',
      'orange': '#FF8B00',
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
      '5xl': '3.375rem',
      '7xl': '5rem'
    },
    extend: {},
  },
  plugins: [],
}

