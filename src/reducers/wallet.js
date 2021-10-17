import SET_WALLET_VALUE from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SET_WALLET_VALUE:
    return { ...state, currencies: currencies.payload };
  case 'SET_WALLET_EXPENSES':
    return { ...state, expenses: [expenses.payload] };
  default:
    return state;
  }
};

export default reducer;
