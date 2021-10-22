export const USER_DATA = 'USER_DATA';
export const USER_WALLET = 'USER_WALLET';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const ADD_BUTTON = 'ADD_BUTTON';
export const EXPENSE_WALLET = 'EXPENSE_WALLET';

export const userLogin = (payload) => ({
  type: USER_DATA,
  email: payload.email,
});

export function userWallet(payload) {
  return {
    type: USER_WALLET,
    coins: payload,
  };
}

export function expenseWallet(payload) {
  return {
    type: EXPENSE_WALLET,
    object: payload,
  };
}

export function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    error,
  };
}

export function addButton(expenses) {
  return {
    type: ADD_BUTTON,
    expenses,
  };
}

export function fetchDataCoins() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      return dispatch(userWallet(data));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
