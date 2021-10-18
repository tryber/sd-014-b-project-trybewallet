// todo: rever se precisa espalhar o estado
const initialState = { currencies: [], expenses: [] };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'wallet/currencies':
    return { ...state, currencies: action.payload };
  case 'wallet/expenses':
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
}
