/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42934a',
        seconday: '#50b058',
        paleGreen: '#6dbd74',
        greenbg: '#e8f4ea',
      }
    },
  },
  plugins: [],
}
