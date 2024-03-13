/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'sign-in-background':'url("./assets/layered-waves-haikei (2).svg")',

      },
      colors:{
        transparent: "transparent",
        // white:"#f1f1f1",
        backgroundAccent: "#101010",
      },
    },
  },
  plugins: [],
}

