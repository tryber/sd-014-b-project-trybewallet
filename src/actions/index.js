// Coloque aqui suas user's actions
export const SET_EMAIL = 'SET_EMAIL';
// wallet actions
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
// actions assincronas
export const FETCH_CURRENCY = 'FETCH_CURRENCY';

export const setEmailGlobal = (email) => ({ type: SET_EMAIL, email });

export const setExpenseGlobal = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});
