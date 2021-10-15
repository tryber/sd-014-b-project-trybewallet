// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, { type, payload }) => {
  switch (type) {
  case 'typeName':
    return { ...state, ...payload };

  default:
    return state;
  }
};

export default wallet;
