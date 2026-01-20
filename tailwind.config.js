/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "3rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      boxShadow: {
        soft: "0 25px 60px -15px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-4px)",
          },
        },
      },
      animation: {
        "float-slow": "float 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        baskervville: ["var(--font-baskervville)", "serif"],
        acumin: ["var(--font-acumin)", "sans-serif"],
        lumios: ["var(--font-lumios)", "cursive"],
      },
      fontSize: {
        h1: [
          "48px",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        h2: [
          "36px",
          {
            lineHeight: "1.3",
            fontWeight: "600",
          },
        ],
        h3: [
          "28px",
          {
            lineHeight: "1.3",
            fontWeight: "500",
          },
        ],
        body: [
          "16px",
          {
            lineHeight: "1.75",
          },
        ],
        caption: [
          "14px",
          {
            lineHeight: "1.5",
          },
        ],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        surface: "#F9FAFB",
        text: {
          primary: "#111827",
          secondary: "#6B7280",
        },
        border: "hsl(var(--border))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};

module.exports = config;
