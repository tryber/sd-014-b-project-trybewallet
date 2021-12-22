export const SAVE_LOGIN_DATA = 'SAVE_LOGIN_DATA';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';

export const saveLoginData = (payload) => ({
  type: SAVE_LOGIN_DATA, payload,
});

export const receiveExpenses = (payload) => ({
  type: RECEIVE_EXPENSES, payload,
});

const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY, currency,
});

const failedRequest = (error) => ({
  type: FAILED_REQUEST, error,
});

export const removeExpenses = (payload) => ({
  type: REMOVE_EXPENSES, payload,
});

export const editExpenses = (payload) => ({
  type: EDIT_EXPENSES, payload,
});

export const updateExpenses = (payload) => ({
  type: UPDATE_EXPENSES, payload,
});

export function fetchCurrency() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      return dispatch(receiveCurrency(data));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
