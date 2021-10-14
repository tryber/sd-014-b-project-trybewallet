// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Requisito 7 e 8
import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR,
  EXPENSES_USER,
  EXPENSES_USER_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isFetching: false,
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isFetching: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      isFetching: false,
      currencies: Object.keys(action.payload),
    };
  case REQUEST_API_ERROR:
    return {
      ...state,
      isFetching: false,
      currencies: Error,
    };
  case EXPENSES_USER:
    return {
      ...state,
      isFetching: false,
    };
  case EXPENSES_USER_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: action.id,
          ...action.expenseStateInfo,
          exchangeRates: action.dataApi,
        },
      ],
    };
  default:
    return state;
  }
}

export default wallet;
