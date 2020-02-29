export const LOGIN = userInfo => ({
  type: 'LOGIN',
  payload: userInfo,
});

export const LOGIN_START = () => ({
  type: 'LOGIN_START',
});

export const LOGIN_SUCCESS = config => ({
  type: 'LOGIN_SUCCESS',
  payload: config,
});

export const LOGOUT = () => ({
  type: 'LOGOUT',
});

export const LOGOUT_SUCCESS = () => ({
  type: 'LOGOUT_SUCCESS',
});

export const CHECK_TOKEN = () => ({
  type: 'CHECK_TOKEN',
});
