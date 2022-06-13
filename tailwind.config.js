/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '880px',
      // => @media (min-width: 768px) { ... }

      'lg': '1180px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "primary": '#42934a',
        "secondary": '#50b058',
        "paleGreen": '#6dbd74',
        "greenbg": '#e8f4ea',
      }
    },
  },
  plugins: [],
}
