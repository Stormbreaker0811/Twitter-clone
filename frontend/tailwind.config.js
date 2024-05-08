/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-poppins": ["Poppins", "sans-serif"],
        "font-roboto": ["Roboto" , "sans-serif"]
      },
      colors:{

      },
      boxShadow:{
        "navbar": "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "tweets": "shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      }
    },
  },
  plugins: [],
}

