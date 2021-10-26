export const SUBMIT_TOTAL = 'SUBMIT_TOTAL';

export function totalSubmit(payload) {
  return {

    type: SUBMIT_TOTAL,
    payload,
  };
}
