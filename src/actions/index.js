import getCurrencies from '../services/economiaAPI';

export const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';
export const DELIVER_CURRENCIES = 'DELIVER_CURRENCIES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const REDUCE_TOTAL = 'REDUCE_TOTAL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const addNewExpense = (object) => ({
  type: ADD_NEW_EXPENSE,
  expenses: object,
});

export const deliverCurrencies = (object) => ({
  type: DELIVER_CURRENCIES,
  currencies: object,
});

export const editExpenses = (object) => ({
  type: EDIT_EXPENSES,
  expenses: object,
});

export const loginSuccessful = (value) => ({
  type: LOGIN_SUCCESSFUL,
  value,
});

export const reduceTotal = (value) => ({
  type: REDUCE_TOTAL,
  total: value,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const fetchEconomiaAPI = () => (dispatch) => {
  dispatch(requestCurrencies());

  getCurrencies()
    .then((object) => {
      const filteredObject = Object.entries(object)
        .filter((currency) => currency[0] !== 'USDT');
      dispatch(deliverCurrencies(filteredObject));
    });
};
