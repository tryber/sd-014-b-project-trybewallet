// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case ADD_DISPESA:
    return { ...state, wallet: [action.entrar] };
  default:
    return state;
  }
};

export default wallet;
