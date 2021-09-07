import router5 from 'router5';
import withPlugins from './plugins';
import routes from './routes';
import options from './options';

/**
 * The router.
 * @type {Router}
 */
export default withPlugins(
    router5(routes, options),
);
