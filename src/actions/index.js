export const GET_EMAIL = 'SUBMIT_EMAIL';

export function getEmail(payloadEmail) {
  return {
    type: GET_EMAIL,
    payloadEmail,
  };
}
