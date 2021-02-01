module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#77d9ab',
          200: '#61d29d',
          300: '#4acc8f',
          400: '#34c581',
          500: '#1dbf73',
          600: '#1aac68',
          700: '#17995c',
          800: '#148651',
          900: '#117345'
        },
        secondary: {
          100: '#788f99',
          200: '#627c88',
          300: '#4b6977',
          400: '#355766',
          500: '#1E4455',
          600: '#1b3d4d',
          700: '#183644',
          800: '#15303b',
          900: '#122933'
        },
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['active']
    }
  },
  plugins: [],
}
