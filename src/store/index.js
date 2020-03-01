import { 
  createStore,
  applyMiddleware, 
  combineReducers,
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

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

const sagaMiddleware = createSagaMiddleware();

const isDev = () => process.env.NODE_ENV === 'development';

const middlewares = isDev()
  ? [thunk, sagaMiddleware, logger]
  : [thunk, sagaMiddleware] ;

const store = createStore(
  reducers,
  applyMiddleware(
    ...middlewares,
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
