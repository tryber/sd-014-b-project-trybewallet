// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
  total: 0,
};

// const calculaTotal = (expense) => {
//   let valorTotal = 0;
//   const currencyOne = expense.currency;
//   valorTotal = Number(expense.value) * Number([expense.exchangeRates[currencyOne].ask]);
//   return valorTotal;
// };

const calculaTotal = (expenses) => {
  let valorTotal = 0;
  expenses.forEach((expense) => {
    const { currency, value, exchangeRates } = expense;
    valorTotal += Number(value) * Number(exchangeRates[currency].ask);
  });
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
      total: calculaTotal([...state.expenses, { ...action.payload, id: state.id }]),
    };
  case 'DELETE_EXPENSES': {
    // const { expenses } = state;
    // const filterExpenses = expenses.filter((expense) => expense.id !== action.id);
    // const valueExpenseDelet = expenses.filter((expense) => expense.id === action.id);
    // const currencyDelet = valueExpenseDelet[0].currency;
    // const valorConvertDelet = valueExpenseDelet[0].exchangeRates[currencyDelet].ask;
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
      total: calculaTotal(state.expenses.filter((expense) => expense.id !== action.id)),
    };
  }
  default:
    return state;
  }
};

export default wallet;
