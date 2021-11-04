// Coloque aqui suas actions
export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const submitUser = (payload) => ({
  type: SUBMIT_USER_INFO,
  payload,
});
