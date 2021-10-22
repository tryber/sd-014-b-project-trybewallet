// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FAILED_REQUEST, USER_WALLET, ADD_BUTTON } from '../actions';

const INITIAL_WALLET_STATE = {
  coins: [],
  expenses: [],
  exchangeRates: {},
};

export default function wallet(state = INITIAL_WALLET_STATE, action) {
  switch (action.type) {
  case 'wallet':
    return { ...state };
  case USER_WALLET:
    return {
      ...state,
      coins: Object.keys(action.coins).filter((moeda) => moeda !== 'USDT'),
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: action.payload,
    };
  case ADD_BUTTON:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          value: action.expenses.valor,
          description: action.expenses.descricao,
          currency: action.expenses.moeda,
          method: action.expenses.metodo,
          tag: action.expenses.tag,
          exchangeRates: action.expenses.exchangeRates,
        },
      ],
    };
  default:
    return state;
  }
}
