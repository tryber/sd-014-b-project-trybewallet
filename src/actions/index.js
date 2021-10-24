export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_WALLET_EXPENSES = 'SUBMIT_WALLET_EXPENSES';
export const SUBMIT_WALLET_CURRENCIES = 'SUBMIT_WALLET_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const ADD_EDIT_EXPENSE = 'ADD_EDIT_EXPENSE';

export const actionRegisterUser = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});

export const actionSetExpenses = (expense, response) => ({
  type: SUBMIT_WALLET_EXPENSES,
  expense,
  response,
});

export const actionSetCurrencies = (currencies) => ({
  type: SUBMIT_WALLET_CURRENCIES,
  currencies,
});

export const actionDeleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const actionEditExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const actionAddEditExpense = (payload) => ({
  type: ADD_EDIT_EXPENSE,
  payload,
});

export function requestExchange(expense) {
  return async (dispatch) => {
    try {
      const response = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
      dispatch(actionSetExpenses(expense, response));
    } catch (error) {
      console.log(error);
    }
  };
}

export function requestCurrencies() {
  return async (dispatch) => {
    const obj = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    const result = Object.keys(obj).filter((item) => item !== 'USDT');
    dispatch(actionSetCurrencies(result));
  };
}
