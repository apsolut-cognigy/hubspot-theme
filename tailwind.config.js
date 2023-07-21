/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './source/**/*.{scss,js}',
        './modules/**/*.html',
    ],
    theme: {
        extend: {
            maxWidth: {
                'icon' : '32px',
            },
        },
        fontFamily: {
            'body': ['"Open Sans"'],
        },

        fontSize: {
            '18': ['1.15rem', '1'],
            'lg': ['1.65rem', '1'],
            'xl': ['1.85rem', '1'],
            '2xl': ['2.1rem', '1'],
            '3xl': ['2.25rem', '1'],
            '4xl': ['3.1rem', '1'],
            '5xl': ['3.85rem', '1'],
            '6xl': ['4.35rem', '1'],
            'hero': ['6.25rem', '1'],
        },
        colors: {
            'blue': '#0B3694',
            'blue-light': '#3d9fff',
            'blue-lighten': '#e5f1fb',
            'yellow': '#ffc237',
            'light': '#f5f9fc',
            'lighten': '#f5f5f6',
            'footer-bg': '#f5f5f6',
            'dark': '#f5f9fc',
            'black': '#1A1818',
            'white': '#FFFFFF',
        },
    },
    plugins: [

    ],
}
