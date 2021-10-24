import * as React from 'react';
import * as styled from './styled';
import {InputProps} from './types';

/**
 * The input component.
 * @param {InputProps} props
 * @return {React.ReactElement<InputProps>}
 * @constructor
 */
function Input(
    props: InputProps,
): React.ReactElement<InputProps> {
  return <styled.Input {...props} />;
}

Input.defaultProps = {
  variant: 'default',
  scale: 'medium',
};

export default Input;
