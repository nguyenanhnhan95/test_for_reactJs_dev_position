/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        skeletonLoading: {
          '0%': { backgroundColor: 'white' },
          '100%': { backgroundColor: 'red' },
        },
      },
      animation: {
        skeletonLoading: 'skeletonLoading 2s',
      },
    },
  },
  plugins: [],
}

