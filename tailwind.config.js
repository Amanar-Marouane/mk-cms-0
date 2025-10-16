/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },

                // Brand colors
                'ml-purple': '#15225A',
                'ml-lavender': '#ea8a0a',
                'ml-pearl': '#ffffff',
                'ml-deep': '#000000',
                'ml-light': '#ea8a0a',
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                'ml-glow': '0 0 15px rgba(234, 138, 10, 0.3), 0 0 30px rgba(234, 138, 10, 0.2)',
            },
            backgroundImage: {
                'ml-gradient': 'linear-gradient(135deg, #ea8a0a, #15225A)',
                'ml-hero': 'radial-gradient(circle at top right, rgba(234, 138, 10, 0.15), rgba(0, 0, 0, 0) 50%), radial-gradient(circle at bottom left, rgba(21, 34, 90, 0.15), rgba(0, 0, 0, 0) 50%)',
            },
            textShadow: {
                'regal': '0 0 10px rgba(234, 138, 10, 0.7), 0 0 20px rgba(234, 138, 10, 0.5)',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                'shimmer': {
                    '0%': { left: '-100%' },
                    '100%': { left: '100%' }
                },
                'pulse-regal': {
                    '0%, 100%': {
                        boxShadow: '0 0 15px rgba(234, 138, 10, 0.3), 0 0 30px rgba(234, 138, 10, 0.2)'
                    },
                    '50%': {
                        boxShadow: '0 0 20px rgba(234, 138, 10, 0.5), 0 0 40px rgba(234, 138, 10, 0.3)'
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                'shimmer': 'shimmer 3s infinite',
                'pulse-regal': 'pulse-regal 3s infinite',
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        function ({ addUtilities }) {
            addUtilities({
                '.text-shadow-regal': {
                    textShadow: '0 0 10px rgba(234, 138, 10, 0.7), 0 0 20px rgba(234, 138, 10, 0.5)',
                },
            })
        }
    ],
}
