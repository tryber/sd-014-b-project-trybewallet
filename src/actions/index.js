const LOGIN = 'LOGIN';
const ADD_EXPENSE = 'ADD_EXPENSE';
const ADD_CURRENCY = 'ADD_CURRENCY';

export function login(email) {
  return {
    type: LOGIN,
    email,
  };
}

export function addExpense(expense) {
  return {
    type: ADD_EXPENSE,
    expense,
  };
}

export function addCurency(currency) {
  return {
    type: ADD_CURRENCY,
    currency,
  };
}
