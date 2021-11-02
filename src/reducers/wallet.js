const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  return {
    ...state,
    currencies: action.payload,
    expenses: [...state.expenses, action.payload],
  };
}

export default wallet;
