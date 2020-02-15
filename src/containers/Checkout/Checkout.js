import React , { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from '../../components/Order/ContactData';

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

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history
      .replace('./checkout/contact-data');
  }

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
          checkoutContinue = { this.checkoutContinuedHandler }
          checkoutCancel = { this.checkoutCanceledHandler }
          ingredients = { this.state.ingredients }
        />
        <Route
          path = "/checkout/contact-data"
          component = { ContactData }
        />
      </DivCheckout>
    )
  }
};

export default Checkout;
