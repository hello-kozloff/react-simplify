import {css, createGlobalStyle} from 'styled-components';
import 'reset.css';

/**
 * The global font styles.
 * @return {color}
 * @return {size}
 * @return {weight}
 * @return {height}
 */
export const FontStyles = css`
  color: ${({theme}) => theme.font.color};
  font-family: ${({theme}) => theme.font.family};
  font-size: ${({theme}) => theme.font.size};
  font-weight: ${({theme}) => theme.font.weight};
  line-height: ${({theme}) => theme.font.height};
`;

/**
 * The global app styles.
 * @return {background}
 */
export const GlobalStyles = createGlobalStyle`
  body {
    ${FontStyles};
    background: ${({theme}) => theme.background};
  }
`;
