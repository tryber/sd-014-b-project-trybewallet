// Coloque aqui suas actions
export const login = (value) => ({ type: 'LOGIN', data: value });
export const addExpense = (value) => ({ type: 'EXPENSE', value });
export const editExpense = (value) => ({ type: 'EDIT', value });
export const removeExpense = (value) => ({ type: 'REMOVE', value });
