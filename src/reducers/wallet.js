// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SEND_WALLET_INFO } from '../actions';

const INITIAL_STATE = {
  walletInfo: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_WALLET_INFO:
    console.log(action.walletInfo);
    return { ...state,
      walletInfo: action.walletInfo,
    };

  default:
    return state;
  }
};

export default walletReducer;
