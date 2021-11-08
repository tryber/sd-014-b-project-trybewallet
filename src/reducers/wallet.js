import {
  SET_WALLET_DATA,
  SET_SPENT_TOTAL,
  UPDATE_SPENT_TOTAL,
  UPDATE_EXPENSES,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
/**
 * Consultei o repositorio exercise-forms-redux para
 * estudar e compreender como implementar:
 * - wallet
 * Ref: https://github.com/andersonleite1/exercise-forms-redux/blob/gabarito.2/src/redux/reducer/reducer.js
 */

const INITIAL_STATE = {
  expenses: [],
  spentTotal: 0,
};

const updateSpentTotal = (state) => {
  const { expenses } = state;
  // ref: https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer
  return expenses.reduce((total, { value, exchangeRates, currency }) => (
    total + (value * exchangeRates[currency].ask)
  ), 0);
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_WALLET_DATA:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };
  case SET_SPENT_TOTAL:
    return {
      ...state,
      spentTotal: action.payload.spentTotal,
    };
  case UPDATE_SPENT_TOTAL:
    return {
      ...state,
      spentTotal: updateSpentTotal(state),
    };
  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
