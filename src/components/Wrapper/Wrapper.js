import React, { Component } from 'react';
import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

const MainContent = styled.main`
  margin-top: 72px;
`;

class Wrapper extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    const { showSideDrawer } = this.state;
    showSideDrawer
      ? this.sideDrawerCloseHandler()
      : this.sideDrawerOpenHandler();
  };

  render () {
    return (
      <React.Fragment>
        <Toolbar
          toggleDrawer = { this.sideDrawerToggleHandler }/>
        <SideDrawer
          showSideDrawer = { this.state.showSideDrawer }
          closeSideDrawer = { this.sideDrawerCloseHandler }/>
        <MainContent>
          { this.props.children }
        </MainContent>
    </React.Fragment>
    )
  }
};

export default Wrapper;