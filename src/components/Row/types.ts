import * as React from 'react';
import {ColumnProps} from 'components/Column';

/**
 * The type of column component element.
 * @type {React.FunctionComponentElement<ColumnProps>}
 */
export type ColumnComponentElement
  = React.FunctionComponentElement<ColumnProps>;

/**
 * The props interface of the row component.
 * @param {ColumnComponentElement | ColumnComponentElement[]} children
 */
export interface RowProps {

  /**
   * Child content.
   * @type {JSX.Element | JSX.Element[]}
   */
  children:
    | ColumnComponentElement
    | ColumnComponentElement[];

}
