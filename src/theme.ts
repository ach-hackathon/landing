import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "indigo",
  fontFamily: '"Manrope", sans-serif',
  headings: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontWeight: "700",
  },
  defaultRadius: "xl",
  colors: {
    coral: [
      "#fff0f7",
      "#ffd6e9",
      "#ffadd0",
      "#ff84b8",
      "#ff5b9f",
      "#f83d88",
      "#db246e",
      "#ad1855",
      "#81103f",
      "#57072a",
    ],
  },
  shadows: {
    glow: "0 28px 80px rgba(77, 99, 255, 0.16)",
  },
  components: {
    Button: {
      defaultProps: {
        radius: "xl",
        size: "md",
      },
    },
    Badge: {
      defaultProps: {
        radius: "xl",
        variant: "light",
      },
    },
    Paper: {
      defaultProps: {
        radius: "2rem",
      },
    },
  },
});
