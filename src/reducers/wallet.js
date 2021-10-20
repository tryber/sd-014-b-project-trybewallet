// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'INPUT_DESPESA':
    return { ...state, expenses: action.value };
  case 'SAVE_CURRENCIES':
    return { ...state, currencies: action.value };
  case 'REQUEST_CURRENCIES':
    return { ...state, currencies: action.value };
  default:
    return state;
  }
};

export default wallet;
