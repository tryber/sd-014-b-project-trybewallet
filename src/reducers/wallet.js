// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSES,
  EXCLUDE_EXPENSES,
  GET_OBJ_CURRENCY,
  LOADING,
  EDIT_EXPENSE,
  SAVE_EDIT_EXPENSE,
  GET_CODE_CURRENCY } from '../actions';

const INITIAL_STATE = {
  isLoading: true,
  objectCurrencies: [],
  currencies: [],
  expenses: [],
  id: 0,
  edited: false,
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_CODE_CURRENCY:
    return {
      ...state,
      currencies: payload,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case LOADING:
    return {
      ...state,
      isLoading: false,
    };
  case EXCLUDE_EXPENSES:
    return {
      ...state,
      expenses: [...payload],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      id: payload,
      edited: true,
    };
  case SAVE_EDIT_EXPENSE:
    return {
      ...state,
      expenses: [...payload],
      edited: false,
    };
  case GET_OBJ_CURRENCY:
    return {
      ...state,
      objectCurrencies: payload,
    };
  default:
    return state;
  }
};

export default wallet;

// Props
// estado global
// condição
