/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: '#0066cc',
                    'blue-dark': '#004c99',
                },
                accent: {
                    orange: '#ff6b35',
                    green: '#06d6a0',
                },
                text: {
                    dark: '#1a1a1a',
                    medium: '#4a4a4a',
                    light: '#6b6b6b',
                },
                bg: {
                    light: '#f8f9fa',
                    white: '#ffffff',
                },
                border: {
                    light: '#e5e5e5',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['DM Serif Text', 'serif'],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
        },
    },
    plugins: [],
}

