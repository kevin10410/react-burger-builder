import {
  getOrders,
  postOrder,
} from '../../api/orderService.js';

export const SET_ORDERS = orders => ({
  type: 'SET_ORDERS',
  payload: orders,
});

export const SET_IS_LOADING = isLoading => ({
  type: 'SET_IS_LOADING',
  payload: isLoading,
});

export const SET_IS_PURCHASED = isPurchased => ({
  type: 'SET_IS_PURCHASED',
  payload: isPurchased,
});

export const FETCH_ORDERS = () =>
  async dispatch => {
    dispatch(SET_IS_LOADING(true));

    await getOrders()
      .then(res => res.data)
      .then(data => {
        dispatch(SET_ORDERS(data));
      })
      .catch(err => console.log(err));

    dispatch(SET_IS_LOADING(false));
};

export const POST_ORDER = (orderInfo) =>
  async dispatch => {
    dispatch(SET_IS_LOADING(true));
    dispatch(SET_IS_PURCHASED(false));

    await postOrder(orderInfo)
      .then(() => {
        dispatch(SET_IS_PURCHASED(true));
      })
      .catch(err => console.log(err));

    dispatch(SET_IS_LOADING(false));
  };
  