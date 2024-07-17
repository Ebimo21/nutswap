/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        refine : {
         "0%" : {
          transform: "translateY(1000px)",
          opacity: 0,
          },

          "100%" : {
            transform: "translateY(0)",
            opacity: 1,
          }
        },

       },
       
       animation: {
        "refine-slide-in": " refine 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",

       },

      backgroundImage: {
        "nustwap-bg": "url('/nustwap-bg.png')",
      },
      fontFamily: {
        'Urbanist': ["Urbanist"]
      }
    },

  },
  plugins: [],
}

