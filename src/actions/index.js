export const GET_EMAIL = 'SUBMIT_EMAIL';
export const SUBMIT_VALUE = 'SUBMIT_VALUE';

export function getEmail(payloadEmail) {
  return {
    type: GET_EMAIL,
    payloadEmail,
  };
}

export function submitValue(payloadValue) {
  return {
    type: SUBMIT_VALUE,
    payloadValue,
  };
}
