import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_ORDERS,
  POST_ORDER,
} from '../actionTypes';

import {
  SET_ORDERS,
  SET_IS_LOADING,
  SET_IS_PURCHASED,
} from '../actions/orders';

import {
  getOrders,
  postOrderInfo,
} from '../../api/orderService';


function* fetchOrders(action) {
  yield put(SET_IS_LOADING(true));

  try {
    const { data } = yield call(getOrders);
    yield put(SET_ORDERS(data));

  } catch (err) {
    console.log(err);
  }

  yield put(SET_IS_LOADING(false));
};

function* postOrder(action) {
  yield put(SET_IS_LOADING(true));
  yield put(SET_IS_PURCHASED(false));

  try {
    yield call(postOrderInfo, action.payload);
    yield put(SET_IS_PURCHASED(true));

  } catch (err) {
    console.log(err);
  }

  yield put(SET_IS_LOADING(false));
};

export default function* ordersSaga() {
  yield takeEvery(FETCH_ORDERS, fetchOrders);
  yield takeEvery(POST_ORDER, postOrder);
};
