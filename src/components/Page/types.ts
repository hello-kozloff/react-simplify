/**
 * The interface of a page context.
 * @param {string} title
 */
export interface PageContext {

  /**
   * Title of the page.
   * @type {string}
   */
  title: string;

}

/**
 * The props interface of a page component.
 * @param {string} title
 */
export interface PageProps extends PageContext {

}
