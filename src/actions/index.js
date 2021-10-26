import fetchCurrencies from '../services';

export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const CREATE_EXPENSE = 'CREATE_EXPENSE';

export function updateUserInfo(payload) {
  return {
    type: UPDATE_USER_INFO,
    payload,
  };
}

function requestCurrencies() {
  return {
    type: REQUEST_CURRENCIES,
  };
}

function getCurrencies(payload) {
  return {
    type: GET_CURRENCIES,
    payload,
  };
}

function createExpense(payload) {
  return {
    type: CREATE_EXPENSE,
    payload,
  };
}

export function addExpense(payload) {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    const data = await fetchCurrencies();
    dispatch(getCurrencies(data));
    dispatch(createExpense(payload));
  };
}
