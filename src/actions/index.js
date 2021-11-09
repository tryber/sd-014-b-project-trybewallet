// Coloque aqui suas actions
export const LOGIN_INFO = 'LOGIN_INFO';

export function loginAction(payload) {
  return {
    type: LOGIN_INFO,
    payload,
  };
}
