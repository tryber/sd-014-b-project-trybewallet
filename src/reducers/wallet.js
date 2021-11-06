import { SET_WALLET_DATA, SET_SPENT_TOTAL } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
