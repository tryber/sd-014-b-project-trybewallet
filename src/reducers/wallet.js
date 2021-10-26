import { WALLET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  totalValue: 0,
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_EXPENSES:
    return {
      totalValue: state.totalValue + (Number(action.object.value)
      * action.object.exchangeRates[action.object.currency].ask),
      expenses: [...state.expenses, {
        id: state.expenses.length,

        value: action.object.value,

        description: action.object.description,

        method: action.object.method,

        tag: action.object.tag,

        currency: action.object.currency,

        exchangeRates: action.object.exchangeRates,
      }],
    };
  default:
    return state;
  }
};

export default wallet;
