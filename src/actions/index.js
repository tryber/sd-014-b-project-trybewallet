export const SET_LOGIN = 'SET_LOGIN';
export const SET_WALLET = 'SET_WALLET';
export const SET_EXPENSE = 'SET_EXPENSE';

export const setLogin = (payload) => (
  {
    type: SET_LOGIN, payload,
  }
);

export const setExpense = (payload) => (
  {
    type: SET_EXPENSE, payload,
  }
);
