// Coloque aqui suas actions
export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE';

export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';

// payload é o que recebo na  action que vai alterar no reducer e na store
export const setLoginValue = (payload) => ({
  type: SET_LOGIN_VALUE, payload });

export const setPasswordValue = (payload) => ({
  type: SET_PASSWORD_VALUE, payload });

export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES, payload });

export const setExpense = (expenses) => ({
  type: SET_EXPENSES,
  payload: { expenses },
});

// Ação para informar que a requisição da api começou
/* export const requestDataMoeda = () => ({
  type: REQUEST_DATA_MOEDA,
}); */

// Ação para informar que a requisição da api terminou
/* export const receiveDataMoeda = (moeda) => ({
  type: RECEIVE_DATA_MOEDA_SUCESS,
  moeda,
}); */
