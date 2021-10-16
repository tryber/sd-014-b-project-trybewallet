const INITIAL = {
  localCurrency: 'BRL',
  hasCurrencies: false,
  currencies: [],
  expenses: [],
};
const WALLET = 'WALLET';
const GET_CURRENCIES = 'GET_CURRENCIES';
const CURRENCY_LOADED = 'CURRENCY_LOADED';

const walletReducer = (state = INITIAL, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, [action.name]: action.value };
  case GET_CURRENCIES:
    return { ...state, currencies: [...action.value] };
  case CURRENCY_LOADED:
    return { ...state, hasCurrencies: true };
  default:
    return state;
  }
};

export default walletReducer;
