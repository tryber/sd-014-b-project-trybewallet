import requestCurrency from '../Api/api';

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const loginAction = (email) => ({ type: 'LOGIN', email });

export function addExpenses(state, actualExpense) {
  return async (dispatch) => {
    const data = await requestCurrency();
    const expenses = [

      ...actualExpense,

      {
        ...state,
        exchangeRates: data,
      },
    ];
    dispatch({ type: ADD_EXPENSES, expenses });
  };
}
