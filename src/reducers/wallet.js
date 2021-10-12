// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = { currencies: [], expenses: [] };

/* const currency = item.currency;
const currencyName = item.exchangeRates[currency].name.split('/')[0];
const currencyValue = item.exchangeRates[currency].ask;
const convert = currencyValue * item.value; */

function wallet(state = initialState, action) {
  // console.log(state);
  switch (action.type) {
  case 'EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.value]
    };
  case 'REMOVE':
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.value.id)
    }
  case 'EDIT':
    return {
      ...state,
      expenses: state.expenses.map((item, index) => {
        if (item.id === action.value.id) {
          const { description, tag, method, value, currency } = action.value;
          state.expenses[index].description = action.value.description;
          state.expenses[index].tag = action.value.tag;
          state.expenses[index].method = action.value.method;
          state.expenses[index].value = action.value.value;
          state.expenses[index].currency = action.value.currency;
          return item;
        }
        return item;
      }),
    }
  default:
    return state;
  }
}

export default wallet;
