// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET__EXPENSES, WALLET__CURRENCIES, WALLET__ID } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  idToEdit: 0,
  currencyToExchange: 'BRL',
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET__EXPENSES:
    return { ...state, expenses: action.payload };
  case WALLET__CURRENCIES:
    return { ...state, currencies: action.payload };
  case WALLET__ID:
    return { ...state, idToEdit: action.payload };
  default:
    return state;
  }
};

export default wallet;
