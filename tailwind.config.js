module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          '300': '#95BF47',
          '400': '#008060',
          '500': '#064A48',
        }
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
