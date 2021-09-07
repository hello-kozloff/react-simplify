import {Route} from 'router5';

/**
 * The home route.
 * @type {Route}
 */
export const HomeRoute: Route = {
  name: 'home',
  path: '/',
};

/**
 * Router route's.
 * @type {Route[]}
 */
export default [
  HomeRoute,
] as Route[];
