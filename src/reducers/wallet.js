// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES, SET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return { ...state,
      data: action.payload,
      currencies: Object.keys(action.payload).filter((element) => element !== 'USDT') };
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, exchangeRates: state.data }] };
  default:
    return state;
  }
}

export default wallet;
