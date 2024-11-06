/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        theme: {
          color: 'var(--theme-color)' ,
          pink: 'var(--theme-pink)',
          green: 'var(--theme-green)' ,
        }
      },
      backgroundColor: {
        brown: 'var(--theme-brown)',
        pink: 'var(--theme-pink)',
        green: 'var(--theme-green)',
        main: 'var(--theme-bg)'
      }
    },
  },
  plugins: [],
}

