import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: action.currentID,
        value: action.valueInput,
        description: action.descriptionInput,
        currency: action.currencyInput,
        method: action.paymentMethodInput,
        tag: action.categoryInput,
        exchangeRates: action.exchangeRates,
      }],
    };
  default:
    return state;
  }
}

export default wallet;
