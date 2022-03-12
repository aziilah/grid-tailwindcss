module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
            },
            colors: {
                coffee: '#bada55',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate (-3deg)' },
                    '50%': { transform: 'rotate(3deg)'},
                },
            },
        },
    },
  plugins: [],
}
