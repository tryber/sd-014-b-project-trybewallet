// Coloque aqui suas actions

export const SEND_LOGIN = 'SEND_PERSONAL_FORM';

export const sendLogin = (email) => ({
  type: SEND_LOGIN, email,
});
