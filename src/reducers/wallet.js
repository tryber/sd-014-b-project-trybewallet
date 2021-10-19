// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function expenses(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return {
      ...state,
      wallet: {
        ...state.wallet,
        expenses: [
          ...state.wallet.expenses,
          action.expense,
        ],
      },
    };
  default:
    return state;
  }
}

export default expenses;
