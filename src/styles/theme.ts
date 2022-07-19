const fonts = {
  size: {
    m: "16px",
  } as const,
  weight: {
    light: 400,
    normal: 500,
    bold: 700,
  } as const,
};

const colors = {
  white: "#FFFFFF",
  black: "#000000",
} as const;

const theme = { colors, fonts };

export type Theme = typeof theme;

export default theme;
