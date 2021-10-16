export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';

export const setUserEmail = (payload) => ({
  type: SET_USER_EMAIL,
  payload,
});
export const setUserPassword = (payload) => ({
  type: SET_USER_PASSWORD,
  payload,
});
