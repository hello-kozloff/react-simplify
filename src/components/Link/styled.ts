import styled, {css} from 'styled-components';
import {LinkProps} from './types';

/**
 * The link wrapper.
 * @interface LinkProps
 */
export const Link = styled.a<LinkProps>`
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
