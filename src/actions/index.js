// Coloque aqui suas actions

export const SEND_LOGIN = 'SEND_PERSONAL_FORM';
export const SEND_RATES = 'SEND_EXCHANGE_RATES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const sendLogin = (email) => ({
  type: SEND_LOGIN, email,
});

export const exchangeRating = (rates) => ({
  type: SEND_RATES, rates,
});

export const deleteExpenses = (id) => ({
  type: DELETE_EXPENSE, id,
});
