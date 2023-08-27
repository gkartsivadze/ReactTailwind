/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns: {
        'adj': 'min-content 1fr',
        'xxl': '25rem'
      },
      maxWidth: {
        'ext': '2.5rem'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > input');
      addVariant('beaf', '&::before')
    }
  ],
}

