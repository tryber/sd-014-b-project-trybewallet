export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCY = 'GET_CURRENCY';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export function addExpense(payload) {
  return {
    type: ADD_EXPENSE,
    payload,
  };
}

export function deleteExpense(payload) {
  return {
    type: DELETE_EXPENSE,
    payload,
  };
}

export function getCurency(payload) {
  return {
    type: GET_CURRENCY,
    payload,
  };
}

export function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error,
  };
}

export function fetchCurrency() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      return dispatch(getCurency(data));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  };
}
