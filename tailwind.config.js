/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: "transparent",
        // white:"#f1f1f1",
        backgroundAccent: "#101010",
      },
    },
  },
  plugins: [],
}

