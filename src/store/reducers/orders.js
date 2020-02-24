import {
  SET_ORDERS,
  SET_IS_LOADING,
} from '../actionTypes';

const initState = {
  orders: [],
  isLoading: false,
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
    default:
      return state;
  };
};

export default reducerOrders;
