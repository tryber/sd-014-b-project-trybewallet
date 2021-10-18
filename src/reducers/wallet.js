// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INISTIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INISTIAL_STATE, action) => {
  switch (action.type) {
  case 'CURRENCIES':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'EXPENSES':
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
