/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softGreen : "#f3fdf5",
        mediumGreen: "#f0f9f0",
        darkGreen: "#66c486",
        // darkGreen: "#72ca96",

      },
      animation: {
        'float': 'float 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
    fontFamily: {
      Quickand: ["Quicksand", "sans-serif"],
    }, 
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
    
  },
  plugins: [],
}

