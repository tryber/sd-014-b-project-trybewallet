import { REQUEST_MOEDAS, ADICIONAR_DESPESA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_MOEDAS:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADICIONAR_DESPESA:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.payload,
        }],
    };
  default:
    return state;
  }
};

export default wallet;
