import styled, {css} from 'styled-components';
import {InputProps} from './types';

/**
 * The input wrapper.
 * @interface InputProps
 */
export const Input = styled.input<InputProps>`
  ${({variant}) => {
    switch (variant) {
      case 'default': return css``;
      case 'primary': return css``;
    }
  }};
  ${({scale}) => {
    switch (scale) {
      case 'small': return css``;
      case 'medium': return css``;
      case 'large': return css``;
    }
  }};
  ${({disabled}) => disabled && css``};
`;
