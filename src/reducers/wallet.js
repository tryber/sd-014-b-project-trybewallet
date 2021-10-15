// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case EXPENSE:
    return {
      ...state,
      wallet: {
        ...state.wallet,
        currencies: action.currency,
        expenses: action.payload,
      },
    };
  default:
    return state;
  }
}

export default wallet;
