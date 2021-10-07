import * as React from 'react';
import {Page} from 'components/Page';

/**
 * The not found page.
 * @return {React.ReactElement}
 * @constructor
 */
export default function NotFound(): React.ReactElement {
  return (
    <Page title="Not found">
      <h1>The route not found. Please return to main page.</h1>
    </Page>
  );
}
