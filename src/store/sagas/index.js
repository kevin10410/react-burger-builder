import { all } from 'redux-saga/effects';

import loginSaga from './loginSaga';
import ordersSaga from './ordersSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    ordersSaga(),
  ]);
};
