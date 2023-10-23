/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'circular-thin': ['Circular Thin', 'sans-serif'],
        'circular-regular': ['Circular Regular', 'sans-serif'],
        'circular-black': ['Circular Black', 'sans-serif']
      },
      boxShadow: {
        '3xl': '0 4px 60px rgba(0,0,0,.5)'
      }
    }
  },
  plugins: []
}
