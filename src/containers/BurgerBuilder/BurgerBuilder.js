import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import Spinner from '../../components/UI/Spinner';

import { postOrder } from '../../api/orderService';

const priceDict = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
  };

  increaseIngredientHandler = (ingredient) => {
    const { ingredients } = this.state;
    let currentAmount = ingredients[ingredient];
    const newAmount = currentAmount += 1;
    ingredients[ingredient] = newAmount;
    this.setState({ ingredients });
    this.updatePurchasable();
    this.updateTotalPrice();
  };

  decreaseIngredientHandler = (ingredient) => {
    const { ingredients } = this.state;
    let currentAmount = ingredients[ingredient];
    const newAmount = currentAmount -= 1;
    ingredients[ingredient] = newAmount;
    this.setState({ ingredients });
    this.updatePurchasable();
    this.updateTotalPrice();
  };

  updateTotalPrice = () => {
    const { ingredients } = this.state;
    const totalPrice = Object.keys(ingredients)
      .reduce((total, ingredient) => {
        const ingredientAmount = ingredients[ingredient];
        const ingredientPrice = priceDict[ingredient];
        return total + ingredientAmount * ingredientPrice;
      }, 0);
    this.setState({ totalPrice });
  };

  updatePurchasable = () => {
    const { ingredients } = this.state;
    const purchasable = Object.values(ingredients)
      .some(ingredient => ingredient > 0);
    this.setState({ purchasable });
  };

  purchaseHandler = async () => {
    this.setState({ purchasing: true });
  };

  purchaseContinueHandler = async () => {
    this.setState({ loading: true });
    try {
      await postOrder({
        ...this.state.ingredients,
        price: this.state.totalPrice.toFixed(2),
        customer: {
          name: '',
          address: '',
          email: '',
          zipCode: '',
        },
      })
        .then(() => {
          this.setState({
            loading: false,
            purchasing: false,
          });
          const { ingredients } = this.state;
          const paramsString = Object.keys(ingredients)
            .map(ingredient => `${encodeURIComponent(ingredient)}=${encodeURIComponent(ingredients[ingredient])}`)
            .join('&');

          this.props.history.push({
            pathname: '/checkout',
            search: `?${paramsString}`,
          });
        });
    } catch(err) {
      this.setState({
        loading: false,
        purchasing: false,
      });
      alert(err);
    }
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const { ingredients } = this.state;
    const disabledIngredients = Object.keys(ingredients)
      .filter(ingredient => ingredients[ingredient] === 0);

    return (
      <React.Fragment>
        <Modal
          cancelPurchase = { this.purchaseCancelHandler }
          show = { this.state.purchasing }>
          {
            this.state.loading
              ? <Spinner/>
              : <OrderSummary
                  totalPrice = { this.state.totalPrice }
                  cancelPurchase = { this.purchaseCancelHandler }
                  continuePurchase = { this.purchaseContinueHandler }
                  ingredients = { this.state.ingredients }
                />
          }
        </Modal>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          totalPrice = { this.state.totalPrice }
          purchasable = { this.state.purchasable }
          disabledIngredients = { disabledIngredients }
          increaseIngredient = { this.increaseIngredientHandler }
          decreaseIngredient = { this.decreaseIngredientHandler }
          purchase = { this.purchaseHandler }
        />
      </React.Fragment>
    );
  };
};

export default BurgerBuilder;