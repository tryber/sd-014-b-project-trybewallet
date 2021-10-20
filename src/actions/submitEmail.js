export const SUBMIT_EMAIL = 'SUBMIT_EMAIL';

export function emailSubmit(payload) {
  return {

    type: SUBMIT_EMAIL,
    payload,
  };
}
