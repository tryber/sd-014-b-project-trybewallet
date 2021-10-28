import { API_EXPENSES, DELETE_EXPENSE, UPDATE_TOTAL } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const updateTotal = (state) => {
  const { expenses } = state;
  return expenses.reduce((acc, { value, exchangeRates, currency }) => (
    acc + (parseFloat(value) * parseFloat(exchangeRates[currency].ask))
  ), 0);
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case 'RESULTADO_API':
    return {
      ...state,
      currencies: Object.keys(action.payload),
    };
  case API_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case UPDATE_TOTAL:
    return { ...state, total: updateTotal(state) };
  case DELETE_EXPENSE:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default wallet;
