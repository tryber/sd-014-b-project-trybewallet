import { SUBMIT_VALUE } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
};

function reducerValue(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_VALUE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        value: action.payloadValue.value,
        description: action.payloadValue.description,
        tag: action.payloadValue.tag,
        method: action.payloadValue.method,
        currency: action.payloadValue.currency,
        exchangeRates: action.payloadValue.responseJson,
      }],
    };

  default:
    return state;
  }
}

export default reducerValue;
