/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jersey-15": ["Jersey 15", 'serif']
    }
    },
  },
  plugins: [],
}

