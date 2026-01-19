const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "3rem", // 48px left/right
      },
      screens: {
        "2xl": "1440px",
      },
    },

    extend: {
      /* ---------- Shadows ---------- */
      boxShadow: {
        soft: "0 25px 60px -15px rgba(0, 0, 0, 0.15)",
      },

      /* ---------- Animation ---------- */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "float-slow": "float 3s ease-in-out infinite",
      },

      /* ---------- Fonts ---------- */
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        baskervville: ["var(--font-baskervville)", "serif"],
        acumin: ["var(--font-acumin)", "sans-serif"],
        lumios: ["var(--font-lumios)", "cursive"],
      },

      /* ---------- Typography ---------- */
      fontSize: {
        h1: ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["28px", { lineHeight: "1.3", fontWeight: "500" }],
        body: ["16px", { lineHeight: "1.75" }],
        caption: ["14px", { lineHeight: "1.5" }],
      },

      /* ---------- Colors ---------- */
      colors: {
        primary: "#2563EB", // CTA, buttons
        accent: "#F59E0B", // Sale, discount
        background: "#FFFFFF",
        surface: "#F9FAFB",
        text: {
          primary: "#111827",
          secondary: "#6B7280",
        },
        border: "#E5E7EB",
      },
    },
  },

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#2563EB", // Blue – Add to Cart / Buy Now
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#F59E0B", // Amber – Sale / Discount
              foreground: "#111827",
            },
            background: "#FFFFFF",
            foreground: "#111827",
            content1: "#F9FAFB", // Cards / surfaces
            content2: "#F3F4F6",
            divider: "#E5E7EB",
          },
        },
      },
    }),
  ],
};

module.exports = config;
