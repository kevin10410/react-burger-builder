import React , { Component } from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from '../../components/Order/ContactData';

const DivCheckout = styled.div`
`;

class Checkout extends Component {

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history
      .replace('./checkout/contact-data');
  };

  isRedirectRequired = () => {
    const isEmptyIngredients = Object
      .values(this.props.ingredients)
      .every(ingredient => ingredient === 0);
    return isEmptyIngredients
      || this.props.isPurchased;
  };

  render() {
    return (
      this.isRedirectRequired()
        ? <Redirect to="/"/>
        : <DivCheckout>
            <CheckoutSummary
              checkoutContinue = { this.checkoutContinuedHandler }
              checkoutCancel = { this.checkoutCanceledHandler }
              ingredients = { this.props.ingredients }
            />
            <Route
              path = "/checkout/contact-data"
              render = {(routeProps) => (
                <ContactData
                  {...routeProps}
                  ingredients = { this.props.ingredients }
                  price = { this.props.price }
                />
              )}
            />
          </DivCheckout>
    )
  }
};

const mapStateToProps = state => ({
  ingredients: state.reducerIngredients.ingredients,
  price: state.reducerPrice.price,
  isPurchased: state.reducerOrders.isPurchased,
});

export default connect(
  mapStateToProps,
  null,
)(Checkout);

