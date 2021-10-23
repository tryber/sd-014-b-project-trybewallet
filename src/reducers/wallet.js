// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SEND_WALLET_INFO, SEND_EXPENSE_INFO } from '../actions';

const INITIAL_STATE = {
  walletInfo: {
    value: 0,
  },
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_WALLET_INFO:
    return { ...state,
      walletInfo: action.walletInfo,
    };
  case SEND_EXPENSE_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  default:
    return state;
  }
};

export default walletReducer;
