import {
  getOrders
} from '../../api/orderService.js';

export const SET_ORDERS = orders => ({
  type: 'SET_ORDERS',
  payload: orders,
});

export const SET_IS_LOADING = isLoading => ({
  type: 'SET_IS_LOADING',
  payload: isLoading,
});

export const FETCH_ORDERS = () =>
  async (dispatch) => {
    dispatch(SET_IS_LOADING(true));

    await getOrders()
      .then(res => res.data)
      .then(data => {
        dispatch(SET_ORDERS(data));
      })
      .catch(err => console.log(err));

    dispatch(SET_IS_LOADING(false));
};
