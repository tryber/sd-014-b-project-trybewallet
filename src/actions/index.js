// Coloque aqui suas actions
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export function submitLogin(email) {
  return {
    type: SUBMIT_LOGIN,
    email,
  };
}
