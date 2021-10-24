// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { LOADING, RECEIVE_AWESOME_API_SUCESS, SET_EXPENSES } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_AWESOME_API_SUCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case LOADING:
    return {
      ...state,
      loading: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
