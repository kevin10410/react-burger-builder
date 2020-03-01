import { put, call, takeEvery } from 'redux-saga/effects';

import {
  LOGIN,
  LOGOUT,
  CHECK_TOKEN,
} from '../actionTypes';

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from '../actions/login';

import {
  getCookie,
  setCookie,
  deleteCookie,
} from '../../utils/cookieUtils';

import { userLogin } from '../../api/loginService';

function* checkToken() {
  const id = getCookie('burgerId');
  const token = getCookie('burgerToken');
  if (token !== null && id !== null) {
    yield put(LOGIN_SUCCESS({ id, token }));
  }
};

function* logout() {
  yield deleteCookie('burgerId');
  yield deleteCookie('burgerToken');
  yield put(LOGOUT_SUCCESS());
};

function* login(action) {
  yield put(LOGIN_START());

  try {
    const { data } = yield call(userLogin, action.payload);
    yield setCookie('burgerId', data.id);
    yield setCookie('burgerToken', data.token);
    yield put(LOGIN_SUCCESS(data));
  } catch (err) {
    console.log(err);
    yield put(LOGIN_FAIL());
  }
};

export default function* loginSaga() {
  yield takeEvery(LOGOUT, logout);
  yield takeEvery(CHECK_TOKEN, checkToken);
  yield takeEvery(LOGIN, login);
};
