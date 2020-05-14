const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.orange,
      },
    },
  },
  variants: {},
  plugins: [],
};
