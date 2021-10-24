import * as React from 'react';
import * as styled from './styled';
import {LinkProps} from './types';

/**
 * The link component.
 * @param {LinkProps} props
 * @return {React.ReactElement<LinkProps>}
 * @constructor
 */
function Link(
    props: LinkProps,
): React.ReactElement<LinkProps> {
  return <styled.Link {...props} />;
}

Link.defaultProps = {
  variant: 'default',
  scale: 'medium',
};

export default Link;
