// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_AWESOME_API_SUCESS } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_AWESOME_API_SUCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
