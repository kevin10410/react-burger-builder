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

const reducers = combineReducers({
  reducerIngredients,
  reducerPrice,
  reducerOrders,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
