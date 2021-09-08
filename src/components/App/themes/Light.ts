import {DefaultTheme} from 'styled-components';

const colors: DefaultTheme['colors'] = {
  red: '#d90000',
  green: '#7bd639',
  blue: '#005eff',
  white: '#ffffff',
  black: '#000000',
};

const font: DefaultTheme['font'] = {
  color: colors.black,
  family: `
    -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Geneva,
    "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Cherokee",
    "Noto Sans Devanagari", "Noto Sans Ethiopic",
    "Noto Sans Georgian", "Noto Sans Hebrew", "Noto Sans Kannada",
    "Noto Sans Khmer", "Noto Sans Lao",
    "Noto Sans Osmanya", "Noto Sans Tamil", "Noto Sans Telugu",
    "Noto Sans Thai", sans-serif, arial
  `,
  size: '15px',
  weight: 'normal',
  height: 'inherit',
};

export default {
  colors,
  font,
  background: colors.white,
} as DefaultTheme;
