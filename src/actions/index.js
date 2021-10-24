export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const loginDone = (email) => ({
  type: LOGIN,
  email,
});

export const addExpense = (allState) => ({
  type: ADD_EXPENSE,
  allState,
});
