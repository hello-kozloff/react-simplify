import * as React from 'react';

/**
 * Link variant.
 * @type {string}
 */
export type LinkVariant =
  | 'default'
  | 'primary'
;

/**
 * Link scale.
 * @type {string}
 */
export type LinkScale =
  | 'small'
  | 'medium'
  | 'large'
;

/**
 * The props interface of the link component.
 * @param {LinkVariant | undefined} variant
 * @param {LinkScale | undefined} scale
 */
export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {

  /**
   * Link variant.
   * @type {LinkVariant | undefined}
   */
  variant?: LinkVariant;

  /**
   * Link scale.
   * @type {LinkScale | undefined}
   */
  scale?: LinkScale;

}
