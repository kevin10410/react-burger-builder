import {
  SET_ORDERS,
  SET_IS_LOADING,
  SET_IS_PURCHASED,
} from '../actionTypes';

const initState = {
  orders: [],
  isLoading: false,
  isPurchased: false,
};

const reducerOrders = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: [...payload],
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_IS_PURCHASED:
      return {
        ...state,
        isPurchased: payload,
      };
    default:
      return state;
  };
};

export default reducerOrders;
