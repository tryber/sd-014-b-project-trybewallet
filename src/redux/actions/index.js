// Coloque aqui suas actions
export const SAVE_INPUT_EMAIL = 'SAVE_INPUT_EMAIL';
export const EXPENSES_OBJ_GLOBAL = 'EXPENSES_OBJ_GLOBAL';

export const saveEmailInState = (payload) => ({
  type: SAVE_INPUT_EMAIL,
  payload,
});

export const saveExpensesInState = (payload) => ({
  type: EXPENSES_OBJ_GLOBAL,
  payload,
});
