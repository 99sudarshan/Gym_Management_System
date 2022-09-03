module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    screens: {
      'exsm': '390px',
      'xxs': '420px',
      'xsm': '450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      '3xl': '1536px',

    },
    extend: {
      fontFamily: {
        lato: ['Lato', "sans-serif"],
        meri: ['Merriweather', "serif"],
      },

     
      colors: {
        greenN: {
          300: "#008f56",
          400: "#1bbc9b",
          500: "#004f2d",
          600: "#00dd6e",
          700: "#00783c",
          800: "#2e7760",
          900: "#153b2e",

        },
        blueE: {
          400: "#00aef1",
          500: "#005e84"
        },

        orangeE: {
          100: "#e55837",
          200: "#7e2f1d",
          300: "#db7711",
          400: "#703b08",
          500: "#ce4d2f",
          600: "#642516",
        },

        redD: {
          100: "#cc2b55",
          200: "#5e1528",
          200: "#5e1527",

        },

      },

      outlineOffset: {
        3: '-4px',
      },
    },

  },

  plugins: [require('tw-elements/dist/plugin')],
}
