// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES_API, GET_DATA_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_DATA_CURRENCIES:
    return {
      ...state,
      currencies: Object.values(action.currencies).filter(({ codein }) => (
        codein !== 'BRLT'
      )),
      isLoading: false,
    };
  default:
    return state;
  }
};

export default wallet;
