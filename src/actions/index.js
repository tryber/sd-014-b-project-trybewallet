// Coloque aqui suas actions

export const LOGIN = 'LOGIN';

export function userLogin(email, password) {
  return {
    type: LOGIN,
    email,
    password,
  };
}
