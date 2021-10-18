export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';

export const setLoginValue = (payload) => ({
  type: SET_LOGIN_VALUE,
  email: payload.email,
});
