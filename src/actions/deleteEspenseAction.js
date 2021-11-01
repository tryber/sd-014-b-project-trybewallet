export const DELETE_ESPENSE = 'DELETE_ESPENSE';

export const deleteExpense = (payload) => ({
  type: DELETE_ESPENSE,
  payload,
});
