import React from 'react';
import styled from 'styled-components';

const LiNavigationItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  & a {
    color: #8F5C2C;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;

    &:hover, &:active {
      color: #40A4C8;
    }
  }

  @media (min-width: 500px) {
    & {
      margin: 0;
      height: 100%;
      display: flex;
      width: auto;
      align-items: center;

      & a {
        color: #fff;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;

        &:hover, &:active {
          color: #fff;
          background-color: #8F5C2C;
          border-bottom: 4px solid #40A4C8;
        }
      }
    }
  }
`;

const NavigationItem = (props) => (
  <LiNavigationItem>
    <a href = { props.link }
    >{ props.children }</a>
  </LiNavigationItem>
);

export default NavigationItem;