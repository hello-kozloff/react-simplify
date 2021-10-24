import * as React from 'react';
import * as styled from './styled';
import {ContainerProps} from './types';

/**
 * The container component.
 * @param {ContainerProps} props
 * @return {React.ReactElement<ContainerProps>}
 * @constructor
 */
export default function Container(
    props: ContainerProps,
): React.ReactElement<ContainerProps> {
  return (
    <styled.Container>
      {props.children}
    </styled.Container>
  );
}
