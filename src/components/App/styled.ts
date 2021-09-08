import {css, createGlobalStyle} from 'styled-components';
import 'reset.css';

/**
 * The global font styles.
 */
export const FontStyles = css`
  color: inherit;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Geneva,
    "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Cherokee",
    "Noto Sans Devanagari", "Noto Sans Ethiopic",
    "Noto Sans Georgian", "Noto Sans Hebrew", "Noto Sans Kannada",
    "Noto Sans Khmer", "Noto Sans Lao",
    "Noto Sans Osmanya", "Noto Sans Tamil", "Noto Sans Telugu",
    "Noto Sans Thai", sans-serif, arial,
    Tahoma, verdana;
  font-size: inherit;
  font-weight: normal;
  line-height: normal;
`;

/**
 * The global app styles.
 */
export const Styles = createGlobalStyle`
  body {
    ${FontStyles};
  }
`;
