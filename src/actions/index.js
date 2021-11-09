export const addEmail = (email) => ({ type: 'ADD_EMAIL', email });

export const typeText = (type, payload) => ({ type, payload });

export const moeda = (payload) => ({ type: 'MOEDA', payload });

export const method = (payload) => ({ type: 'METHOD', payload });

export const tag = (payload) => ({ type: 'TAG', payload });

const exchangesTrue = (obj) => ({ type: 'ADD_DESPESAS', obj });

export function coins(object) {
  return async (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json())
    .then((r) => dispatch(exchangesTrue([{ ...object, exchangeRates: r }])));
}

export const deleteItem = (obj) => ({ type: 'DELET_ARRAY', obj });
