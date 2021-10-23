// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { API_MOEDAS } from '../actions';

const INITIAL_STATE = {
  moedas: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_MOEDAS:
    return { ...state,
      moedas: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
