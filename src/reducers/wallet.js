import { GET_CURRENCY, GET_CURRENCY_SUCCESS, GET_CURRENCY_ERROR } from '../actions/index';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  arrayCurrency: ['n', 'f'],
  loading: false,
  error: null,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state,
      loading: true,
    };
  case GET_CURRENCY_SUCCESS:
    return { ...state,
      currencies: action.payload,
      loading: false,
    };
  case GET_CURRENCY_ERROR:
    return { ...state,
      error: action.payload.error,
      loading: false,
    };
  default:
    return state;
  }
};

export default walletReducer;
