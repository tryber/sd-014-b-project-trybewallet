// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [{ value: 0 }],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'INPUT_DESPESA':
    return { ...state, expenses: action.value };
  default:
    return state;
  }
};

export default wallet;
