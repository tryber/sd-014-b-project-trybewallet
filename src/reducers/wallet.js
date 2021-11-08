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
  valorTotal = expense.value * [expense.exchangeRates[currencyOne].ask];
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
  default:
    return state;
  }
};

export default wallet;
