import * as React from 'react';
import {Helmet} from 'react-helmet';
import * as styled from './styled';
import {ContextProvider} from './Context';
import {PageProps} from './types';

/**
 * Component of the page that passes
 * the context using hook `usePage`.
 * @param {React.PropsWithChildren<PageProps>} props
 * @return {React.ReactElement<React.PropsWithChildren<PageProps>>}
 * @constructor
 */
export default function Page(
    {children, ...context}: React.PropsWithChildren<PageProps>,
): React.ReactElement<React.PropsWithChildren<PageProps>> {
  /**
   * With page context.
   * @param {React.ReactNode} children
   * @return {JSX.Element}
   */
  function withContext(children: React.ReactNode): JSX.Element {
    return (
      <React.Fragment>
        <Helmet>
          <title>{context.title}</title>
        </Helmet>
        <ContextProvider {...context}>
          {children}
        </ContextProvider>
      </React.Fragment>
    );
  }

  return withContext((
    <styled.Wrapper>
      <styled.Main>
        {children}
      </styled.Main>
    </styled.Wrapper>
  ));
}
