import { GET_CURRENCY, FAILED_REQUEST, ADD_EXPENSE } from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [{
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    /* exchangeRates: {
      USD: {
        code: 'USD',
        name: 'Dólar comercial',
        ask: 0,
      },
    }, */
  }],
  loading: true,
  error: '',
};

/* {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
} */

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      loading: true,
      error: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default walletReducer;
