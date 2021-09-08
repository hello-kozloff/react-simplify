import * as React from 'react';
import {useRoute} from 'react-router5';
import * as pages from 'router/components/Pages';
import * as routes from 'router';

/**
 * The reducer of the router and content.
 * @return {React.ReactElement}
 * @constructor
 */
export default function Reducer(): React.ReactElement {
  const {route} = useRoute();
  switch (route.name) {
    case routes.HomeRoute.name: return <pages.Home />;
    default: return <pages.NotFound />;
  }
}
