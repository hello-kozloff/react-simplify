import * as React from 'react';
import * as styled from './styled';
import {Tab, TabProps} from './components';
import {TabbarProps, TabComponentElement} from './types';

/**
 * The tabbar controller.
 * @param {TabbarProps} props
 * @return {React.ReactElement<TabbarProps>}
 * @constructor
 */
function Tabbar(
    props: TabbarProps,
): React.ReactElement<TabbarProps> {
  const [
    current, setCurrent,
  ] = React.useState<TabProps['name']>(
      getDefaultCurrent(),
  );

  /**
   * Get the tabbar items.
   * @return {TabComponentElement[]}
   */
  function getAllTabs(): TabComponentElement[] {
    return Array.isArray(props.children) ? (
      props.children
    ) : [props.children];
  }

  /**
   * Get default current tab name.
   * @return {string}
   */
  function getDefaultCurrent(): TabProps['name'] {
    return props.defaultCurrent || (
      getAllTabs()[0].props.name
    );
  }

  /**
   * Navigate to tab.
   * @param {string} tabName
   * @return {void}
   */
  function navigateTo(tabName: TabProps['name']): void {
    setCurrent(tabName);
  }

  /**
   * Render navigation.
   * @return {JSX.Element}
   */
  function renderNavigation(): JSX.Element {
    /**
     * Render link.
     * @param {TabComponentElement} tab
     * @param {number} index
     * @return {JSX.Element}
     */
    function renderLink(
        tab: TabComponentElement,
        index: number,
    ): JSX.Element {
      /**
       * The click event handler.
       * @return {void}
       */
      function handleClick(): void {
        navigateTo(tab.props.name);
      }

      return (
        <span key={index} onClick={handleClick}>
          {tab.props.title}
        </span>
      );
    }

    return (
      <styled.Navigation>
        {getAllTabs().map(renderLink)}
      </styled.Navigation>
    );
  }

  /**
   * Render current tab.
   * @return {JSX.Element}
   */
  function renderCurrent(): JSX.Element {
    const tab = getAllTabs().find((tab) => (
      tab.props.name === current
    ));

    if (tab === undefined) {
      throw new Error(`Tab '${current}' not exist!`);
    }

    return (
      <styled.Content>
        {tab}
      </styled.Content>
    );
  }

  return (
    <styled.Wrapper>
      {renderNavigation()}
      {renderCurrent()}
    </styled.Wrapper>
  );
}

Tabbar.Item = Tab;
export default Tabbar;
