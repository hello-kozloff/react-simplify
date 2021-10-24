import * as React from 'react';

/**
 * Textarea variant.
 * @type {string}
 */
export type TextareaVariant =
  | 'default'
  | 'primary'
;

/**
 * Textarea scale.
 * @type {string}
 */
export type TextareaScale =
  | 'small'
  | 'medium'
  | 'large'
;

/**
 * The props interface of the textarea component.
 * @param {TextareaVariant | undefined} variant
 * @param {TextareaScale | undefined} scale
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

  /**
   * Textarea variant.
   * @type {TextareaVariant | undefined}
   */
  variant?: TextareaVariant;

  /**
   * Textarea scale.
   * @type {TextareaScale | undefined}
   */
  scale?: TextareaScale;

}
