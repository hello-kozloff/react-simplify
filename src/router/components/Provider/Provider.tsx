import * as React from 'react';
import {RouterProvider} from 'react-router5';
import {Router, RouterReducer} from 'router';

/**
 * The router provider.
 * @return {React.ReactElement}
 * @constructor
 */
export default function Provider(): React.ReactElement {
  return (
    <RouterProvider router={Router.start()}>
      <RouterReducer />
    </RouterProvider>
  );
}
