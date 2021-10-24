import styled, {css} from 'styled-components';
import {TextareaProps} from './types';

/**
 * The textarea wrapper.
 * @interface TextareaProps
 */
export const Textarea = styled.textarea<TextareaProps>`
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
`;
