import * as React from 'react';
import * as styled from './styled';
import {ButtonProps} from './types';

/**
 * The button component.
 * @param {ButtonProps} props
 * @return {React.ReactElement<ButtonProps>}
 * @constructor
 */
function Button(
    props: ButtonProps,
): React.ReactElement<ButtonProps> {
  return <styled.Button {...props} />;
}

Button.defaultProps = {
  variant: 'default',
  scale: 'medium',
};

export default Button;
