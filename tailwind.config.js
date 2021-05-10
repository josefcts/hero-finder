module.exports = {
  purge: ['./components/**/*.tsx', './presentational/**/*.tsx', './pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: 'Lato-Regular, Lato-Black, Helvetica, Arial, sans-serif',
    },
    extend: {
      colors: {
      },
      spacing: {
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '96': '24rem',
        '100': '25rem',
        '102': '26rem',
        '128': '32rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '200': '50rem',
      },
      backgroundImage: {
        home: "url(/img/home/background.png)"
      },
      inset: {
        '-2': '-2.5rem',
      },
      keyframes: {
        fadeIn: {
          'from': { 'opacity': 0 },
          'to': { 'opacity': 1 }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
