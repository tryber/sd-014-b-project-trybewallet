// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCY,
  ERROR_CURRENCY,
  ERROR_EXPENSES,
  GET_EXPENSES,
  // SET_INFOS,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: '0',
  error: null,
  isLoading: true,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return { ...state, currencies: action.state, error: null, isLoading: false };
  case ERROR_CURRENCY:
    return { ...state, error: action.error, isLoading: false };
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.state.expense },
      ],
      total: (+state.total + +action.state.total).toFixed(2),
      error: '',
    };
  case ERROR_EXPENSES:
    return { ...state, error: action.error };
  default: return state;
  }
};

export default wallet;
