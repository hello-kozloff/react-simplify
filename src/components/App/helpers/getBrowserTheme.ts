import {DefaultTheme} from 'styled-components';
import * as themes from 'components/App/themes';

/**
 * Get browser theme.
 * @return {DefaultTheme}
 */
export default function getBrowserTheme(): DefaultTheme {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDark ? themes.Dark : themes.Light;
}
