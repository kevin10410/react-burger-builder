import React from 'react';
import styled from 'styled-components';
import Logo  from '../Logo';
import NavigationList from './NavigationList';
import DrawerToggler from './DrawerToggler';

const HeaderToolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703B09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  & nav { height: 100% }
`;

const NavNavigation = styled.nav`
  @media (max-width: 499px) {
    & { display: none }
  }
`;

const Toolbar = (props) => (
  <HeaderToolbar>
    <DrawerToggler
      toggleDrawer = { props.toggleDrawer }/>
    <Logo height = '80%'/>
    <NavNavigation>
      <NavigationList/>
    </NavNavigation>
  </HeaderToolbar>
);

export default Toolbar;