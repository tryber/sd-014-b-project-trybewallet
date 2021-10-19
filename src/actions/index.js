// Coloque aqui suas actions
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export function submitLogin(payload) {
  return {
    type: SUBMIT_LOGIN,
    payload,
  };
}
