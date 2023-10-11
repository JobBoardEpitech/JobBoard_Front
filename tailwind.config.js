/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xs: '375px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
            '4xl': '2560px'
        },
        extend: {
            colors: {
                indigo: {
                    600: "#4341c0"
                }
            },
            fontFamily: {
                'fredoka': ['Fredoka One', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
