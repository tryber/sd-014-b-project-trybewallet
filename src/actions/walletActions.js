export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCY = 'ADD_CURRENCY';

export function addExpense(payload) {
  return {
    type: ADD_EXPENSE,
    expense: payload,
  };
}

export function addCurency(payload) {
  return {
    type: ADD_CURRENCY,
    currency: payload,
  };
}
