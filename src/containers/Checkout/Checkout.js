import React , { Component } from 'react';
import styled from 'styled-components';

import CheckoutSummary from '../../components/Order/CheckoutSummary';

const DivCheckout = styled.div`
`;

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
  };

  getIngredientsFromURLQuery = (queryString) => {
    const paramValuePairs = Array
      .from(new URLSearchParams(queryString).entries());

    return paramValuePairs
      .reduce((acc, [ key, value ]) => {
        acc[key] = parseInt(value, 10);
        return acc;
      },
      {
        salad: 0,
        meat: 0,
        cheese: 0,
        bacon: 0,
      },
    );
  }

  componentDidMount() {
    const { search } = this.props.location;
    const ingredients = this.getIngredientsFromURLQuery(search);

    this.setState({ ingredients });
  }

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
