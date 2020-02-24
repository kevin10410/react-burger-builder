import {
  ADD_INGREDIENT,
  SUBSTRACT_INGREDIENT,
  INIT_INGREDIENTS,
} from '../actionTypes';

const initState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
};

const reducerIngredients = (state = initState, action) => {
  const { type, payload } = action;
  const newState = {
    ingredients: {
      ...state.ingredients,
    },
};

  switch (type) {
    case INIT_INGREDIENTS:
      return initState;
    case ADD_INGREDIENT:
      newState.ingredients[payload] += 1;
      return newState;
    case SUBSTRACT_INGREDIENT:
      newState.ingredients[payload] = newState.ingredients[payload] > 0
        ? newState.ingredients[payload] -= 1
        : 0;
      return newState;
    default:
      return newState;
  };
};

export default reducerIngredients;
