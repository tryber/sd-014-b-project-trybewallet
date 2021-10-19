// Coloque aqui suas actions

export const LOGIN = 'LOGIN';

export const userLogin = (email) => ({
  type: LOGIN,
  payload: email,
});
