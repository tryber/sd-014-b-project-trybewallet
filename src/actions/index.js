/**
 * Consultei o repositorio da atividade exercise-forms-redux
 * para compreender a logica necessaria para criar uma action
 * Ref: https://github.com/andersonleite1/exercise-forms-redux/blob/gabarito.2/src/redux/action/action.js
 */

export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_WALLET_DATA = 'SET_WALLET_DATA';
export const SET_SPENT_TOTAL = 'SET_SPENT_TOTAL';
export const UPDATE_SPENT_TOTAL = 'UPDATE_TOTAL';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';

export const setUserData = (payload) => (
  {
    type: SET_USER_DATA, payload,
  });

export const setWalletData = (payload) => (
  {
    type: SET_WALLET_DATA, payload,
  });

export const setSpentTotal = (payload) => (
  {
    type: SET_SPENT_TOTAL, payload,
  });

export const updateSpentTotal = () => ({
  type: UPDATE_SPENT_TOTAL,
});

export const updateExpenses = (payload) => ({
  type: UPDATE_EXPENSES, payload,
});
