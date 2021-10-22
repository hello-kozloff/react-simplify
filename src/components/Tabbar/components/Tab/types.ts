/**
 * The props interface of a tab.
 * @param {string} name
 * @param {string} title
 * @param {JSX.Element | JSX.Element[]} children
 */
export interface TabProps {

  /**
   * Name of the tab.
   * @type {string}
   */
  name: string;

  /**
   * Title of the tab.
   * @type {string}
   */
  title: string;

  /**
   * Child content.
   * @type {JSX.Element | JSX.Element[]}
   */
  children:
    | JSX.Element
    | JSX.Element[];

}
