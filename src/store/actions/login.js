import { login } from '../../api/loginService';
import {
  setCookie,
} from '../../utils/cookieUtils';

const LOGIN_START = () => ({
  type: 'LOGIN_START',
});

const LOGIN_SUCCESS = config => ({
  type: 'LOGIN_SUCCESS',
  payload: config,
});

export const LOGOUT = () => ({
  type: 'LOGOUT',
});

export const LOGIN = loginInfo =>
  async dispatch => {
    dispatch(LOGIN_START());

    await login(loginInfo)
      .then(res => res.data)
      .then(data => {
        setCookie('burgerId', data.id);
        setCookie('burgerToken', data.token);
        dispatch(LOGIN_SUCCESS(data));
      })
      .catch((err) => console.log(err));
  };
