export const SALVA_EMAIL_LOGIN = 'SALVA_EMAIL_LOGIN';
export const REQUEST_MOEDAS = 'REQUEST_MOEDAS';
export const ADICIONAR_DESPESA = 'ADICIONAR_DESPESA';
export const SOMAR_VALOR = 'SOMAR_VALOR';

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

export function apiExchange() {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((resposta) => resposta.json());
}

export const somarValor = (payload) => (
  {
    type: SOMAR_VALOR, payload,
  }
);
