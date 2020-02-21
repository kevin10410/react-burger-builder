import {
  ADD_PRICE,
  SUBSTRACT_PRICE,
} from '../actionTypes';

const initState = {
  price: 0,
};

const reducerPrice = (state = initState, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case ADD_PRICE:
      newState.price += payload;
      return newState;
    case SUBSTRACT_PRICE:
      newState.price = newState.price - payload > 0
        ? newState.price - payload
        : 0;
      return newState;
    default:
      return newState;
  }
};

export default reducerPrice;
