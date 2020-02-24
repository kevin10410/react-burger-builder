export const ADD_INGREDIENT = (ingredient) => ({
  type: 'ADD_INGREDIENT',
  payload: ingredient,
});

export const SUBSTRACT_INGREDIENT = (ingredient) => ({
  type: 'SUBSTRACT_INGREDIENT',
  payload: ingredient,
});

export const INIT_INGREDIENTS = () => ({
  type: 'INIT_INGREDIENTS',
});
