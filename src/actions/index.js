// Coloque aqui suas actions

export const emailAction = (payload) => ({
  type: 'EMAIL',
  payload,
});

export const currenciesAction = (state) => ({ type: 'CURRENCIES', state });
export const expensesAction = (state) => ({ type: 'EXPENSES', state });
