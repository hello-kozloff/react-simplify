import * as React from 'react';
import {RouterProvider} from 'react-router5';
import {router, Reducer} from 'router';

/**
 * The router component.
 * @return {React.ReactElement}
 * @constructor
 */
export default function Router(): React.ReactElement {
  return (
    <RouterProvider router={router.start()}>
      <Reducer />
    </RouterProvider>
  );
}
