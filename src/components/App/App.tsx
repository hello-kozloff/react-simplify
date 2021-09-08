import * as React from 'react';
import {Router} from 'router';
import {Styles} from './styled';

/**
 * The main app component.
 * @return {React.ReactElement}
 * @constructor
 */
export default function App(): React.ReactElement {
  return (
    <React.Fragment>
      <Styles />
      <Router />
    </React.Fragment>
  );
}
