import * as React from 'react';
import {useRoute} from 'react-router5';
import {HomeRoute} from 'router';
import * as components from './components';

/**
 * The reducer of the router and content.
 * @return {React.ReactElement}
 * @constructor
 */
export default function Reducer(): React.ReactElement {
  const {route} = useRoute();
  switch (route.name) {
    case HomeRoute.name: return <components.Home />;
    default: return <components.NotFound />;
  }
}
