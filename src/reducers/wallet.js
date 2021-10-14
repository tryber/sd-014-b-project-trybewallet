// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_CURRENCY':
    return {
      ...state,
      isFetching: true,
    };
  case 'GET_CURRENCY':
    return {
      ...state,
      currencies: action.payload,
      isFetching: false,
    };
  default:
    return state;
  }
}

export default walletReducer;
