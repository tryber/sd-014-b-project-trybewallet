const INITAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case 'CURRENCIES':
    return { ...state, currencies: action.payload };
  case 'EXPENSES':
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default wallet;
