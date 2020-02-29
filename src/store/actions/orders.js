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

export const FETCH_ORDERS = () => ({
  type: 'FETCH_ORDERS',
});

export const POST_ORDER = orderInfo => ({
  type: 'POST_ORDER',
  payload: orderInfo,
});
