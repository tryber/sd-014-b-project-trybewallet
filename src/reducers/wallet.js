import { GET_CURRENCY, EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        exchangeRates: state.currencies,
      }],
    };
  default:
    return state;
  }
}

export default wallet;
