export const COLORS = {
  primary: 'hsl(15deg 80% 45%)',
  gray50: 'hsl(0deg 0% 95%)',
  gray300: 'hsl(0deg 0% 75%)',
  gray500: 'hsl(0deg 0% 50%)',
  gray700: 'hsl(0deg 0% 40%)',
  gray900: 'hsl(0deg 0% 20%)',
  black: 'hsl(0deg 0% 0%)',
  transparentGray15: 'hsl(0deg 0% 50% / 0.15)',
  transparentGray35: 'hsl(0deg 0% 50% / 0.35)',
};

const BREAKPOINTS = {
  tabletMax: 1100,
};

export const QUERIES = {
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
};
