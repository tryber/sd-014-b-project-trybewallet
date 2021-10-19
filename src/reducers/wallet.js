// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case 'GENERIC_ACTION':
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default wallet;
