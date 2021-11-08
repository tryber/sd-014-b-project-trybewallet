export const SAVE_EMAIL = 'SAVE_EMAIL';
export const IS_FETCHING = 'IS_FETCHING';
export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const saveEmailAction = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const getCurrencies = (payload) => ({
  type: UPDATE_CURRENCIES,
  payload,
});

export const isFetching = (status) => ({
  type: IS_FETCHING,
  payload: status,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const updateTotal = () => ({
  type: UPDATE_TOTAL,
});

export const deleteExpense = () => ({
  type: DELETE_EXPENSE,
});

export const fetchCurrencies = () => (
  async (dispatch) => {
    dispatch(isFetching(true));
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      if (!response.ok) throw new Error('Erro ao realizar requisição.');
      const data = await response.json();
      delete data.USDT;
      dispatch(getCurrencies(data));
      dispatch(isFetching(false));
    } catch (error) {
      dispatch(isFetching(false));
    }
  }
);
