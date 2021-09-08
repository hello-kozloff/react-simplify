import * as React from 'react';
import {RouterProvider} from 'router';
import {GlobalStyles} from './styled';

/**
 * The main app component.
 * @return {React.ReactElement}
 * @constructor
 */
export default function App(): React.ReactElement {
  return (
    <React.Fragment>
      <GlobalStyles />
      <RouterProvider />
    </React.Fragment>
  );
}
