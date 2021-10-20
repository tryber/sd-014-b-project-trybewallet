import { SET_EXCHANGE_RATES_SUCCESS,
  GET_CURRENCY_SUCCESS,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  arrayCurrency: [],
  loading: false,
  error: null,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXCHANGE_RATES_SUCCESS:
    // state.expenses.push(action.payload);
    return { ...state,
      expenses: action.payload,
    };
  case GET_CURRENCY_SUCCESS:
    return { ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
