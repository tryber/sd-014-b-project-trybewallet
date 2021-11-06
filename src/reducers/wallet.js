// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUBMIT_EXPENSES': {
    const allExpenses = state.expenses.length;
    const newObj = action.state;
    const array = [...state.expenses, action.state];
    newObj.id = allExpenses;
    return { ...state, expenses: array };
  }
  case 'DELETE_EXPENSE': {
    const allExpenses = state.expenses;
    const expenseReturn = allExpenses.filter((expense) => expense.id !== action.state);
    return { ...state, expenses: expenseReturn };
  }
  default:
    return state;
  }
};

export default wallet;
