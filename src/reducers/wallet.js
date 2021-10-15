import {
  IS_FETCHING,
  UPDATE_CURRENCIES,
  ADD_EXPENSE,
  UPDATE_TOTAL,
  DELETE_EXPENSE,
} from '../actions';

import sumExpenses from '../helpers/SumExpenses';

const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [],
  total: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IS_FETCHING:
    return { ...state, isFetching: !state.isFetching };

  case UPDATE_CURRENCIES:
    return { ...state, currencies: [action.payload] };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          ...action.payload,
        }],
    };

  case UPDATE_TOTAL:
    return { ...state, total: sumExpenses(state) }; // Faz spread do estado atual e sobrescreve apenas a chave totalc

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.payload),
    };

  default:
    return state;
  }
};

export default walletReducer;
