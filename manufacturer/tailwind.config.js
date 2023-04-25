module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        lobster: ["Lobster", "cursive"]
      }
    },
  },
  daisyui: {
    // themes: ["light"],
    themes: [
      {
        mytheme: {
          "primary": "#FFD54C",
          "secondary": "#333333",
          "accent": "#FD7B50",
          "neutral": "#F0F0F0",
          "info": "#F3F3F3",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}