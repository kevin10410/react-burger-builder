import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ADD_INGREDIENT,
  SUBSTRACT_INGREDIENT,
  INIT_INGREDIENTS,
} from '../../store/actions/ingredients';

import {
  ADD_PRICE,
  SUBSTRACT_PRICE,
  INIT_PRICE,
} from '../../store/actions/price';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';

const priceDict = {
  salad: 5,
  cheese: 10,
  meat: 20,
  bacon: 5,
};

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  increaseIngredientHandler = (ingredient) => {
    this.props.addIngredient(ingredient);
    this.props.addPrice(priceDict[ingredient]);
  };

  decreaseIngredientHandler = (ingredient) => {
    this.props.substractIngredient(ingredient);
    this.props.substractPrices(priceDict[ingredient])
  };

  updatePurchasable = price => price > 0;

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  componentDidMount() {
    if (this.props.isLogin) {
      this.props.initIngredients();
      this.props.initPrice();
    } else {
      this.props.history.replace('/login');
    }
  };

  render() {
    const { ingredients } = this.props;
    const disabledIngredients = Object.keys(ingredients)
      .filter(ingredient => ingredients[ingredient] === 0);

    return (
      <React.Fragment>
        <Modal
          cancelPurchase = { this.purchaseCancelHandler }
          show = { this.state.purchasing }>
          <OrderSummary
            totalPrice = { this.props.price }
            cancelPurchase = { this.purchaseCancelHandler }
            continuePurchase = { this.purchaseContinueHandler }
            ingredients = { this.props.ingredients }
          />
        </Modal>
        <Burger ingredients = {this.props.ingredients}/>
        <BuildControls
          totalPrice = { this.props.price }
          purchasable = { this.updatePurchasable(this.props.price) }
          disabledIngredients = { disabledIngredients }
          increaseIngredient = { this.increaseIngredientHandler }
          decreaseIngredient = { this.decreaseIngredientHandler }
          purchase = { this.purchaseHandler }
        />
      </React.Fragment>
    );
  };
};

const mapStateToProps = state => ({
  ingredients: state.reducerIngredients.ingredients,
  price: state.reducerPrice.price,
  isLogin: state.reducerLogin.token !== null,
});

const mapActionsToProps = dispatch => ({
  initIngredients: () => dispatch(INIT_INGREDIENTS()),
  addIngredient: ingredient => dispatch(ADD_INGREDIENT(ingredient)),
  substractIngredient: ingredient => dispatch(SUBSTRACT_INGREDIENT(ingredient)),
  initPrice: () => dispatch(INIT_PRICE()),
  addPrice: price => dispatch(ADD_PRICE(price)),
  substractPrices: price => dispatch(SUBSTRACT_PRICE(price)),
});

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(BurgerBuilder);
