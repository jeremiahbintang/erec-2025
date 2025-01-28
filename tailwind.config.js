const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px'
    },
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
      '2.5xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '3rem',
      '5xl': '3.375rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    extend: {
      ringWidth: {
        '10': '10px',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      spacing: {
        '18': '4.5rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '60': '15rem',
        '67.5': '16.875rem',
        '80': '20rem',
        '100': '25rem',
        '105': '26.25rem',
        '112.5': '28.125rem',
        '120': '30rem',
        '128': '32rem',
        '135': '33.75rem',
        '140': '35rem',
        '154': '38.5rem',
        '160': '40rem',
        '200': '50rem',
        '240': '60rem'

      },
      colors: {
        'white': '#ffffff',
        'dark-slate-blue': '#353a50',
        'red': '#FF0000',
        'orange': '#FF8B00',
        'light-gray': '#e5e5e5',
        'very-light-gray': '#f4f4f4'
      },
    },
  },
  plugins: [
    flowbite.content(),
  ],
}

