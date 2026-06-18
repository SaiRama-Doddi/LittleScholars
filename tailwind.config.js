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
        fredoka: ['Fredoka', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
