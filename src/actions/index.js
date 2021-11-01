// Coloque aqui suas actions
export const LOGIN_USER = 'RECEIVE_LOGIN_USER';

export const LOAD_API = 'RECEIVE_LOAD_API';

export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const UPDATE_RATES = 'UPDATE_RATES';

export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const user = (payload) => ({
  type: LOGIN_USER,
  payload,
});

// // função da aula do Vitu
// export function failedRequest(payload) {
//   return {
//     type: FAILED_REQUEST,
//     payload,
//   };
// }

export const apiRequest = (payload) => ({
  type: LOAD_API,
  payload,
});

export const updateRates = (payload) => ({
  type: UPDATE_RATES,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});

export function getFetchAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(apiRequest(data));
  };
}

export function getUpdataAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(updateRates(data));
  };
}

export const saveExpenses = (payload) => ({
  type: SAVE_EXPENSES,
  payload,
});
