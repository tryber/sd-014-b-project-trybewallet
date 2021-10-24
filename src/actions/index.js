export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const USER = 'USER';

export const user = (payload) => ({
  type: LOGIN,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const userAction = (payload) => ({
  type: USER,
  payload,
});
