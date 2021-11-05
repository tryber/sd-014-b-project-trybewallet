// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const allExpenses = state.expenses.length;
  const newObj = action.state;
  const array = [...state.expenses, action.state];
  switch (action.type) {
  case 'SUBMIT_EXPENSES':
    newObj.id = allExpenses + 1;
    return { ...state, expenses: array };
  default:
    return state;
  }
};

export default wallet;
