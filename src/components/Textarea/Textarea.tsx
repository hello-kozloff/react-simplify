import * as React from 'react';
import * as styled from './styled';
import {TextareaProps} from './types';

/**
 * The textarea component.
 * @param {TextareaProps} props
 * @return {React.ReactElement<TextareaProps>}
 * @constructor
 */
function Textarea(
    props: TextareaProps,
): React.ReactElement<TextareaProps> {
  return <styled.Textarea {...props} />;
}

Textarea.defaultProps = {
  variant: 'default',
  scale: 'medium',
};

export default Textarea;
