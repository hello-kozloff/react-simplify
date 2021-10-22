import styled, {css} from 'styled-components';
import {ButtonProps} from './types';

/**
 * The button wrapper.
 * @interface ButtonProps
 */
export const Button = styled.button<ButtonProps>`
  ${({variant}) => {
    switch (variant) {
      case 'default': return css``;
      case 'primary': return css``;
      case 'secondary': return css``;
      case 'outline': return css``;
    }
  }};
  ${({scale}) => {
    switch (scale) {
      case 'extra-small': return css``;
      case 'small': return css``;
      case 'medium': return css``;
      case 'large': return css``;
      case 'extra-large': return css``;
    }
  }};
  ${({disabled}) => disabled && css``};
`;
