// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case typeName:
    return { ...state, ...payload };

  default:
    return state;
  }
};
