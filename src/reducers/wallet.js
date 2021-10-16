const initialState = { currencies: [], expenses: [] };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'wallet/currencies':
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}
