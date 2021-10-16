// Coloque aqui suas actions

export const emailAction = (payload) => ({
  type: 'EMAIL',
  payload,
});

export const currenciesAction = (payload) => ({ type: 'CURRENCIES', payload });
export const expensesAction = (payload) => ({ type: 'EXPENSES', payload });
