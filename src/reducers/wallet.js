// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

function expenses(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expense,
      ],
    };
  case 'UPDATE_CURRENCIES':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'SUM_TO_TOTAL_EXPENSES':
    return {
      ...state,
      totalExpenses: state.totalExpenses + action.value,
    };
  default:
    return state;
  }
}

export default expenses;
