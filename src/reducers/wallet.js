import { REQUEST_CURRENCIES, GET_CURRENCIES, CREATE_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  latestCurrenciesData: {},
  isFetching: false,
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, latestCurrenciesData: { ...action.payload }, isFetching: false };
  case CREATE_EXPENSE: {
    const currentExpenses = [...state.expenses];
    const exchangeRates = { ...state.latestCurrenciesData };

    return {
      ...state,
      expenses: [
        ...currentExpenses,
        {
          id: currentExpenses.length,
          ...action.payload,
          exchangeRates,
        },
      ],
    };
  }
  default:
    return state;
  }
}
