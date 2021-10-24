export const SALVA_EMAIL_LOGIN = 'SALVA_EMAIL_LOGIN';
export const REQUEST_MOEDAS = 'REQUEST_MOEDAS';

export const salvaEmailLogin = (payload) => (
  {
    type: SALVA_EMAIL_LOGIN, payload,
  });

export const requestMoedas = (payload) => (
  {
    type: REQUEST_MOEDAS, payload,
  });
