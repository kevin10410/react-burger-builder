import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
  };

  increaseIngredientHandler = (ingredient) => {
    const { ingredients } = this.state;
    let currentAmount = ingredients[ingredient];
    const newAmount = currentAmount += 1;
    ingredients[ingredient] = newAmount;
    this.setState({ ingredients });
    this.updateTotalPrice();
  };

  decreaseIngredientHandler = (ingredient) => {
    const { ingredients } = this.state;
    let currentAmount = ingredients[ingredient];
    const newAmount = currentAmount -= 1;
    ingredients[ingredient] = newAmount;
    this.setState({ ingredients });
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

  render() {
    const { ingredients } = this.state;
    const disabledIngredients = Object.keys(ingredients)
      .filter(ingredient => ingredients[ingredient] === 0);

    return (
      <React.Fragment>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          totalPrice = { this.state.totalPrice }
          disabledIngredients = { disabledIngredients }
          increaseIngredient = { this.increaseIngredientHandler }
          decreaseIngredient = { this.decreaseIngredientHandler }
        />
      </React.Fragment>
    );
  };
};

export default BurgerBuilder;