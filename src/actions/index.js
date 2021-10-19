import requestCurrency from '../Api/api';

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const loginAction = (email) => ({ type: 'LOGIN', email });

export function addExpenses(state) {
  return async (dispatch) => {
    const data = await requestCurrency();
    const expenses = [{
      ...state,
      exchangeRates: data,
    }];
    dispatch({ type: ADD_EXPENSES, expenses });
  };
}
