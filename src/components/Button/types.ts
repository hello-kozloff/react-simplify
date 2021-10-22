import * as React from 'react';

/**
 * Button variant.
 * @type {string}
 */
export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'outline'
;

/**
 * Button scale.
 * @type {string}
 */
export type ButtonScale =
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'extra-large'
;

/**
 * The props interface of the button component.
 * @param {ButtonVariant | undefined} variant
 * @param {ButtonScale | undefined} scale
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  /**
   * Button variant.
   * @type {ButtonVariant | undefined}
   */
  variant?: ButtonVariant;

  /**
   * Button scale.
   * @type {ButtonScale | undefined}
   */
  scale?: ButtonScale;

}
