import React , { Component } from 'react';
import styled from 'styled-components';

import CheckoutSummary from '../../components/Order/CheckoutSummary';

const DivCheckout = styled.div`
`;

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };

  render() {
    return (
      <DivCheckout>
        <CheckoutSummary
          ingredients = { this.state.ingredients }
        />
      </DivCheckout>
    )
  }
};

export default Checkout;
