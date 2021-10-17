// Coloque aqui suas actions

export const emailAction = (payload) => ({ type: 'EMAIL', payload });

export const requestApi = () => ({ type: 'REQUEST_API' });

export const receiveApi = (coins) => ({ type: 'RECEIVE_API', coins });

export function fetchApi() {
  return async (dispatch) => {
    dispatch(requestApi());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json()
        .then((coins) => dispatch(receiveApi(coins))));
  };
}

export const currenciesAction = (payload) => ({ type: 'CURRENCIES', payload });

export const expensesAction = (payload) => ({ type: 'EXPENSES', payload });
