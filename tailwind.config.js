/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}

