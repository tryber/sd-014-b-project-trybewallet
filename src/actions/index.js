// Coloque aqui suas actions
export const SEND_EMAIL = 'SEND_EMAIL';
export const SEND_RATES = 'SEND_RATES';

export const getEmail = (payload) => ({
  type: SEND_EMAIL, payload,
});

export const getRates = (payload) => ({
  type: SEND_RATES, payload,
});
