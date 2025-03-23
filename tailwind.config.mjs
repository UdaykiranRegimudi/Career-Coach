/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000', // Set background to black
                foreground: '#ffffff', // Set text color to white
                card: {
                    DEFAULT: '#111111', // Dark gray cards
                    foreground: '#ffffff' // White text inside cards
                },
                popover: {
                    DEFAULT: '#111111', // Dark gray popover
                    foreground: '#ffffff'
                },
                primary: {
                    DEFAULT: '#ffffff', // Primary elements (e.g., buttons)
                    foreground: '#000000' // Black text on primary buttons
                },
                secondary: {
                    DEFAULT: '#ffffff', // Secondary elements
                    foreground: '#000000'
                },
                muted: {
                    DEFAULT: '#888888', // Light gray for muted elements
                    foreground: '#ffffff'
                },
                accent: {
                    DEFAULT: '#ffffff', // Accent elements
                    foreground: '#000000'
                },
                destructive: {
                    DEFAULT: '#ff4d4d', // Red for destructive actions
                    foreground: '#ffffff'
                },
                border: '#ffffff', // White borders
                input: '#ffffff', // White input text
                ring: '#ffffff', // White outline rings
                chart: {
                    '1': '#ffcc00', // Yellow
                    '2': '#ff6666', // Light Red
                    '3': '#66ccff', // Light Blue
                    '4': '#99ff99', // Light Green
                    '5': '#ff99ff'  // Light Pink
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
