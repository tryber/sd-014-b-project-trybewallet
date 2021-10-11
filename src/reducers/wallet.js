// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = { currencies: [], expenses: [] };

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.value]
    };
  default:
    return state;
  }
}

export default wallet;

/* {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: []
  }
} */