const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        space: {
          normal: "#BE9CD7",
          medium: "#5F3A84",
          dark: "#0F0A18",
        },
      },
      fontSize: {
        "4xl": ["2.5rem", "1.25"],
        "5xl": ["3rem", "1.25"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.900"),
              fontWeight: "400",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h2: {
              color: theme("colors.gray.900"),
              fontWeight: "400",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h3: {
              color: theme("colors.gray.900"),
              fontWeight: "400",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h4: {
              color: theme("colors.gray.900"),
              fontWeight: "400",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            p: {
              color: theme("colors.gray.900"),
              fontWeight: "500",
              fontFamily: `${theme("fontFamily.body")}`,
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h2: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h3: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h4: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            P: {
              fontFamily: `${theme("fontFamily.body")}`,
            },
          },
        },
        xl: {
          css: {
            h1: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h2: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h3: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h4: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            P: {
              fontFamily: `${theme("fontFamily.body")}`,
            },
          },
        },
      }),
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: [
        "Monument Extended",
        "Inter var",
        "Noto Sans Thai",
        "SF Pro Display",
        "Sukhumvit Set",
        "IBM Plex Sans Thai",
        ...defaultTheme.fontFamily.sans,
      ],
      body: [
        "FC Friday",
        "Inter var",
        "Noto Sans Thai",
        "SF Pro Display",
        "Sukhumvit Set",
        "IBM Plex Sans Thai",
        ...defaultTheme.fontFamily.sans,
      ],
      name: [
        "Roboto Slab",
        "Inter var",
        "Noto Sans Thai",
        "SF Pro Display",
        "Sukhumvit Set",
        "IBM Plex Sans Thai",
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
