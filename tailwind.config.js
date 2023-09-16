/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "1.4rem",
        md: "1.6rem",
        lg: ["1.8rem", "1.3"],
        xl: ["2.2rem", "1.3"],
        "2xl": ["2.8rem", "1.3"],
        "3xl": "3.2rem",
        "4xl": "4.8rem",
        "5xl": ["4.4rem", "1"],
        "6xl": ["8rem", "1"],
      },
      colors: {
        background: {
          primary: "var(--white)",
          secondary: "var(--gray-5)",
          tertiary: "var(--gray-10)",
        },
        border: {
          opaque: "var(--gray-20)",
          hover: "var(--black)",
          selected: "var(--blue-40)",
        },
        text: {
          primary: "var(--black)",
          secondary: "var(--gray-60)",
          tertiary: "var(--gray-50)",
        },
        indicator: {
          success: "var(--tosca-ds)",
          warning: "var(--yellow-ds)",
          fail: "var(--magenta-ds)",
        },
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
        13: "5.2rem",
        14: "5.6rem",
        15: "6rem",
        16: "6.4rem",
        17: "6.8rem",
        18: "7.2rem",
        19: "7.8rem",
        20: "8.2rem",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.375rem",
        xl: "0.5rem",
        "2xl": "0.625rem",
        "3xl": "0.75rem",
        "4xl": "0.875rem",
        "5xl": "1rem",
        "6xl": "1.125rem",
        "7xl": "1.25rem",
        "8xl": "1.375rem",
        "9xl": "1.5rem",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(135deg,#FEF5FF,#FFADE1)",
        "gradient-2": "linear-gradient(135deg,#fff7f5,#FFD8AD)",
        "gradient-3": "linear-gradient(135deg,#f7fff5,#adffd8)",
        "gradient-4": "linear-gradient(135deg,#f5fff7,#adf8ff)",
        "gradient-5": "linear-gradient(135deg,#f7f0ff,#a78afe)",
        "gradient-6": "linear-gradient(180deg,#fee5ea,#ffcfd7)",
      },
    },
  },
  plugins: [],
};
