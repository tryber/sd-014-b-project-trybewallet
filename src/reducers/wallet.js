// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'RECEIVE_CURRENCY':
    return { ...state, currencies: action.currencies };
  case 'SUBMIT_EXPENSE':
    return { ...state, expenses: [...state.expenses, action.expense] };
  default:
    return state;
  }
}

export default wallet;
