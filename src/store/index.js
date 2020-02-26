import { 
  createStore,
  applyMiddleware, 
  combineReducers,
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducerIngredients from './reducers/ingredients';
import reducerPrice from './reducers/price';
import reducerOrders from './reducers/orders';
import reducerLogin from './reducers/login';

const reducers = combineReducers({
  reducerIngredients,
  reducerPrice,
  reducerOrders,
  reducerLogin,
});

const isDev = () => process.env.NODE_ENV === 'development';

const middlewares = [
  thunk,
  isDev() && logger, 
];

const store = createStore(
  reducers,
  applyMiddleware(
    ...middlewares,
  ),
);

export default store;
