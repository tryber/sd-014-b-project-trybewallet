// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_MOUNT } from '../actions';

const INITIAL_STATE = {
  total: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_MOUNT:
    return {
      total: action.wallet.total,
    };
  default:
    return state;
  }
}

export default wallet;
