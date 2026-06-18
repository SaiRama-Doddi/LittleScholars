export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0c2b5c',
          yellow: '#fab818',
          orange: '#f37022',
          navy: '#051b3d',
          lightblue: '#eef5ff',
          lightyellow: '#fffbeb',
          darkblue: '#0a1d37',
        }
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
        fredoka: ['"Source Sans 3"', 'sans-serif'],
        playfair: ['"Source Sans 3"', 'sans-serif'],
        outfit: ['"Source Sans 3"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
