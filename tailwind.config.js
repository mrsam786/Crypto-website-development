/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      colors: {
        back_color: "#111113",
        text_color:"#FFFFFF",
        purple_button: "#E00B7C"
      },
      fontFamily: {
        space: ["Space Grotesk"],
        poppins: ['Poppins'],
        Space_Grotesk: ['Space Grotesk', 'sans-serif'],
      },
      screens: {
        nav: {
          max: "300px",
        },
        mobile: {
          max: "768px",
        },
        tablet: {
          max: "1024px",
        },
        screen: {
          max: "1280px",
        },
        desktop: {
          max: "1536px",
        },
      },
      animation: {
        float: "float 2s ease-in-out infinite",
        float_slow: "float 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-30px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};