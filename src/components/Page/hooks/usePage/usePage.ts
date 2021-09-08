import * as React from 'react';
import {Context, PageContext} from 'components/Page';

/**
 * Hook providing access to the context of the page.
 * @return {PageContext}
 */
export default function usePage(): PageContext {
  const context = React.useContext(Context);

  if (context === undefined) {
    throw new Error(`usePage must be used within <Page />`);
  }

  return context;
}
