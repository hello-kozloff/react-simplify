import * as React from 'react';
import {Context, AppContext} from 'components/App';

/**
 * Hook providing access to the context of the app.
 * @return {AppContext}
 */
export default function useApp(): AppContext {
  const context = React.useContext(Context);

  if (context === undefined) {
    throw new Error(`useApp must be used within <App />`);
  }

  return context;
}
