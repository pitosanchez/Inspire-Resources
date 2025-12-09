/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
                sm: '2rem',
                lg: '3rem',
            },
            screens: {
                '2xl': '1280px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'Source Sans Pro', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
                serif: ['Source Serif Pro', 'Georgia', 'ui-serif', 'serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
                impact: ['Impact', 'Arial Black', 'sans-serif'],
            },
            colors: {
                // Inspire Brand Blue - from logo (#3871c1)
                brand: {
                    50: '#eff4ff',
                    100: '#dde9ff',
                    200: '#c2d5ff',
                    300: '#9db8ff',
                    400: '#6f8fff',
                    500: '#3871c1', // Primary brand blue from logo
                    600: '#2d5a9a',
                    700: '#254778',
                    800: '#1f3a5f',
                    900: '#1a2f4d',
                    DEFAULT: '#3871c1',
                    foreground: '#ffffff',
                },
                // Inspire Accent Green - from logo (#80cc28)
                accent: {
                    50: '#f5fce8',
                    100: '#e8f7cc',
                    200: '#d1efa0',
                    300: '#b3e268',
                    400: '#9dd43a',
                    500: '#80cc28', // Primary accent green from logo
                    600: '#63a01f',
                    700: '#4c7a1a',
                    800: '#3f6218',
                    900: '#365317',
                    DEFAULT: '#80cc28',
                    foreground: '#ffffff',
                },
                // Inspire Dark Blue - from logo text (#044274)
                inspire: {
                    50: '#e6f0f7',
                    100: '#cce1ef',
                    200: '#99c3df',
                    300: '#66a5cf',
                    400: '#3387bf',
                    500: '#044274', // Dark blue from logo text
                    600: '#03355d',
                    700: '#022846',
                    800: '#021b2f',
                    900: '#010e18',
                    DEFAULT: '#044274',
                    foreground: '#ffffff',
                },
                // Warm accent - energy & compassion
                warm: {
                    50: '#fff4f0',
                    100: '#ffd9cc',
                    200: '#ffbfa8',
                    300: '#ffa485',
                    400: '#ff8961',
                    500: '#ff6f3d',
                    600: '#cc5931',
                    700: '#994325',
                    800: '#662c18',
                    900: '#33160c',
                },
                // Neutral palette - medical professional
                neutral: {
                    50: '#fafbfc',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                },
                // Semantic colors
                muted: {
                    DEFAULT: '#f1f3f5',
                    foreground: '#495057',
                },
                border: '#e5e7eb',
                input: '#e5e7eb',
                ring: '#0ea5e9',
                background: '#fafbfc',
                foreground: '#1f2937',
                destructive: {
                    DEFAULT: '#dc3545',
                    foreground: '#ffffff',
                },
                success: {
                    DEFAULT: '#28a745',
                    foreground: '#ffffff',
                },
            },
            spacing: {
                18: '4.5rem',
                88: '22rem',
            },
            borderRadius: {
                lg: '0.75rem',
                md: '0.5rem',
                sm: '0.375rem',
            },
            fontSize: {
                '2xs': ['0.625rem', { lineHeight: '1' }],
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(12px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-in': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px) translateZ(0px)' },
                    '50%': { transform: 'translateY(-15px) translateZ(10px)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.6s ease-out',
                'fade-in-up': 'fade-in-up 0.8s ease-out',
                'slide-in': 'slide-in 0.3s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}

