export const SALVA_EMAIL_LOGIN = 'SALVA_EMAIL_LOGIN';
export const REQUEST_MOEDAS = 'REQUEST_MOEDAS';
export const ADICIONAR_DESPESA = 'ADICIONAR_DESPESA';

export const salvaEmailLogin = (payload) => (
  {
    type: SALVA_EMAIL_LOGIN, payload,
  });

export const requestMoedas = (payload) => (
  {
    type: REQUEST_MOEDAS, payload,
  });

export const adicionarDespesa = (payload) => (
  {
    type: ADICIONAR_DESPESA, payload,
  }
);
