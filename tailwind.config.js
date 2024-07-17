/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the app directory./**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

