 import React from 'react';
 import styled from 'styled-components';
 import Logo from '../Logo';
 import NavigationList from '../Navigation/NavigationList';
 import Backdrop from '../UI/Backdrop';

 const DivSideDrawer = styled.div`
  width: 200px;
  max-width: 70%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #fff;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3 ease-in-out;
  transform: ${ props => props.open
    ? 'translateX(0)'
    : 'translateX(-100%)'
  };

  @media (min-width: 500px) {
    & { display: none }
  }
 `;

 const SideDrawer = (props) => (
  <React.Fragment>
    <Backdrop
      show = { props.showSideDrawer }
      cancel = { props.closeSideDrawer }/>
    <DivSideDrawer
      open = { props.showSideDrawer }>
      <Logo height = '8%'/>
      <nav>
        <NavigationList/>
      </nav>
    </DivSideDrawer>
  </React.Fragment>
 );

 export default SideDrawer;