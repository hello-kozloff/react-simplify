import * as React from 'react';
import {ContextProvider} from './Context';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import {GlobalStyles} from './styled';
import {Router, RouterReducer} from 'router';
import {RouterProvider} from 'react-router5';
import getBrowserTheme from './helpers/getBrowserTheme';
import {AppContext} from './types';

/**
 * The main app component.
 * @return {React.ReactElement}
 * @constructor
 */
export default function App(): React.ReactElement {
  const [
    theme, setTheme,
  ] = React.useState<DefaultTheme>(getBrowserTheme());

  const context: AppContext = {
    theme, setTheme,
  };

  return (
    <ContextProvider {...context}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={Router.start()}>
          <RouterReducer />
        </RouterProvider>
      </ThemeProvider>
    </ContextProvider>
  );
}
