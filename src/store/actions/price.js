export const ADD_PRICE = (price) => ({
  type: 'ADD_PRICE',
  payload: price,
});

export const SUBSTRACT_PRICE = (price) => ({
  type: 'SUBSTRACT_PRICE',
  payload: price,
});

export const INIT_PRICE = () => ({
  type: 'INIT_PRICE',
});
