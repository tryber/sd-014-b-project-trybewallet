import { GET_CURRENCIES_DATA_SUCCESS, GET_CURRENCIES_DATA_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  erro: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES_DATA_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;

// ** chama a action de fato com o dispatch
// (Com redux e action definidos)
