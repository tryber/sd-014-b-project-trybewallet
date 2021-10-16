// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  expenses: '',
};

const soma = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'VALOR_CONVERTIDO':
    console.log(action);
    return { ...state, expenses: action.value };
  default:
    return state;
  }
};

export default soma;
