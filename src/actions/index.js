export const SUBMIT_EMAIL = 'SUBMIT_EMAIL';

export function emailSubmit(payloadEmail) {
  return {
    type: SUBMIT_EMAIL,
    payloadEmail,
  };
}
