import React from 'react';
import styled from 'styled-components';
import Burger from '../Burger/Burger';
import { ButtonDanger, ButtonSuccess } from '../../component-style/ButtonStyle';

const DivCheckoutSummary = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;

  @media (min-width: 600px) {
    width: 700px;
  }
`;

const DivBurgerWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const CheckoutSummary = (props) => (
  <DivCheckoutSummary>
    <h1>We Hope it tastes well!</h1>
    <DivBurgerWrapper>
      <Burger
        ingredients = { props.ingredients }
      />
    </DivBurgerWrapper>
    <ButtonDanger
      onClick = { () => { props.checkoutCancel(); } }
    >CANCEL</ButtonDanger>
    <ButtonSuccess
      onClick = { () => { props.checkoutContinue(); } }
    >CONTINUE</ButtonSuccess>
  </DivCheckoutSummary>
);

export default CheckoutSummary;