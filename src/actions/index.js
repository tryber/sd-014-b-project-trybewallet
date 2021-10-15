// Coloque aqui suas actions
export const SEND_EMAIL = 'SEND_EMAIL';

export const getEmail = (payload) => ({
  type: SEND_EMAIL, payload,
});
