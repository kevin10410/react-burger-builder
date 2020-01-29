import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  increaseIngredientHandler = (ingredient) => {
    const { ingredients } = this.state;
    let currentAmount = ingredients[ingredient];
    const newAmount = currentAmount += 1;
    ingredients[ingredient] = newAmount;
    this.setState({ ingredients });
  };

  decreaseIngredientHandler = (ingredient) => {
    const { ingredients } = this.state;
    let currentAmount = ingredients[ingredient];
    const newAmount = currentAmount === 0
      ? 0
      : currentAmount -= 1;
    ingredients[ingredient] = newAmount;
    this.setState({ ingredients });
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          increaseIngredient = { this.increaseIngredientHandler }
          decreaseIngredient = { this.decreaseIngredientHandler }
        />
      </React.Fragment>
    );
  };
};

export default BurgerBuilder;