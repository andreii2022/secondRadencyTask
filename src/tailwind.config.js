module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#0e191a',
        secondary: '#7ebdc2',
        dark: '#231f20',
        azure: 'azure',
      },
      fontFamily: {
        custom: ['Poiret One', 'Arial', 'Helvetica', 'sans-serif'],
      },
      extend: {
        gridTemplateAreas: {
          'app-layout': '"header" "main-content" "footer"',
        },
      },
      boxShadow: {
        custom: '0 2px 4px rgba(0, 0, 0, 0.3)',
      },
      transform: {
        'scale-102': 'scale(1.02)',
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  variants: {},
  plugins: [],
};
