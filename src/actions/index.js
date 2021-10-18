// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const loginSaveEmail = (email) => ({
  type: LOGIN,
  email,
});
