export const SALVA_EMAIL_LOGIN = 'SALVA_EMAIL_LOGIN';
export const API_MOEDAS = 'API_MOEDAS';

export const salvaEmailLogin = (payload) => (
  {
    type: SALVA_EMAIL_LOGIN, payload,
  });

export const apiMoeda = (payload) => ({ type: API_MOEDAS, payload });
