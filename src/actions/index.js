import fetchQuotes from '../services';

export const SAVE_USER = 'SAVE_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const saveUser = (payload) => ({
  type: SAVE_USER, payload,
});

export const saveCurrencies = (payload) => ({
  type: SAVE_CURRENCIES,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const saveCurrenciesThunk = () => async (dispatch) => {
  try {
    const data = await fetchQuotes();
    delete data.USDT;
    return dispatch(saveCurrencies(data));
  } catch (error) {
    console.error(error.message);
  }
};
