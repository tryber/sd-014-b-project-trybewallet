import { REQUEST_API, REQUEST_API_SUCCESS,
  REQUEST_API_ERROR,
  REQUEST_API_EXPENSES, REQUEST_API_EXPENSES_SUCCESS } from '../actions';

const INNITIAL_STATE = {
  currencies: [],
  isFetching: false,
  expenses: [],
};

const wallet = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state, isFetching: true,
    };

  case REQUEST_API_SUCCESS:
    return {
      ...state,
      isFetching: false,
      currencies: Object.keys(action.payload),
    };

  case REQUEST_API_ERROR:
    return {
      ...state,
      isFetching: false,
      currencies: Error,
    };

  case REQUEST_API_EXPENSES:
    return {
      ...state,
      isFetching: false,
    };

  case REQUEST_API_EXPENSES_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: action.id,
          ...action.expensesInfo,
          exchangeRates: action.dataAPI,
        },
      ],
    };

  default:
    return state;
  }
};

export default wallet;
