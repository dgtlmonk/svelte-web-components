/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ["./index.html",'./src/*.{svelte,js,ts}'], // for unused CSS
}
