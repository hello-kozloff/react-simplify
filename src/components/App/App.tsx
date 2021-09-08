import * as React from 'react';
import {GlobalStyles} from './styled';
import {Router, RouterReducer} from 'router';
import {RouterProvider} from 'react-router5';

/**
 * The main app component.
 * @return {React.ReactElement}
 * @constructor
 */
export default function App(): React.ReactElement {
  return (
    <React.Fragment>
      <GlobalStyles />
      <RouterProvider router={Router.start()}>
        <RouterReducer />
      </RouterProvider>
    </React.Fragment>
  );
}
