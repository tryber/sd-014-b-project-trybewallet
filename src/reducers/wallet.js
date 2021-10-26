const initialState = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

export default function wallet(state = initialState, action) {
  switch (action.payload) {
  default:
    return state;
  }
}
