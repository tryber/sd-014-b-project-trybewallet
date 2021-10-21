import { GET_MOEDAS, FAILED, ADD_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  if (action.type === ADD_CURRENCIES) {
    return { ...state, currencies: action.payload };
  }
  if (action.type === GET_MOEDAS) {
    return { ...state, expenses: [...state.expenses, action.payload] };
  } if (action.type === FAILED) {
    return action.payload;
  } return state;
}

export default wallet;
