import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import NavigationItem from './NavigationItem';

const UlNavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    & {
      flex-flow: row;
    }
  }
`;

const NavigationList = (props) => (
  <UlNavigationList>
    {
      props.isLogin
        ? <React.Fragment>
            <NavigationItem
              link = "/"
            >Burger Builder</NavigationItem>
            <NavigationItem
              link = "/orders"
            >Orders</NavigationItem>
            <NavigationItem
              link = "/logout"
            >Logout</NavigationItem>
          </React.Fragment>
        : <NavigationItem
            link = "/login"
          >Login</NavigationItem>
    }
  </UlNavigationList>
);

const mapStateToProps = state => ({
  isLogin: state.reducerLogin.token !== null,
});

export default connect(
  mapStateToProps,
)(NavigationList);
