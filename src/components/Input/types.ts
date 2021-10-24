import * as React from 'react';

/**
 * Input variant.
 * @type {string}
 */
export type InputVariant =
  | 'default'
  | 'primary'
;

/**
 * Input scale.
 * @type {string}
 */
export type InputScale =
  | 'small'
  | 'medium'
  | 'large'
;

/**
 * The props interface of the input component.
 * @param {InputVariant | undefined} variant
 * @param {InputScale | undefined} scale
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {

  /**
   * Input variant.
   * @type {InputVariant | undefined}
   */
  variant?: InputVariant;

  /**
   * Input scale.
   * @type {InputScale | undefined}
   */
  scale?: InputScale;

}
