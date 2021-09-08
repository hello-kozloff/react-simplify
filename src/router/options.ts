import {Options} from 'router5';
import {HomeRoute} from './routes';

/**
 * Router option's.
 * @type {Options}
 */
export default {
  defaultRoute: HomeRoute.name,
  queryParamsMode: 'loose',
  allowNotFound: true,
} as Options;
