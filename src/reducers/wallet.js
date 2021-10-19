// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, FAILED_REQUEST, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      wallet: {
        currencies: action.payload,
      },
    };
  case ADD_EXPENSE:
    return {
      ...state,
      // expenses: [...state.expenses, ...action.payload],
      expenses: action.payload,
    };
  case FAILED_REQUEST:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};

export default wallet;

// [{
//   id: 0,
//   value: action.payload.value,
//   description: action.payload.description,
//   currency: action.payload.currency,
//   method: action.payload.method,
//   tag: action.payload.tag,
//   exchangeRates: {},
// }],
