import {Router} from 'router5';
import browserPlugin from 'router5-plugin-browser';
import loggerPlugin from 'router5-plugin-logger';

/**
 * Implement plugins into the router.
 * @param {Router} router
 * @return {Router}
 */
export default function withPlugins(router: Router): Router {
  /**
   * Plugin's.
   */
  router.usePlugin(browserPlugin());

  /**
   * Development plugin's.
   */
  if (process.env.NODE_ENV === 'development') {
    router.usePlugin(loggerPlugin);
  }

  return router;
}
