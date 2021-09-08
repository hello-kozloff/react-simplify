import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      red: string,
      green: string,
      blue: string,
      white: '#ffffff',
      black: '#000000',
    };
    font: {
      color: string;
      family: string;
      size: string;
      weight: string;
      height: string;
    };
    background: string;
  }
}
