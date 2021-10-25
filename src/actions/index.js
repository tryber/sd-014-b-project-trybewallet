// Coloque aqui suas actions

export const SAVE_USER = 'SAVE_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const walletAction = (state) => ({ type: ADD_EXPENSE, state });

export const userAction = (state) => ({ type: SAVE_USER, state });
