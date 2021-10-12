const initialState = { currencies: [], expenses: [] };

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  case 'REMOVE':
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.value.id),
    };
  case 'EDIT':
    return {
      ...state,
      expenses: state.expenses.map((item) => {
        if (item.id === action.value.id) {
          item = { ...item, ...action.value };
          return item;
        }
        return item;
      }),
    };
  default:
    return state;
  }
}

export default wallet;
