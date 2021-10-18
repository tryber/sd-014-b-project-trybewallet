// Coloque aqui suas actions
export const SEND_LOGIN = 'SEND_LOGIN';

export const sendLogin = (email) => ({
  type: SEND_LOGIN, email,
});
