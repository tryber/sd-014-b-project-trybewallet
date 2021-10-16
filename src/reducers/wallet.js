// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'INPUT_DESPESA':
    console.log(action.value);
    return { ...state, expenses: action.value };
  default:
    return state;
  }
};

export default wallet;
