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
    price: 0,
  };

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history
      .replace('./checkout/contact-data');
  }

  getIngredientsFromURLQuery = (queryString) => {
    const { ingredients } = this.state;
    const paramValuePairs = Array
      .from(new URLSearchParams(queryString).entries());

    return paramValuePairs
      .filter(([key, value]) => key in ingredients)
      .reduce((acc, [ key, value ]) => {
        acc[key] = parseInt(value, 10);
        return acc;
      },
      ingredients,
    );
  }

  getPriceFromURLQuery = (queryString) => {
    return parseFloat(
      new URLSearchParams(queryString)
        .get('price')
    );
  }

  componentDidMount() {
    const { search } = this.props.location;
    const ingredients = this.getIngredientsFromURLQuery(search);
    const price = this.getPriceFromURLQuery(search);

    this.setState({ ingredients, price });
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
          render = {(routeProps) => (
            <ContactData
              { ...routeProps }
              ingredients = { this.state.ingredients }
              price = { this.state.price }
            />
          )}
        />
      </DivCheckout>
    )
  }
};

export default Checkout;
