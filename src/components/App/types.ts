import {DefaultTheme} from 'styled-components';

/**
 * The props interface of the app.
 * @param {DefaultTheme} theme
 * @function {theme: DefaultTheme} setTheme
 */
export interface AppContext {

  /**
   * Current theme of the app.
   * @type {DefaultTheme}
   */
  theme: DefaultTheme;

  /**
   * Set current theme.
   * @param {DefaultTheme} theme
   * @return {void}
   */
  setTheme(theme: DefaultTheme): void;

}
