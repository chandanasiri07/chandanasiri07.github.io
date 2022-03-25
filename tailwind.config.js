module.exports = {
  content: ["./*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    extend: {
      colors: {
        "accent-dark": "#273649",
        "accent-light2": "#fefeff",
        "accent-violet": "#4D13D1",
        "accent-light-violet": "#E0E7FF",
        "accent-green": "#01C459",
        "accent-light": "#FBF8F3",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,

      screens: {
        lg: "1024px",
        xl: "1440px",
        "2xl": "1440px",
      },
    },
    // borderWidth: {
    //   2: "2px",
    //   "3px": "3px",
    // },
  },
  plugins: [],
};
