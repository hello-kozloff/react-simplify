import * as React from 'react';
import * as styled from './styled';
import {RowProps} from './types';

/**
 * The row component.
 * @param {RowProps} props
 * @return {React.ReactElement<RowProps>}
 * @constructor
 */
export default function Row(
    props: RowProps,
): React.ReactElement<RowProps> {
  return (
    <styled.Row>
      {props.children}
    </styled.Row>
  );
}
