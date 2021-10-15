// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    total: 0,
  },
};

export const ADD_MOUNT = 'ADD_MOUNT';

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_MOUNT:
    return {
      wallet: {
        total: action.wallet.total,
      },
    };
  default:
    return state;
  }
}

export default walletReducer;
