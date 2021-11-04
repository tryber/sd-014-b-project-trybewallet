export const SUBMIT_EXPENSES = 'SUBMIT_EXPENSES';

export function expansesSubmit(payload) {
  return {
    type: SUBMIT_EXPENSES,
    payload,
  };
}
