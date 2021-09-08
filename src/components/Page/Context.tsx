import * as React from 'react';
import {PageContext} from './types';

/**
 * The page context.
 * @type {PageContext | undefined}
 */
export const Context =
  React.createContext<PageContext | undefined>(undefined);

/**
 * The provider of a page context.
 * @param {React.PropsWithChildren<PageContext>} props
 * @constructor
 */
export function ContextProvider(
    {children, ...context}: React.PropsWithChildren<PageContext>,
): React.ReactElement<React.PropsWithChildren<PageContext>> {
  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}
