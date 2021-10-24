export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const loginDone = (email) => ({
  type: LOGIN,
  email,
});
