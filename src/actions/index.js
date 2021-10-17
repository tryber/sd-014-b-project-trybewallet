async function fetchApi(URL) {
  const response = await fetch(URL);
  return response.json();
}

export function getConversion(expenses) {
  return expenses.reduce((acc, { value, currency, exchangeRates }) => {
    const currencyItem = Object.entries(exchangeRates)
      .find((item) => item[1].code === currency);
    acc.push(+(currencyItem[1].ask) * +(value));
    return acc;
  }, []);
}

export const LOGIN_ACT = (value) => ({ type: 'LOGIN', value });

const GET_CURRENCIES = (value) => ({ type: 'GET_CURRENCIES', value });

const CURRENCY_LOADED = () => ({ type: 'CURRENCY_LOADED' });

const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export function LOAD_CURRENCIES() {
  return async (dispatch) => {
    const result = await fetchApi(API_URL);
    const values = Object.keys(result).filter((item) => item !== 'USDT');
    dispatch(GET_CURRENCIES(values));
    return dispatch(CURRENCY_LOADED());
  };
}

//

function sortExpenses(state) {
  return state.map((item, ind) => {
    item.id = ind;
    return item;
  });
}

const EXPENSE_CREATE = () => ({ type: 'EXPENSE_CREATE' });

const EXPENSE_ENTRY = (value) => ({ type: 'EXPENSE_ENTRY', value });

export function EXPENSE_DISPATCH(previousExpenses, newExpense) {
  return async (dispatch) => {
    const expensesResult = previousExpenses;
    dispatch(EXPENSE_CREATE());
    const exchangeRates = await fetchApi(API_URL);
    const expense = { ...newExpense, exchangeRates };
    expensesResult.push(expense);
    return dispatch(EXPENSE_ENTRY(sortExpenses(expensesResult)));
  };
}

export const DELETE_EXPENSE = (value) => ({ type: 'DELETE_EXPENSE', value });
