import { REQUEST_MOEDAS } from '../actions';

const INITIAL_STATE = {
  moedas: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_MOEDAS:
    return {
      ...state,
      moedas: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
