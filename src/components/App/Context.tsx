import * as React from 'react';
import {AppContext} from './types';

/**
 * The app context.
 * @type {AppContext | undefined}
 */
export const Context =
  React.createContext<AppContext | undefined>(undefined);

/**
 * The app context provider.
 * @param {React.PropsWithChildren<AppContext>} props
 * @constructor
 */
export function ContextProvider(
    {children, ...context}: React.PropsWithChildren<AppContext>,
): React.ReactElement {
  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}
