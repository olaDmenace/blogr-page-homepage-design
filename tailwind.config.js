module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
