// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
  total: 0,
};

const calculaTotal = (expense) => {
  let valorTotal = 0;
  const currencyOne = expense.currency;
  valorTotal = Number((expense.value) * [expense.exchangeRates[currencyOne].ask]);
  return valorTotal;
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUBMIT_WALLET':
    return action.payload;
  case 'SUBMIT_EXPENSES':
    return {
      ...state,
      id: state.id + 1,
      expenses: [...state.expenses, { ...action.payload, id: state.id }],
      total: state.total + calculaTotal(action.payload),
    };
  case 'DELETE_EXPENSES': {
    const { expenses } = state;
    const filterExpenses = expenses.filter((expense) => expense.id !== action.id);
    const valueExpenseDelet = expenses.filter((expense) => expense.id === action.id);
    const currencyDelet = valueExpenseDelet[0].currency;
    const valorConvertDelet = valueExpenseDelet[0].exchangeRates[currencyDelet].ask;
    return {
      ...state,
      expenses: filterExpenses,
      total: (state.total - (valueExpenseDelet[0].value * valorConvertDelet)),
    };
  }
  default:
    return state;
  }
};

export default wallet;
