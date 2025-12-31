/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        oreon: {
          green: '#7EF954',
          teal: '#00D9A5',
          blue: '#0066FF',
          dark: '#0A0A0A',
          gray: '#666666',
        },
      },
      fontFamily: {
        sans: ['var(--font-red-hat-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
