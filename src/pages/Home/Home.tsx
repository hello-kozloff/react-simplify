import * as React from 'react';
import {Page} from 'components/Page';

/**
 * The home page.
 * @return {React.ReactElement}
 * @constructor
 */
export default function Home(): React.ReactElement {
  return (
    <Page title="Home">
      <h1>Welcome to home page!</h1>
    </Page>
  );
}
