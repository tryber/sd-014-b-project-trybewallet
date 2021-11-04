export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export function deleteExpenses(payload) {
  return {
    type: DELETE_EXPENSES,
    payload,
  };
}
