/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: '#DD5245',
            },

            fontFamily: {
                bebas: ['Bebas Neue', 'cursive'],
                oswald: ['Oswald', 'sans-serif'],
                anton: ['"Anton"', 'sans-serif'],
                playfair: ['"Playfair Display"', 'serif'],
                lora: ['"Lora"', 'serif'],
                merriweather: ['"Merriweather"', 'cursive'],
                inter: ['Inter', 'sans-serif'],
            },
            
            screens: {
                xs: { max: '456px' },
            },
        }
    },
    plugins: [],
}