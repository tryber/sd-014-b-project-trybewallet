// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

function spliceExpense(expensesArr, action) {
  const index = expensesArr.findIndex(({ id }) => id === action.expense.id);
  expensesArr.splice(index, 1, action.expense);
  return expensesArr;
}

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
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      expenses: spliceExpense([...state.expenses], action),
    };
  case 'UPDATE_CURRENCIES':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'UPDATE_TOTAL_EXPENSES':
    return {
      ...state,
      totalExpenses: state.expenses.length
        ? state.expenses.reduce((sum, { value, currency, exchangeRates }) => {
          const { ask } = Object.values(exchangeRates)
            .find(({ code }) => code === currency);
          return sum + (+value * +ask);
        }, 0)
        : 0,
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
