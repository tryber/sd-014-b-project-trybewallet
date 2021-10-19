// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FAILED_REQUEST, USER_WALLET } from '../actions';

const INITIAL_WALLET_STATE = {
  coins: [],
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
  default:
    return state;
  }
}
