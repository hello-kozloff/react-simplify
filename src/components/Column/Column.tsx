import * as React from 'react';
import * as styled from './styled';
import {ColumnProps} from './types';

/**
 * The column component.
 * @param {ColumnProps} props
 * @return {React.ReactElement<ColumnProps>}
 * @constructor
 */
function Column(
    props: ColumnProps,
): React.ReactElement<ColumnProps> {
  return (
    <styled.Column>
      {props.children}
    </styled.Column>
  );
}

Column.defaultProps = {
  variant: 'default',
  scale: 'medium',
};

export default Column;
