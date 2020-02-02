import React from 'react';
import styled from 'styled-components';
import burgerLogo from '../assets/images/burger-logo.png';

const DivLogo = styled.div`
  background-color: white;
  padding: 8px;
  height: ${ props => props.height
    ? props.height
    : '100%'
  };
  box-sizing: border-box;
  border-radius: 5px;

  & img {
    height: 100%;
  }
`;

const Logo = (props) => (
  <DivLogo height = { props.height }>
    <img
      alt = "Burger"
      src = { burgerLogo }/>
  </DivLogo>
);

export default Logo;