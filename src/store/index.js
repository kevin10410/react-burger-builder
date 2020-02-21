import { 
  createStore,
  applyMiddleware, 
  combineReducers,
} from 'redux';

import logger from 'redux-logger';

import reducerIngredients from './reducers/ingredients';
import reducerPrice from './reducers/price';

const reducers = combineReducers({
  reducerIngredients,
  reducerPrice,
});

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;
