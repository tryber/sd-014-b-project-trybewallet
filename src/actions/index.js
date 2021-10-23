// Coloque aqui suas actions
export const LOGIN_USER = 'RECEIVE_LOGIN_USER';

export const user = (payload) => ({
  type: LOGIN_USER,
  payload,
});
