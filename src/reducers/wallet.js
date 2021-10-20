import { GET_MOEDAS, FAILED } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  if (action.type === GET_MOEDAS) {
    return { ...state, expenses: [...state.expenses, action.payload] };
  } if (action.type === FAILED) {
    return console.log();// o que colocar nesse retorno?
  } return state;
}

export default wallet;
