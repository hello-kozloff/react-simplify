import * as React from 'react';
import {TabProps} from './components';

/**
 * The type of tab component element.
 * @type {React.FunctionComponentElement<TabProps>}
 */
export type TabComponentElement
  = React.FunctionComponentElement<TabProps>;

/**
 * The props interface of a tabbar.
 * @param {string | undefined} defaultName
 * @param {TabComponentElement | TabComponentElement[]} children
 */
export interface TabbarProps {

  /**
   * Default current tab name.
   * @type {string | undefined}
   */
  defaultCurrent?: string;

  /**
   * Child tab components.
   * @type {TabComponentElement | TabComponentElement[]}
   */
  children:
    | TabComponentElement
    | TabComponentElement[];

}
