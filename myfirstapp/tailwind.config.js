/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  
  variants: {
    extend: {
     visibility: ['group-hover', 'focus'],
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}



