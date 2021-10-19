export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export function userLogin(email, password) {
  return {
    type: LOGIN,
    email,
    password,
  };
}

export function addExpenseAct(expense) {
  return {
    type: ADD_EXPENSE,
    ...expense,
  };
}
