import * as React from 'react';
import {TabProps} from './types';

/**
 * The tab item.
 * @param {TabProps} props
 * @return {React.ReactElement<TabProps>}
 * @constructor
 */
function Tab(
    props: TabProps,
): React.ReactElement<TabProps> {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

export default React.memo(Tab);
