import {
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../actionTypes';

const initState = {
  token: null,
  userId: null,
  isLoading : false,
};

const reducerLogin = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        userId: payload.id,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducerLogin;