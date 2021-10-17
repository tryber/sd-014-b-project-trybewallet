export const SET_USER_EMAIL_VALUE = 'SET_USER_EMAIL_VALUE';
export const SET_USER_PASSWORD_VALUE = 'SET_USER_PASSWORD_VALUE';

// actions creators
export const setUserEmailValue = (payload) => ({
  type: SET_USER_EMAIL_VALUE,
  payload,
});

export const setUserPasswordValue = (payload) => ({
  type: SET_USER_PASSWORD_VALUE,
  payload,
});
