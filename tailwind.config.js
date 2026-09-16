/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Sampled directly from the client's logo file.
        navy: {
          DEFAULT: "#0b2a37",
          soft: "#1c3f4d",
          dim: "#5b7078",
        },
        teal: {
          DEFAULT: "#0eb9b0",
          deep: "#0a8f88",
          light: "#5fd6cd",
        },
        cream: {
          DEFAULT: "#ffffff",
          tint: "#f3faf9",
          line: "#e3eeed",
        },
        sand: {
          DEFAULT: "#f6f1e8",
          deep: "#e7dcc8",
        },
        slate: {
          DEFAULT: "#5b6b70",
          light: "#8a9a9e",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      maxWidth: {
        prose2: "62ch",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(11, 42, 55, 0.18)",
        card: "0 14px 30px -18px rgba(11, 42, 55, 0.22)",
      },
      transitionTimingFunction: {
        atelier: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
